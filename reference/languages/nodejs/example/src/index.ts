import dotenv from 'dotenv';
// Setup env variables
dotenv.config()

import cors from 'cors';
import express from 'express';
import http from 'http'
import { config } from './config/config'
import { createApolloServer } from './graphql';

async function start() {
  const app = express();

  app.use(cors());
  app.get('/health', (req, res) => res.sendStatus(200));

  const httpServer = http.createServer(app)
  apolloServer.installSubscriptionHandlers(httpServer)

  httpServer.listen(config.port, () => {
    console.log(`\n    ***********************************************************
    🎮 Rapid Pro Node.js Demo is running. 
    🚀 Please open http://localhost:${config.port} in your browser
    ***********************************************************`)
  })
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
})


process.on('unhandledRejection', (error: any) => {
  console.error(error.message, error.stack)
  process.exit(1)
})
