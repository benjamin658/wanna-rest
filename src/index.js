#!/usr/bin/env node
const program = require('commander');

const server = require('./server');

const checkParams = (program) => {
  const requiredParameters = [];
  program.options.forEach(option => {
    const name = option.long.slice(2);
    if (option.required && !option.hasOwnProperty(name)) {
      requiredParameters.push(name);
    }
  });

  if(requiredParameters.length) {
    throw new Error(`Required parameters "${requiredParameters.join(', ')}" were ommitted.`);
  }
}

program
  .version('0.1.0')
  .option('-p, --port <n>', '[Required] API server listening port.', parseInt)
  .option('-f --file <path>', '[Required] API configuration file path.')
  .parse(process.argv);

checkParams(program);

server({
  port: program.port,
  file: program.file,
});