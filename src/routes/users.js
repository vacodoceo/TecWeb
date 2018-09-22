const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.param('id', async (id, ctx, next) => {
    const user = await ctx.orm.user.findById(ctx.params.id);
    ctx.assert(user, 404);
    ctx.state.user = user;
    return next();
});  

router.get('users', '/', async (ctx) => {
    const users = await await ctx.orm.user.findAll();
    return ctx.render('users/index', {
      users,
      newuserPath: ctx.router.url('users-new'),
      getShowPath: user => ctx.router.url('users-show', user.id),
      getEditPath: user => ctx.router.url('users-edit', user.id),
      getDestroyPath: user => ctx.router.url('users-destroy', user.id),
    });
});

router.get('users-new', '/new', ctx => ctx.render(
    'users/new',
    {
      user: ctx.orm.user.build(), 
      submitPath: ctx.router.url('users-create'),
    },
  ));

router.post('users-create', '/', async (ctx) => {
    await ctx.orm.user.create(ctx.request.body);
    ctx.redirect(ctx.router.url('users'));
});
router.get('users-show', '/:id', async (ctx) => {
    ctx.body = ctx.state.user;
});

router.get('users-edit', '/:id/edit', (ctx) => {
    const { user } = ctx.state;
    return ctx.render(
      'users/edit',
      {
        user,
        submitPath: ctx.router.url('users-update', user.id),
      },
    );
  });
// router.patch('users-update', '/:id', async (ctx) => {
//     ctx.body = await ctx.state.user.update(
//         ctx.request.body,
//         { fields: ['title', 'description', 'logo', 'value', 'categoryId', 'exchange_type'] },
//     );
// });
router.delete('users-destroy', '/:id', async (ctx) => {
    await ctx.state.user.destroy();
    ctx.redirect(ctx.router.url('users'));
});

module.exports = router;