/**
 * Configuration for example app
 */
export class Config {
    public port: string | number
    public db: { database: string; user?: string; password?: string; host: string, port: number | string }
    public constructor() {
        this.port = process.env.PORT || 4000

        this.db = {
            database: process.env.MONGO_COLLECTION || 'showcase',
            host: process.env.MONGO_HOST || '127.0.0.1',
            user: process.env.MONGO_USER,
            password: process.env.MONGO_PASSWORD,
            port: process.env.MONGO_PORT || 27017
        }
    }
}

export const config = new Config();