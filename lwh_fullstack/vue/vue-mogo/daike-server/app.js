const Koa = require('koa')
const mongoose = require('mongoose');
const app = new Koa()
const user_router = require('./routes/api/user_router')
const config = require('./config')
var bodyParser = require('koa-bodyparser');

var cors = require('koa2-cors')


// 建立mongodb的连接

mongoose.connect(config.db, {
  useNewUrlParser: true
},
(err) => {
  if(err) {
    console.log('failed');
  }else{
    console.log('connecting dagebae successfully');
  }
}
)

// app.use((ctx) => {
//   ctx.body = 'hello'
// })
app.use(cors())
app.use(bodyParser())
app.use(user_router.routes())


app.listen(3000)