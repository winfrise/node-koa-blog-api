
const moment = require('moment')

const {
    findSourceList,
    findSourceCount,
    findUserByToken
} = require('../db/mysql.js')

const { checkLogin } = require('../middlewares/check.js')


/**
 * 文章列表
 */
exports.getSourceList = async (ctx) => {
    const token  = ctx.request.header['x-token']
    const { pageSize = 20, pageNum=1, typeId = 0 } = ctx.request.body
    let uid

    if (pageNum < 1) {
      pageNum = 1
    } 

    await findUserByToken({token})
      .then(result => {
        if (!result.length) {
          return ctx.body = {
            code: 20023,
            message: '用户信息已过期，请重新登录'
          }
        }
        uid = result[0].id
      })
      .catch(err => {
        return ctx.body = {
          code: 20024,
          message: err.message
        }
      })
    
    let sourceCount, totalPage, sourceList,
        isFirstPage, isLastPage, hasPreviousPage, hasNextPage

    await findSourceCount({uid})
        .then(result => {
            sourceCount = result[0].count || 0
        })
        .catch(err =>  {
            return ctx.body = {
                code: 20001,
                message: err.message
            }
        })

    totalPage = Math.ceil(sourceCount/pageSize) || 1

    if (pageNum > totalPage) {
        pageNum = totalPage
    }

    await findSourceList({pageSize, pageNum, uid})
        .then(result => {
            sourceList = result || []
        })
        .catch(err => {
            console.log(err.message)
            return ctx.body = {
                code: 20003,
                message: err.message
            }
        })
    

    isFirstPage = !!(pageNum === 1)
    isLastPage = !!(pageNum === totalPage)

    if (isFirstPage && isLastPage) {
        hasNextPage = false
        hasPreviousPage  = false
    } else if (isFirstPage) {
        hasNextPage = true
        hasPreviousPage = false
    } else if (isLastPage) {
        hasNextPage = false
        hasPreviousPage = true
    } else {
        hasNextPage = true
        hasPreviousPage = true
    }

    return ctx.body = {
        code: 20000,
        message: 'Success',
        data: {
            list: sourceList,
            pageSize,
            pageNum,
            isFirstPage,
            isLastPage,
            hasNextPage,
            hasPreviousPage,
            totalPage,
            totalRows: sourceCount
        }
    }

}
