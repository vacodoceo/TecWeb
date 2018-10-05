const KoaRouter = require('koa-router');
const router = new KoaRouter();

const publications = ctx.orm.publication.findAll();
publications.forEach(p => {
    console.log('hola');
});