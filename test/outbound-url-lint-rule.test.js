const {expect} = require("chai")
const {Linter} = require("eslint")
const tsParser = require("@typescript-eslint/parser")

const {selectors: outboundUrlSelectors} = require("../url")

const linter = new Linter({configType: "flat"})

function lintSource(source) {
  return linter.verify(source, {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "no-restricted-syntax": ["error", ...outboundUrlSelectors],
    },
  })
}

function restrictedSyntaxMessages(messages) {
  return messages.filter(message => message.ruleId === "no-restricted-syntax")
}

describe("outbound URL eslint selectors", () => {
  it("rejects raw template strings passed to request", () => {
    const messages = lintSource(`
      declare const request: (url: unknown) => void
      const base = "https://example.test/"
      const id = "secret"
      request(\`\${base}/accounts/\${id}\`)
    `)

    expect(restrictedSyntaxMessages(messages)).to.have.lengthOf(1)
  })

  it("rejects string literals passed to request.post", () => {
    const messages = lintSource(`
      declare const request: { post: (url: unknown) => void }
      request.post("https://example.test/token")
    `)

    expect(restrictedSyntaxMessages(messages)).to.have.lengthOf(1)
  })

  it("rejects binary expressions passed to got", () => {
    const messages = lintSource(`
      declare const got: (url: unknown) => void
      const base = "https://example.test/"
      const path = "/accounts"
      got(base + path)
    `)

    expect(restrictedSyntaxMessages(messages)).to.have.lengthOf(1)
  })

  it("rejects uri built from binary expressions in put options", () => {
    const messages = lintSource(`
      declare const put: (options: { uri: string }) => void
      const host = "https://example.test"
      const url = "/v2/accounts"
      put({ uri: host + url })
    `)

    expect(restrictedSyntaxMessages(messages)).to.have.lengthOf(1)
  })

  it("rejects trusted() wrapping a built string", () => {
    const messages = lintSource(`
      declare function trusted(value: string): unknown
      const a = "https://example.test/"
      const id = "secret"
      trusted(\`\${a}/\${id}\`)
    `)

    expect(restrictedSyntaxMessages(messages)).to.have.lengthOf(1)
  })

  it("allows URL tagged templates", () => {
    const messages = lintSource(`
      declare const request: (url: unknown) => void
      declare function URL(strings: TemplateStringsArray, ...values: unknown[]): unknown
      declare function trusted(value: string): unknown
      const base = "https://example.test/"
      const id = "secret"
      request(URL\`\${trusted(base)}/accounts/\${id}\`)
    `)

    expect(restrictedSyntaxMessages(messages)).to.have.lengthOf(0)
  })

  it("allows untemplated() and identifier url arguments", () => {
    const messages = lintSource(`
      declare const request: (url: unknown) => void
      declare function untemplated(rawUrl: string): unknown
      const nextLink = "https://example.test/next"
      const currentUrl = untemplated(nextLink)
      request(currentUrl)
    `)

    expect(restrictedSyntaxMessages(messages)).to.have.lengthOf(0)
  })

  it("allows trusted() with a single config reference", () => {
    const messages = lintSource(`
      declare function trusted(value: string): unknown
      declare const config: { provider: { tokenEndpoint: string } }
      trusted(config.provider.tokenEndpoint)
    `)

    expect(restrictedSyntaxMessages(messages)).to.have.lengthOf(0)
  })
})
