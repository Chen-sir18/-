//require 相当于 import 导入模块
//属于comment.js 的用法  后台语言中用 require
//require(文件路径)
//require 引入的是文件中导出的数据，重点是module.exports的值
//let http = require（'http'）

// let common = require('./comment.js')
let http = require('http')
let url = require('url')

//1.创建服务器
//request  请求信息
//response  响应信息
let server = http.createServer(function(request,response){
    //request.url

    //url.parse 将字符串 地址  转  地址对象
    //当第二个参数为true时  就将查询的字符串  （query）转对象
    let obj = url.parse(request.url,true)
    console.log(obj)
    //更改页面头文件
    //response.writeHead(请求状态码，头文件信息)
    response.writeHead(200,{
        "Content-Type": "text/html;charset=utf-8"
    })
    
    //结束当前请求
    response.end('你好啊!!')

}).listen(3000,'127.0.0.1')