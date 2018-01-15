import fs from 'fs';
import path from 'path';
import jsonfile from 'jsonfile';

export default function (config) {
  const filename = path.resolve(config);

  return new Promise((resolve, reject) => {
    jsonfile.readFile(filename, function (err, obj) {
      if (err || !obj) {
        return reject(new Error('Invalid JSON configuration file.'));
      }

      return resolve(obj);
    });
  });
}