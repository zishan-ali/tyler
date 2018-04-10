import fs from 'fs';

export default (path) => (
  new Promise((resolve, reject) => {
    fs.mkdir(path, (err) => {
      if (err && err.code !== 'EEXIST') {
        reject(err)
        return;
      }
      resolve(path);
    });
  })
);