const User_col = require('../models/user')
const Password_col = require('../models/password')

const login = async (ctx) => {
  let req = ctx.request.body
  // console.log(ctx.request.body);
  // 连接数据库，去数据库里查找是否存在该条数据
  // 查找语句

  const user = await User_col.findOne({
    account: req.username
  })

  if ( !user ){
    ctx.status = 200
    ctx.body = {
      code: 0,
      msg: 账号不存在
    }
    return 
  }

  const userId = user.userId

  const pass = await Password_col.findOne({
    userId
  },{
    hash: 1
  })

  


  // 获取用户的userId
}

module.exports = {
  login
}