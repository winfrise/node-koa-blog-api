const { query } = require('./connect.js')


exports.findSourceList = ({pageNum = 1, pageSize = 20, uid}) => {
  let _sql = ` select * from source where uid=? limit ?,? `
  return query( _sql, [uid, (pageNum-1) * pageSize, pageSize])
}

exports.findSourceCount = ({uid}) => {
  let _sql = `select count(*) as count from source where uid = ?;`
  return query( _sql, uid)
}

exports.insertSource = ({title, filePath, uid, createTime}) => {
  let _sql = "insert into source set title=?, filePath=?, uid=?, createTime=?"
  return query( _sql, [title, filePath, uid, createTime])
}