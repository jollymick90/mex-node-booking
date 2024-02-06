import 'module-alias/register';

import express from 'express';
import {
  useContainer as routingControllersUseContainer,
  useExpressServer,
} from 'routing-controllers';
import Container from 'typedi';

import { appConfig } from './config/app';

class App {
private app: express.Application = express();
  private port: Number = appConfig.port;

  constructor () {
    
    this.bootstrap();
  }
  bootstrap() {
    this.useContainers();
    this.registerSocketControllers();
    this.registerDefaultHomePage();
    this.registerRoutingControllers();

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
  private registerRoutingControllers() {
    useExpressServer(this.app, {
      validation: { stopAtFirstError: true },
      cors: true,
      classTransformer: true,
      defaultErrorHandler: false,
      routePrefix: appConfig.routePrefix,
      controllers: [__dirname + appConfig.controllersDir]
      // middlewares: [__dirname + appConfig.middlewaresDir],
    });
  }
  private useContainers() {
    routingControllersUseContainer(Container);

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