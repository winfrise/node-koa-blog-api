const { query } = require('./connect.js')

/**
 * 发表文章
 */
exports.insertArticle = ({
  title,
  uid,
  content,
  tags,
  createTime,
  publishTime
}) => {
  let _sql = "insert into article set ?"
  return query( _sql, {
    title,
    uid,
    content,
    tags,
    createTime,
    publishTime
  })
}




/**
 * 通过uid查找文章
 */
exports.findArticleByUid =  ({uid}) => {
  let _sql = `select * from article where uid=?;`
  return query( _sql, [uid])
}

/**
 * 通过文章id查找文章
 */
exports.findArticleById =  ( id ) => {
  let _sql = `select * from article where id=?;`
  return query( _sql, [id])
}

/**
 * 查询所有文章数量
 */
exports.findAllArticleCount = () => {
  let _sql = `select count(*) as count from article;`
  return query( _sql)
}

/**
 * 分页查询文章列表
 */
exports.findArticleList = ({pageNum = 1, pageSize = 10}) => {
  let _sql = ` select * from article limit ?,?;`
  return query( _sql, [(pageNum-1) * pageSize, pageSize])
}

// 查询所有个人用户文章数量
exports.findPostCountByName = (name) => {
  let _sql = `select count(*) as count from article where name="${name}";`
  return query( _sql)
}
// 查询个人分页文章
exports.findArticleByUserPage = (name,page) => {
  let _sql = ` select * from article where name="${name}" order by id desc limit ${(page-1)*10},10 ;`
  return query( _sql)
}

/**
 * 删除文章
 */
exports.deleteArticle = (id) => {
  let _sql = `delete from article where id = ${id}`
  return query(_sql)
}
// 删除评论
exports.deleteComment = (id) => {
  let _sql = `delete from comment where id=${id}`
  return query(_sql)
}
// 删除所有评论
exports.deleteAllPostComment = (id) => {
  let _sql = `delete from comment where postid=${id}`
  return query(_sql)
}

// 滚动无限加载数据
exports.findPageById = (page) => {
  let _sql = `select * from article limit ${(page-1)*5},5;`
  return query(_sql)
}
// 评论分页
exports.findCommentByPage = (page,postId) => {
  let _sql = `select * from comment where postid=${postId} order by id desc limit ${(page-1)*10},10;`
  return query(_sql)
}

/**
 * 查询所有文章
 */
exports.findAllArticle = () => {
  let _sql = `select * from article;`
  return query( _sql)
}

/**
 * 发布/修改 文章
 */
exports.insertArticle = (value) => {
  let _sql = "insert into article set ?"
  return query( _sql, value )
}

// 更新修改文章
exports.updateArticle = ({title, content, tags, id}) => {
  let _sql = `update article set title=?,content=?, tags=? where id=?`
  return query(_sql, [title, content, tags, id])
}

