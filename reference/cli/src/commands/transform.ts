import { transformOpenApiSpec } from '../components'

type Params = { name?: string }

export const command = 'transform'

export const desc = 'Transform RSDL to different format'

export const builder = {}

export async function handler({ name }: Params) {
     // tranformRSQL(name)
}
