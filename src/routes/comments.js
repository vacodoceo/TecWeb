const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.param('id', async (id, ctx, next) => {
    const comment = await ctx.orm.comment.findById(ctx.params.id);
    ctx.assert(comment, 404);
    ctx.state.comment = comment;
    return next();
});  

router.get('comments-new', '/new', async (ctx) => {    
    const categories = await ctx.orm.category.findAll();
    const users = await ctx.orm.user.findAll();

    return ctx.render('comments/new', {
        comment: ctx.orm.comment.build(), 
        categories,
        users,
        submitPath: ctx.router.url('comments-create'),
    });
});

router.post('comments-create', '/', async (ctx) => {
    await ctx.orm.comment.create(ctx.request.body);
    ctx.redirect(ctx.router.url('comments'));
});

router.get('comments-edit', '/:id/edit', async (ctx) => {
    const { comment } = ctx.state;
    const categories = await ctx.orm.category.findAll();

    return ctx.render(
      'comments/edit',
      {
        comment,
        categories,
        submitPath: ctx.router.url('comments-update', comment.id),
      },
    );
  });

router.patch('comments-update', '/:id', async (ctx) => {
    ctx.body = await ctx.state.comment.update(
        ctx.request.body,
        { fields: ['title', 'description', 'logo', 'value', 'categoryId', 'exchange_type'] },
    );
});

router.delete('comments-destroy', '/:id', async (ctx) => {
    await ctx.state.comment.destroy();
    ctx.redirect(ctx.router.url('comments'));
});


module.exports = router;