
let htt = require('http')
let url = require('url')
let fs = require('fs');

htt.createServer(function(req,res ){
    // 解析请求地址 当请求访问的地址为/static/ACTIU， 读取这个目录下的文件
    // 目的做一个文件目录
    let pathname = url.parse(req.url).pathname
    res.writeHead(200,{
        'Content-Type': 'text/html;charset=utf-8'
    })
    if(pathname == '/static/ACTIU') {
        let count = 0;
        let files = fs.readdirSync(__dirname + pathname)
        // 获取当前目录的文件 将文件名或者文件夹名返回到页面上
        // item 为文件名  写到当前服务器的网页上
        for(let item of files) {
            // 判断文件类型
            fs.stat(__dirname + pathname + '/'+ item, function(err, stat){
                count++
                if(!err) {
                    if(stat.isDirectory()) {
                        res.write('<a href="'+pathname + '/'+ item+'">'+item+'</a>')
                    }else {
                        res.write('<div>'+item+'</div>')
                    }
                    // 判断什么时候结束请求
                    if(count>=files.length) {
                        res.end()
                    }
                }
            })
        }
    }else {
        res.end('目录不存在')
    }
}).listen(3000)


function getType(){
    
}


// 同步读取文件
// let files = fs.readdirSync('./static/ACTIU')

// fs.readdir('./static/ACTIU', function(err, data){
//     if(!err) {
//         for(let [ index,item] of data.entries()) {
            
//             fs.stat(__dirname + '/static/ACTIU/' + item, function(error, result){
//                 console.log(result.isDirectory())
//             })

//         }
//     }
// })

