const router = require('koa-router')()
const adminRoutes = require('./admin-api')
const routes = require('./api')

module.exports = (app) => {
  adminRoutes(app, router)
  routes(app, routes)
}