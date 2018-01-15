import express from 'express';
import ngrok from 'ngrok';
import chalk from 'chalk';

import readConfig from './readConfig';
import createRoute from './createRoute';

export default async function ({ config, port, useNgrok }) {
  const app = express();

  // Load json config.
  try {
    const jsonConfig = await readConfig(config);
    const apiRoutes = createRoute(jsonConfig);
    app.use(apiRoutes);
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }

  app.listen(port, () => {
    console.log(chalk.green(`[INFO] Server is listening on port ${port}`));

    if (useNgrok) {
      ngrok.connect(port, function (err, url) {
        console.log(chalk.green(`[INFO] ngrok URL is ${url}`));
        require("openurl").open(url)
      });
    }
  });

  return app;
};
