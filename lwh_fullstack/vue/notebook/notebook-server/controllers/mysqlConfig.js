const mysql = require('mysql')
const config = require('./defaultConfig')

// 连接线程池
let pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

let allServices = {
  query: function(sql, values){
    return new Promise((resolve,reject) => {
      pool.getConnection(function(err,connection) {
        if(err) {
          reject(err)
        }else{
          connection.query(sql,values,(err,rows) => {
            if(err){
              reject(err)
            }else{
              resolve(rows)
            }
            connection.release();
          })
        }
      })
    })
  }
}

// 用户登录
let userLogin = function(username,userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}"`
  return allServices.query(_sql)
}

let findUser = function(username) {
  let _sql = `select * from users where username="${username}"`
  return allServices.query(_sql)
}

let findNoteListByType = function(noteType) {
  let _sql = `select * from note where note_type="${noteType}"`
  return allServices.query(_sql)
}

let findNoteDetailById = function(noteId) {
  let _sql = `select * from note where id="${noteId}"`
  return allServices.query(_sql)
}

let userRegister = function(nickname,username,userpwd) {
  let _findSql = `insert into users set username=?,userpwd=?,nickname=?;`
  return allServices.query(_findSql,[username,userpwd,nickname]);
}



module.exports = {
  userLogin,
  userRegister,
  findUser,
  findNoteListByType,
  findNoteDetailById
}