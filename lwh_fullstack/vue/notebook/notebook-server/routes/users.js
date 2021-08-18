const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig')

router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

router.post('/findNoteDetailById',async (ctx,next) => {
  let _id = ctx.request.body.noteId

  await userService.findNoteDetailById(_id).then(res => {
    let r = ''
    if(res.length){
      r = 'ok'
      ctx.body = {
        code: '80000',
        data: res[0],
        mess: r
      }
    }else{
      r = 'error'
      ctx.body = {
        code: '80001',
        mess: r
      }
    }
  }) 
})

router.post('/findNoteListByType',async (ctx,next) => {
  let noteType = ctx.request.body.note_type
  // console.log(noteType);

  await userService.findNoteListByType(noteType).then(res => {
    // console.log(res);
    let r = ''
    if(res.length){
      r = 'ok';

      ctx.body = {
        code: '80000',
        data: res,
        mess: '查找成功'
      }
    }else {
      r = 'error'
      ctx.body = {
        code: '80004',
        mess: '查找失败'
      }
    }
  })
})

router.post('/userRegister',async (ctx,next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  let _nickname = ctx.request.body.nickname

  if(!_userpwd || !_username || !_userpwd) {
    ctx.body = {
      code: '80001',
      mess: '用户名和名称不能为空'
    }
    return
  }

  await userService.findUser(_username).then(async (res) => {
    if(res.length){
      let r = `用户名${_username}已被注册`
      ctx.body = {
        code: '80003',
        data: 'error',
        mess: r
      }
      return
    }else{
      await userService.userRegister(_nickname,_username,_userpwd).then(res => {
        if(res.affectedRows != 0){
          r = 'ok',
          ctx.body = {
            code: '8000',
            data: r,
            mess: '注册成功'
          }
        }else {
          r = 'error',
          ctx.body = {
            code: '8004',
            mess: '出错了'
          }
        }
      })
    }
  })

  

})

router.post('/userLogin',async (ctx,next) => {
  // console.log(ctx.request.body);
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  // console.log(_username,_userpwd);
  // 把参数拿到数据库里查询
  await userService.userLogin(_username,_userpwd).then(res => {
    console.log(res);
    let r = ''
    if(res.length) {
      r = 'ok';
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }

      ctx.body = {
        code: '80000',
        data: result,
        mess: '登陆成功'
      }
    }else{
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '账号或密码错误'
      }
    }
  })
})



module.exports = router
