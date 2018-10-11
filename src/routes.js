const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const publications = require('./routes/publications');
const users = require('./routes/users');
const session = require('./routes/session');
const comments = require('./routes/comments');
const bids = require('./routes/bids');


const router = new KoaRouter();

router.use(async (ctx, next) => {
  Object.assign(ctx.state, {
    newSessionPath: ctx.router.url('session-new'),
    destroySessionPath: ctx.router.url('session-destroy'),
    publicationsPath: ctx.router.url('publications'),
});
return next();
});
 /**
 * Middleware to provide "current user" (if available) to every other route middleware
 */
router.use(async (ctx, next) => {
  if (ctx.session.currentUserId) {
    ctx.state.currentUser = await ctx.orm.user.findById(ctx.session.currentUserId);
  }
  return next();
});


router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/users', users.routes());
router.use('/session', session.routes());
router.use('/publications', publications.routes());
router.use('/publications/:pid/comments', comments.routes());
router.use('/publications/:pid/bids', bids.routes());


module.exports = router;
