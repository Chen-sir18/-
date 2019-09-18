

let http = require('http')
let url = require('url')
let fs = require('fs')
let path = require('path')

let server = http.createServer(function(req,res){
    //解析请求地址
    let obj = url.parse(req.url)
    
    //限制favicon.ico访问
    if (obj.pathname != '/favicon.ico') {
        let filePath = __dirname + '/static/Actiu' + obj.pathname
        let extname = path.extname(filePath)

        fs.readFile(filePath,function(err,data){
            //回调函数  磁盘I/O
            if (!err) {
                //获取图片的类型  后缀名 回调函数
               let type = getType(extname,function(extType){
                    res.writeHead(200,{
                        "Content-Type": extType
                    })
                    //读取文件成功就将内容返回给页面
                    //读取文件的内容   返回到页面上
                    //end表示当前请求结束
                    res.end(data)
               })
                
            }
        })

    }
}).listen(3001)

//根据文件后缀名返回浏览器需要的文件类型
//保证返回文件的类型正确
function getType(extname,callback){
    fs.readFile(__dirname + '/mime.json',function(err,typeData){
       //异步回调
        let mimeJson = JSON.parse(typeData)
        let extType = mimeJson[extname] || 'text/plain'
        callback(extType)
        
    })

    // switch(extname){
    //     case '.html':
    //         return 'text/html;charset=utf-8'
    //     case '.jpg':
    //         return 'image/jpg'
    //     case '.css': 
    //         return 'text/css'
    //         default : 
    //             return 'text/plain'
    // }
}