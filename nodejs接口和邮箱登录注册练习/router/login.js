
//登录接口

let jwt = require('jsonwebtoken')
let common = require('../controller/common')
let data = require('../controller/data')


//模块导出  { 括号里为 server.js页的 app.get的回调}
module.exports = {
    //登录
    async login (req,res) {
        let password = req.body.password,
            email = req.body.email
        
        //判断没有邮箱时
        if(!email || !common.isEmail(email)){
            res.json({
                status: 501,
                message: '邮箱格式不正确'
            })
            return false;
        }
        //判断密码
        if(!password){
            res.json({
                status: 504,
                message: '请输入密码'
            })
            return false;
        }

        //验证邮箱和密码
        let isUser =await data.login([email,password])
        if(isUser){
            //获取token
            //sign（加密数据，加密密钥，token存放时间）  加密用户名
            let token = jwt.sign({email:email},'jwt',{
                expiresIn: 60*15
            })

            res.json({
                status: 200,
                data:{
                    token,
                    info:{
                        email: isUser.email,
                        userid: isUser.id,
                        status: isUser.status
                    }
                },
                message: 'ok'
            })

        }else{
            res.json({
                status: 511,
                message: '用户名或密码不正确'
            })
            return false;
        }

    },
    //验证登录
    verifyLogin (req,res) {

        let token = req.body.token;   //获取页面传的token

        //验证token
        jwt.verify(token,'jwt',function(err,decoded){

            if(err){
                res.json({
                    status: 512,
                    message: '登录失效'
                })
            }else{
                res.json({
                    status: 200,
                    message: 'ok'
                })
            }

        })

    },
    //退出登录
    async loginout (req,res){
        //取数据判断邮箱是否存在
        //返回状态
        //token
        let email = req.body.email;
        let isregister =await data.isRegister(email);

        if(!isregister){
            res.json({
                status: 200,
                message: 'ok'
            })
        }else{
            res.json({
                status: 513,
                message: '用户未登录'
            })
        }

    }

}