import express from 'express';

import { appConfig } from './config/app';

class App {
private app: express.Application = express();
  private port: Number = appConfig.port;

  constructor () {
    this.bootstrap();
  }
  bootstrap() {
    this.registerSocketControllers();
    this.registerDefaultHomePage();

  }
  private registerSocketControllers() {
    const server = require('http').Server(this.app);
    // const io = require('socket.io')(server);

    // this.app.use(function (req: any, res: any, next) {
    //   req.io = io;
    //   next();
    // });

    server.listen(this.port, () => console.log(`🚀 Server started at http://localhost:${this.port}\n🚨️ Environment: ${process.env.NODE_ENV}`));
    
  }
  private registerDefaultHomePage() {
    this.app.get('/', (req, res) => {
      res.json({
        title: appConfig.name,
        mode: appConfig.node,
        date: new Date(),
      });
    });
  }
}

new App();