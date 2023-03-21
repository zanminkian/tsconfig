# @zanminkian/tsconfig

[![](https://img.shields.io/npm/l/@zanminkian/tsconfig.svg)](https://github.com/zanminkian/tsconfig/blob/master/LICENSE)
[![](https://img.shields.io/npm/v/@zanminkian/tsconfig.svg)](https://www.npmjs.com/package/@zanminkian/tsconfig)
[![](https://img.shields.io/npm/dm/@zanminkian/tsconfig.svg)](https://www.npmjs.com/package/@zanminkian/tsconfig)
[![](https://img.shields.io/librariesio/release/npm/@zanminkian/tsconfig)](https://www.npmjs.com/package/@zanminkian/tsconfig)
[![](https://packagephobia.com/badge?p=@zanminkian/tsconfig)](https://packagephobia.com/result?p=@zanminkian/tsconfig)

Strict shared tsconfig out-of-box.

## Feature

- Strictest configs with best practices.
- One-line of tsconfig.
- Support `Typescript 5.0`.
- Support `ESM` and `CommonJS` by `type` field in `package.json`.
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

Here are the best practices if you are using this package.

### For polyrepo

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

## Commands

After installing `@zanminkian/tsconfig`, you can run `npx tsconfig g` command to generate a `tsconfig` file. Run `npx tsconfig g -h` for more detail of the command:

```txt
Usage: tsconfig generate|g [options]

generate a tsconfig file

Options:
  -t, --to <path>        directory that generating to (default: ".")
  -n, --name <filename>  tsconfig file name (default: "tsconfig.json")
  -h, --help             display help for command
```

## License
MIT