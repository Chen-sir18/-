let fs = require('fs')
//通过path板块中的方法来解决路径  ../    ./ resolve()
let path = require('path')
//js文件下的a.js  读取static 下的js下的jQuery2.js

// let pathstr = __dirname+'../static/Actiu/js/jquery-2.1.0js'
// let pathstr = __dirname+'../static/Actiu/js/jquery-2.1.0js'
let pathstr = path.resolve(__dirname,'../static/Actiu/js/jquery-2.1.0.js')
console.log(pathstr)
fs.readFile(pathstr,function(err,data){
    console.log(err)
    console.log(data)
})

//将地址转为对象  ---  根目录   文件路径   文件全称 文件扩展名  文件名
let pathobj = path.parse(pathstr)
console.log(pathobj)
//将对象转为地址
pathstr = path.format(pathobj)
 console.log(pathstr)