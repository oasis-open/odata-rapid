import yargs from 'yargs'
import { transformRSQL } from '../components/transform'

type Params = { name?: string }

export const command = 'transform <name>'

export const desc = 'Transform RSDL to OData compatible CSDL JSON format'

// tslint:disable-next-line: typedef
export const builder = (args: yargs.Argv) => {
     args.positional('name', {
          describe: 'RSDL file name',
          type: 'string',
     })
}

export async function handler({ name }: Params) {
     transformRSQL(name)
}
