const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const config = require('./config/default.js')
const session = require('koa-session-minimal')
const views = require('koa-views')
const MysqlStroe = require('koa-mysql-session')
const staticCache = require('koa-static-cache')

const app = new Koa()

// session存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
}

// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStroe(sessionMysqlConfig)
}))

// 缓存
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))

// 配置服务端的模板引擎中间键
app.use(views(path.join(__dirname,'./views'),{
  extension: 'ejs'
}))

app.use(bodyParser({
  formLimit: '1mb'
}))


app.use(require('./routers/signin').routes())
app.use(require('./routers/signup').routes())
// app.use((ctx) => {
  
// })

app.listen(config.port, () => {
  console.log('3000端口已启动');
})