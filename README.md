# @zanminkian/tsconfig

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/@zanminkian%2Ftsconfig.svg)](https://badge.fury.io/js/@zanminkian%2Ftsconfig) 

Strict shared tsconfig out-of-box.

## Feature

- Strict.
- Best practice.
- One-line of tsconfig.
- Support FE (eg: [React](https://github.com/facebook/react)) & BE (eg: [Nest](https://github.com/nestjs/nest)) project.

## Requirement

- Typescript 4.8+.
- Node 16+.

## Usage

### Install

```bash
npm i @zanminkian/tsconfig
```

### Config `tsconfig.json`

```json
{
  "extends": "@zanminkian/tsconfig"
}
```

## Best Practices

### For single-project-repo

```
├── src
│   └── index.ts
├── test
│   └── index.spec.ts
├── package.json
├── tsconfig.build.json
└── tsconfig.json
```

#### tsconfig.json

> `tsconfig.json` works for development (IDE prompt) and test.

```json
{
  "extends": "@zanminkian/tsconfig"
}
```

#### tsconfig.build.json

> `tsconfig.build.json` works for production build.

```json
{
  "extends": "./tsconfig.json",
  "include": ["src"],
  "exclude": ["**/*.spec.ts"],
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

### For monorepo

```
├── apps
│   ├── app1
│   │   ├── src
│   │   │   └── main.ts
│   │   ├── test
│   │   │   └── main.spec.ts
│   │   ├── package.json
│   │   └── tsconfig.build.json
│   └── app2
│       ├── src
│       │   └── main.ts
│       ├── test
│       │   └── main.spec.ts
│       ├── package.json
│       └── tsconfig.build.json
├── package.json
└── tsconfig.json
```

> Similar to single-project-repo, the root `tsconfig.json` works for development (IDE prompt) and test, while `tsconfig.build.json` in each sub-app works for production build.

## License
[MIT](./LICENSE)
