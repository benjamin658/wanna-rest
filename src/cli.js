#!/usr/bin/env node
import program from 'commander';
import colors from 'colors';

import server from './server';

program
  .version('0.1.0')
  .option('-p, --port <n>', '[Required] API server listening port.', parseInt)
  .option('-c, --config <path>', '[Required] API configuration file path.')
  .option('-k, --ngrok ', '[Option] Use ngrok to expose a local server behind a NAT or firewall to the internet.')
  .parse(process.argv);

if (!program.port || !program.config) {
  program.outputHelp(colors.red);
  process.exit(-1);
}

server({
  config: program.config,
  port: program.port,
  useNgrok: program.ngrok,
});
