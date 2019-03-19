const Koa = require('koa');
const cors = require('koa-cors');
const koaApp = new Koa();
koaApp.use(cors());
koaApp.use(async ctx => {
  ctx.body = 'Hello World';
});
koaApp.listen(3016);
