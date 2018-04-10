import fs from 'fs';
import stripIndent from 'strip-indent';

export default (path, content) => {
  const prettyContent = stripIndent(content);

  return new Promise((resolve, reject) => {
    fs.open(path, 'w', (err, fd) => {
      if (err) {
        if (err.code !== 'EEXIST') {
          reject(err);
          return;
        }
      }

      fs.write(fd, prettyContent, (writeErr) => {
        if (writeErr) {
          reject(writeErr);
          return;
        }
        resolve(path);
      });
    });
  })
};