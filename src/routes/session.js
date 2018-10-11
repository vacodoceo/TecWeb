const KoaRouter = require('koa-router');
 const router = new KoaRouter();
 router.get('session-new', '/new', ctx => ctx.render(
  'session/new',
  {
    submitPath: ctx.router.url('session-create'),
  },
));
 router.put('session-create', '/', async (ctx) => {
  const { email, password } = ctx.request.body;
  const user = await ctx.orm.user.findOne({ where: { email, password } });
  if (user) {
    ctx.session.currentUserId = user.id;
    ctx.flashMessage.notice = 'Inicio de sesión exitoso';
    ctx.redirect('/');
  } else {
    await ctx.render('session/new', {
      error: 'e-mail o contraseña incorrectos',
      email,
      submitPath: ctx.router.url('session-create'),
    });
  }
});
 router.delete('session-destroy', '/', async (ctx) => {
  delete ctx.session.currentUserId;
  ctx.flashMessage.notice = 'Término de sesión exitoso';
  ctx.redirect('/');
 });
 module.exports = router;