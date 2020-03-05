const { query } = require('./connect.js')

/**
 * 注册用户
 */
exports.insertUser = ({
  username, 
  password, 
  avator = 'NULL', 
  registerTime,
  status = 1
}) => {
  let _sql = "insert into users set ?"
  return query( _sql, {
    username, 
    password, 
    avator, 
    registerTime,
    status
  })
}

// 删除用户
exports.deleteUserById = ( {id} ) => {
  let _sql = `delete from users where id=?;`
  return query( _sql, [id] )
}

/**
 * 通过用户名字查找用户数量
 * 用于注册用户时判断用户是否已经存在
 */
exports.findUserCountByName =  ( username ) => {
  let _sql = `select count(*) as count from users where username="${username}";`
  return query( _sql)
}

/**
 * 通过Token查找用户
 */
exports.findUserByToken =  ({token}) => {
  let _sql = `select * from users where token=?;`
  return query( _sql, [token])
}

/**
 * 通过名字查找用户
 */
exports.findUserByName =  ( username ) => {
  let _sql = `select * from users where username="${username}";`
  return query( _sql)
}

/**
 * 通过 id 更新用户 token
 */
exports.updateUserTokenById = ({id, token, lastLoginTime}) => {
  let _sql = `update users set token=?, lastLoginTime=? where id=?`
  return query(_sql, [token, lastLoginTime, id])
}

/**
 * 用户登出删除Token
 */
exports.deleteUserTokenById = ({id}) => {
  console.log(id)
  // let _sql = `update users set token='112' where token=?`
  let _sql = `update users set token=NULL where id=?`
  return query(_sql, [id])
}

exports.updateUserInfo = ({id, userInfo = {}}) => {
  let _sql = `update users set`
  let keys = Object.keys(userInfo)
  keys.forEach((key, index) => {
    if (key !== 'id') {
      _sql += ` ${key}="${userInfo[key]}"`
      if (index !== keys.length - 1) {
        _sql += ','
      }
    }
  })

  _sql += `where id = ${id}`
  return query(_sql)
}