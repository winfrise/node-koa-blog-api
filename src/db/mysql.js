require('./db')
const usersSql = require('./users-sql')
const articleSql = require('./article-sql')

module.exports = {
  ...usersSql,
  ...articleSql
}
// const { 
//   insertUser, 
//   deleteUserToken, 
//   findUserByToken,
//   findUserByName,
//   findUserCountByName,
//   updateUserTokenById,
//   deleteUserTokenById
// } = require('./user-sql')

// // users table 操作
// exports.insertUser = insertUser
// exports.deleteUserToken = deleteUserToken
// exports.findUserByToken = findUserByToken
// exports.findUserByName = findUserByName
// exports.findUserCountByName = findUserCountByName
// exports.updateUserTokenById = updateUserTokenById
// exports.deleteUserTokenById = deleteUserTokenById

