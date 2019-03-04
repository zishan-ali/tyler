export const server = `import React from 'react';
import Koa from 'koa';
import mount from 'koa-mount';
import { renderToString } from 'react-dom/server';

import { Container } from './containers/Container';

const app = new Koa();
const foo = renderToString(<Container />);

app.use(async ctx => {
  ctx.status = 200;
  ctx.body = \`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello World</title>
  </head>
  <body>
    <div id="root">$\{foo}</div>
  </body>
  </html>
  \`;
});

export default mount('/hello-world', app); \n`;
