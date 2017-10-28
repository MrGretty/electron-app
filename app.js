const Koa = require('koa');
const _ = require('koa-route');

const PORT = 3000;
const app = new Koa();

app.use(_.get('/', ctx => (ctx.body = 'hello world')));

app.use(_.get('/data', ctx => (ctx.body = 'next page')));

app.listen(PORT);
