 

type Params = { name?: string }

export const command = 'validate'

export const desc = 'Validate RSDL file'

export const builder = {}

export async function handler({ name }: Params) {
    // validateRSDL(name)
}