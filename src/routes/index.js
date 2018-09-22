const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

router.get('/', async (ctx) => {
  await ctx.render('index', { 
    appVersion: pkg.version,
    PublicationsPath: ctx.router.url('publications'),
    UsersPath: ctx.router.url('users') 
  });
});

module.exports = router;
