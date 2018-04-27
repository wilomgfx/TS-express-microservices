import errorhandler from 'errorhandler';

import App from './App';

/**
 * Error Handler. Provides full stack - remove for production
 */
App.use(errorhandler());

/**
 * Start Express server.
 */
const server = App.listen(App.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    App.get("port"),
    App.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
