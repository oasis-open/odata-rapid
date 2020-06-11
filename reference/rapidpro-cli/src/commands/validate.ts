import yargs from 'yargs'
import { validateRSDL } from '../components/validateRSDL'

type Params = { name?: string }

export const command = 'validate <name>'

export const desc = 'Validate RSDL file'

// tslint:disable-next-line: typedef
export const builder = (args: yargs.Argv) => {
     args.positional('name', {
          describe: 'RSDL file name',
          type: 'string',
     })
}

export async function handler({ name }: Params) {
     validateRSDL(name)
}
