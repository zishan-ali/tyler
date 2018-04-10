import fs from 'fs';
import stripIndent from 'strip-indent';

export default (path, content) => {
  const prettyContent = stripIndent(content);

  return new Promise((resolve, reject) => {
    fs.appendFile(path, `${prettyContent}\n`, err => {
      if (err) { 
        reject(err);
        return;
      };

      resolve(path);
    });
  });
};
