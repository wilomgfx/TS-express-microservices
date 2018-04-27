import express from 'express';
import * as path from 'path';
import logger from 'morgan';
import * as bodyParser from 'body-parser';

// Controllers (route handlers)
import * as UserController from './controllers/UserController';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  // Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.express.set('port', process.env.PORT || 9000);
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    const router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!',
      });
    });
    router.get('/users', UserController.list);
    this.express.use('/', router);
  }

}

export default new App().express;
