#  Amplience CMS NextJS, Typescript and Storybook UI component library

All linting, formatting, type checking etc has been set up to be lenient and unopinionated as possible until these can be agreed in the team.

Based on [NextJS Typescript Boilerplate](https://github.com/whoisryosuke/next-styled-storybook-starter) using:

- [**Typescript**](https://www.typescriptlang.org/) for type safety
- [**ESLint**](https://eslint.org/) for linting
- [**Prettier**](https://prettier.io/) for formatting
- [**React Bootstrap**](https://react-bootstrap.github.io/) React-Bootstrap replaces the Bootstrap JS, each component built from scratch as a true React component, without unneeded dependencies like jQuery
- [**husky**](https://github.com/typicode/husky) for linting, typechecking and formatting with commit hooks
- [**Jest**](https://jestjs.io/) and [**react-testing-library**](https://testing-library.com/docs/react-testing-library/intro) for testing
- [**Styled Components**](https://styled-components.com/) for CSS-in-JS styling and theming
- [**Storybook**](https://storybook.js.org/) with a "theme getter" (`t("colors.white.1000")`)
- [**Google Fonts**](https://fonts.google.com) setup in NextJS app and Storybook
- [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) for easy commits that follow conventional standard.
- [**Semantic Release**](https://github.com/semantic-release/semantic-release) for automated app versioning


## How to use

Yarn is the chosen package manager for this project install dependencies using: `yarn`

Now you have 2 main options:

- Run Storybook: `yarn storybook`
- Run the NextJS app: `yarn dev`

# Storybook

**Storybook** is used for developing components in isolation, providing integration testing and creating documentation for components for designers and devs. It comes setup with MDX docs, as well Storybook **a11y** addon for testing accessibility.

## MDX Template
**MDX** is used for documentng Stories a file format that combines Markdown with JSX https://storybook.js.org/docs/react/writing-docs/mdx

# Testing

##### With Jest

`yarn test`

This project is setup with **Jest**, Jest **Snapshots**, and **react-testing-library**. This means you can **snapshot test** (save codified representation of components for comparison) and **unit test** component functionality (like clicking a button and verifying a result).

Test utilities are provided for convenience (see: `test/testUtils.ts`), like a custom render function to allow you to wrap tests in "providers" (like a theme for CSS-in-JS).

##### With Typescript

`yarn type-check`

Runs the Typescript CLI for type checking. This also runs as a `pre-push` git hook to ensure code quality before pushing to remote servers.

# Git Commits

Git commits are "linted" (or checked) to ensure they follow conventional commit standards. To make this process easier, a commit script is included:

1. Stage some files using `git add` (or VSCode UI)
1. `yarn commit`

This runs the Commitzen CLI and walks you through writing a conventional commit (e.g. `feat(button): new focus ref`). It's much easier than remembering every type of commit (feat, build, bug, etc) and the right syntax. 

# CI / CD

This project is setup with a **Circle CI** configuration for testing commits to any branch, and releasing only commits to `master` and `beta` branches.

*Sample release flow:*

- Clone your repo (a fork of this one most likely)
- Create a new feature/bug/etc branch
- Make commits and push them to Github
- **This triggers a test in CI**
- Open a PR and merge the branch to `beta` branch for testing
- **This triggers a test *and* release in CI**
- Force push branch changes to master
- **This triggers a test *and* release in CI**

A develop branch was created from main.
A release branch is created from develop.
Feature branches are created from develop.
When a feature is complete it is merged into the develop branch.
When the release branch is done it is merged into develop.