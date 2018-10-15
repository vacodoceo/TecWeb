const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.param('id', async (id, ctx, next) => {
    const user = await ctx.orm.user.findById(ctx.params.id);
    ctx.assert(user, 404);
    ctx.state.user = user;
    return next();
});  

router.get('users', '/', async (ctx) => {
    const users = await ctx.orm.user.findAll();
    return ctx.render('users/index', {
      users,
      newUserPath: ctx.router.url('users-new'),
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
    const { user } = ctx.state;
    return ctx.render(
      'users/show', 
      {
        user, 
        userPublications: user => ctx.router.url('users-show-bids', user.id),
      },
    );
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
router.patch('users-update', '/:id', async (ctx) => {
    ctx.body = await ctx.state.user.update(
        ctx.request.body,
        { fields: ['name', 'location', 'role'] },
    );
});
router.delete('users-destroy', '/:id', async (ctx) => {
    await ctx.state.user.destroy();
    ctx.redirect(ctx.router.url('users'));
});

router.get('users-show-bids', '/:id/my_bids', async (ctx) => {
    ctx.body = await ctx.orm.bid.findAll({
        where: {
            bidderId: ctx.params.id
        }
    });
});

router.get('users-show-bids', '/:id/received_bids', async (ctx) => {
    ctx.body = await ctx.orm.bid.findAll({
        where: {
            receiverId: ctx.params.id
        }
    });
});


module.exports = router;