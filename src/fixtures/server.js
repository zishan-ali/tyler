export const server = `
import Koa from 'koa';
import mount from 'koa-mount';

const app = new Koa();

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
    <div id="root"></div>
  </body>
  </html>
  \`;
});

export const server = mount('/hello-world', app);`;
