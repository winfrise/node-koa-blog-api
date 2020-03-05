const router = require('koa-router')()

module.exports = (app) => {
  // router.get('/', require('./posts').index)

  app
    .use(router.routes())
    .use(router.allowedMethods())

  // 404
  app.use(async (ctx, next) => {
    await ctx.render('404', {
      title: 'page not find'
    })
  })
}