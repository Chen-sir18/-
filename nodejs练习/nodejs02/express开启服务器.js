//引入插件的办法
let express = require('express')

//执行express方法
let app = express()

//需要在express中使用某个插件的时候就会使用use
//express中的某个模块

//启用静态服务器
app.use(express.static('./static/Actiu'))

//express 好处就是 nodejs的一系列方法保留   新增简单处理操作

//解决
//app.all()  所有的请求类型都会监听到
// app.all('*')  监听所用的地址
//请求拦截  所有请求都会经过它
app.all('*',function(req,res,next){
    //解决跨域
    res.header("Access-Control-Allow-Origin","*")
    //继续往下走
    next()

})
//get监听一个get请求
//get (监听的地址，监听回调函数(req,res))
app.get('/list',function(req,res){
    
    res.json({a:1})
})
app.listen(3000)