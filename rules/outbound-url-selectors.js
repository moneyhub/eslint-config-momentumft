const clients = "/^(request|got|requester)$/"
const verbs = "/^(get|post|put|patch|delete|head)$/"
const rawUrlArg = "/^(TemplateLiteral|BinaryExpression)$/"
const message =
  "Build outbound URLs with the URL`...` tag rather than raw template strings or concatenation, so they can be aggregated in request logs. Plain string URLs are fine."

module.exports = [
  {
    selector: `CallExpression[callee.name=${clients}][arguments.0.type=${rawUrlArg}]`,
    message,
  },
  {
    selector: `CallExpression[callee.property.name=${clients}][arguments.0.type=${rawUrlArg}]`,
    message,
  },
  {
    selector: `CallExpression[callee.object.name=${clients}][callee.property.name=${verbs}][arguments.0.type=${rawUrlArg}]`,
    message,
  },
  {
    selector: `CallExpression[callee.object.property.name=${clients}][callee.property.name=${verbs}][arguments.0.type=${rawUrlArg}]`,
    message,
  },
  {
    selector: `CallExpression[callee.name='put'] Property[key.name='uri'][value.type=${rawUrlArg}][parent.parent.type='CallExpression']`,
    message,
  },
  {
    selector:
      "CallExpression[callee.name='trusted'][arguments.0.type=/^(TemplateLiteral|BinaryExpression)$/]",
    message:
      "trusted() must wrap a single config value, not a built string; interpolate IDs through URL instead.",
  },
]
