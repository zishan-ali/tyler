import fs from 'fs';

import stripIndent from 'strip-indent';

export default (path, content) => {
  const prettyContent = stripIndent(content);

  return fs.appendFile(path, `${prettyContent}\n`, err => {
    if (err) throw err;
  });
};
