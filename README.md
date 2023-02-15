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
npm i @zanminkian/tsconfig -D
```

### Config `tsconfig.json`

```json
{
  "extends": "@zanminkian/tsconfig"
}
```

## Best Practices

Here are the best practices if you use this package.

### For single-project-repo

```
├── src
│   └── index.ts
├── test
│   └── index.spec.ts
├── package.json
└── tsconfig.json
```

#### tsconfig.json

```json
{
  "extends": "@zanminkian/tsconfig",
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
│   │   └── tsconfig.json
│   └── app2
│       ├── src
│       │   └── main.ts
│       ├── test
│       │   └── main.spec.ts
│       ├── package.json
│       └── tsconfig.json
├── package.json
└── tsconfig.json
```

#### tsconfig.json in the root of project

```json
{
  "extends": "@zanminkian/tsconfig"
}
```

#### tsconfig.json in each app

```json
{
  "extends": "../../tsconfig",
  "include": ["src"],
  "exclude": ["**/*.spec.ts"],
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

## License
[MIT](./LICENSE)
