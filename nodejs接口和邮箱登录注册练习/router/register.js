//注册接口
let url = require('url');
let common = require('../controller/common');
let sendEmail = require("../controller/emailTransport");
let  query = require('../controller/mysql');
let data = require('../controller/data');

module.exports = {

    //注册
   async register (req,res){
        let params = req.body;
        //判断邮箱是否正确
        if(!params.email || !common.isEmail(params.email)){
            res.json({
                status: 501,
                message: '邮箱格式不正确'
            })
            return false;
        }
        //判断验证码是否存在
        if(!params.code){
            res.json({
                status: 503,
                message: '请输入验证码'
            })
            return false;
        }
        //判断密码是否存在
        if(!params.psd){
            res.json({
                status: 504,
                message: '请输入密码'
            })
            return false;
        }
        //判断用户是否注册
        let isregister = await data.isRegister(params.email);
        if(!isregister){
            res.json({
                status: 505,
                message: '用户已注册'
            })
            return false;
        }
        //判断验证码是否正确
        let isCode = await data.isCode(params.email,params.code);
        if(!isCode){
            res.json({
                status: 506,
                message: '验证码错误'
            })
            return false;
        }
        //将信息添加到数据库中
        let regist = await data.register([params.email,params.psd,1]);
        if(regist){   //成功
            res.json({
                status: 200,
                message: ''
            })
        }else{   //失败
            res.json({
                status: 507,
                message: '服务器错误'
            })
        }
    },

    //获取验证码
    async getCode (req,res){
        console.log(123)
        //获取前端发送过来的邮箱
        //验证邮箱是否正确
      let email= url.parse(req.url,true).query.email;
      let sta = url.parse(req.url,true).query.status;
  
    //   let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ 

      if(common.isEmail(email)){
            //获取验证码  发送到邮箱
                //Math.round四舍五入为最近的整数
            let code = Math.round(Math.random()*8999+1000);
            let html = `<h1 style="color:red;">你的邮箱验证码为：${code}</h1>`
            sendEmail(email,'注册验证码',html,function(error,response){
                if(error){
                    res.json({
                        status: 510,
                        message: '邮箱发送失败'
                    })
                }else{
                        let sql = 'insert into verify(email,code,status) values(?)'
                    query(sql,[[email,code,sta]]).then(function(result){
                        res.json({
                            status: 200,
                            data: code,
                            message: ''
                        })
                    }).catch(function(){
                        res.json({
                            status: 502,
                            message: '失败'
                        })
                    })
                }
            })
        }else{
          res.json({
              status: 501,
              message: '邮箱格式不正确'
          })
      }
    }

}