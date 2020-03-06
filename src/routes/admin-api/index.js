const { 
  postLogin 
} = require('../../controller/c-login')


const { 
  getUserInfo,
  updateUserInfo
} = require('../../controller/c-user')

const {
  postCreateArticle,
  getArticleList,
  getArticleDetail
} = require('../../controller/c-article')

const { 
  postSignout 
} = require('../../controller/c-signout')

const { 
  postRegister 
} = require('../../controller/c-register')

const {
  uploadSingleFile,
  uploadSingleFileCallback,
  uploadMultipleFiles
} = require('../../controller/c-upload')

module.exports = (app, router) => {
  router.post('/admin-api/user/login', postLogin)// 登录接口
  router.post('/admin-api/user/logout', postSignout) // 退出登录接口
  router.post('/admin-api/user/register', postRegister) // 注册接口
  router.get('/admin-api/user/info', getUserInfo) // 获取用户信息接口
  router.post('/admin-api/user/update', updateUserInfo) // 更新用户信息接口
  router.post('/admin-api/article/create', postCreateArticle)  // 发表文章接口
  router.get('/admin-api/article/list', getArticleList) // 文章列表接口
  router.get('/admin-api/article/detail', getArticleDetail) // 文章列表接口
  router.post('/admin-api/upload/singleFile', uploadSingleFile, uploadSingleFileCallback) // 上传单个文件
  router.post('/admin-api/upload/multipleFiles', uploadMultipleFiles) // 上传多个文件

  app
    .use(router.routes())
    .use(router.allowedMethods())

  // 404
  // app.use(async (ctx, next) => {
  //   ctx.body = {
  //     code: 404,
  //     message: '404'
  //   }
  // })
}