//只要有数据库的操作就在这儿进行
let query = require('../mysql');

module.exports = {
    //async 变成异步方法  await等待同步
    //判断用户是否注册
    isRegister: async function(email){
     let data = await query('select * from user where email = ?',email);
        console.log(data)
        if(data.length>0){
            return false;  //表示注册过了
        }else {
            return true;  //表示没有注册
        }
    },
    //判断验证码是否正确
    isCode : async function(email,code){
        let sql = 'select * from verify where email = ? order by createTime desc'
        let data = await query(sql,email)
        if(data.length<=0) return false;
        if(data[0].code == code){
            return true;
        }else{
            return false;
        }
    },
    //将信息添加到数据库中
    register: async function(data){
        let  sql = 'insert into user(email,password,status) values(?)'
        let result = await query(sql,[data]).catch(function(res){   //  .catch(function(){})   捕捉数据库操作失败的
            console.log(res)   //操作失败则数据到  res  里面
        })
        if(result){  //操作成功则数据到  result里面
            return true;
        }else{
            return false;
        }  
        
    },
    //验证用户登录信息
    login: async function(data){
        let sql = "select * from user where email=? and password=?";
        let result = await query(sql,data)

        if(result.length>0){
            return result[0];
        }else{
            return false;
        }
    }
}