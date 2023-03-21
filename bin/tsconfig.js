import { resolve } from 'node:path'
import fs from 'node:fs'
import { Command } from 'commander'

const generatingTsconfigContent = `{
  "extends": "@zanminkian/tsconfig",
  "include": ["src"],
  "exclude": ["**/*.spec.ts"],
  "compilerOptions": {
    "outDir": "dist"
  }
}
`

const program = new Command()
program.name('tsconfig')
program.command('generate')
  .description('generate a tsconfig file')
  .alias('g')
  .option('-t, --to <path>', 'directory that generating to', '.')
  .option('-n, --name <filename>', 'tsconfig file name', 'tsconfig.json')
  .action(({ to, name }) => {
    const fullName = resolve(process.cwd(), to, name)
    if (fs.existsSync(fullName))
      throw new Error(`${fullName} is already existing!`)
    else
      fs.writeFileSync(fullName, generatingTsconfigContent)
  })

program.parse()
