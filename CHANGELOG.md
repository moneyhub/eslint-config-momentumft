# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## v11.0.0
Major upgrade to use ESLint version 9. This new version of ESLint changes the way config is organised. The new method makes it much easier to share and extend config, therefore making this library easier to use.

You no longer will need to have peer dependencies installed for all the plugins in the library using this config, that is managed for you. You will just need to install ESLint at version 9 or above in your library and this configuration and you're ready to go.

This version also introduces a common TypeScript linting configuration (based on OAuth Provider's configuration), to make starting a new TypeScript library all that more easy.

## [6.0.0](https://github.com/momentumft/eslint-config-momentumft/compare/v5.1.0...v6.0.0) (2021-06-24)


### ⚠ BREAKING CHANGES

* **plugins:** React and FP not longer extend core rules. Core rules now include additional plugins

### Features

* **plugins:** :sparkles: add plugins to core rules ([eb47646](https://github.com/momentumft/eslint-config-momentumft/commit/eb4764681661e11f11dca3b61e0ae781ffaa2a76))
