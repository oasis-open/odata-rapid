import http from 'http'
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';

// Setup env variables
dotenv.config()

import { config } from './config'

async function start() {
  const app = express();

  app.use(cors());
  app.get('/health', (req: any, res: any) => res.sendStatus(200));

  const httpServer = http.createServer(app)
  
  httpServer.listen(config.port, () => {
    console.log(`\n    ***********************************************************
    🎮 Rapid Pro Node.js Demo is running. 
    🚀 Please open http://localhost:${config.port} in your browser
    ***********************************************************`)
  })
}

start().catch((err: any) => {
  console.error(err);
  process.exit(1);
})


process.on('unhandledRejection', (error: any) => {
  console.error(error.message, error.stack)
  process.exit(1)
})
