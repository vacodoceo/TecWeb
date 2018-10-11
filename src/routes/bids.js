const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.param('id', async (id, ctx, next) => {
    const bid = await ctx.orm.bid.findById(ctx.params.id);
    ctx.assert(bid, 404);
    ctx.state.bid = bid;
    return next();
});  

router.get('bids', '/', async (ctx) => {
    return ctx.render('bids/index', {
    });
});

router.get('bids-new', '/new', async (ctx) => {    
    publication = await ctx.orm.publication.findById(ctx.params.pid);
    return ctx.render('bids/new', {
        publication,
        bid: ctx.orm.bid.build(), 
        submitPath: ctx.router.url('bids-create', publication.id),
    });
});

router.post('bids-create', '/', async (ctx) => {
    await ctx.orm.bid.create(ctx.request.body);
    ctx.redirect(ctx.router.url('publications'));
});

router.get('bids-edit', '/:id/edit', async (ctx) => {
    const { bid } = ctx.state;
    const categories = await ctx.orm.category.findAll();

    return ctx.render('bids/edit', {
        bid,
        categories,
        submitPath: ctx.router.url('bids-update', bid.id),
      });
  });

router.patch('bids-update', '/:id', async (ctx) => {
    ctx.body = await ctx.state.bid.update(
        ctx.request.body,
        { fields: ['title', 'description', 'logo', 'value', 'categoryId', 'exchange_type'] },
    );
});

router.delete('bids-destroy', '/:id', async (ctx) => {
    await ctx.state.bid.destroy();
    ctx.redirect(ctx.router.url('bids'));
});


module.exports = router;