

let http = require('http')
let url = require('url')
let fs = require('fs')
console.log(__dirname)
let server = http.createServer(function(req,res){
    //解析请求地址
    let obj = url.parse(req.url)
  
    if (obj.pathname == '/index.html') {
        
        //读取index。html页面
        
        fs.readFile(__dirname + obj.pathname,function(err,data){
            console.log(11)
            if (!err) {
                res.writeHead(200,{
                    "Content-Type": "text/html;charset=utf-8"
                })
                //读取文件成功就将内容返回给页面
                res.end(data)
            }

        })
    }

}).listen(3000)