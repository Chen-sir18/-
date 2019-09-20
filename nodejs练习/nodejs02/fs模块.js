//文件模块
let fs = require('fs')
//fs模块中读取文件的方法（文件路径，函数（err,data））
// fs.readFile('./a.json',function(err,data){
//     //当没有错误时表示读取文件成功
//     if (!err) {
//         console.log(data.toString())
//     }
// })

//fs.rename(旧地址，新地址，回调函数)
// fs.rename('./a.json','./aa.json',function(err){
//     console.log(err)
// })

//判断文件类型
// let isfile = fs.isFile('./aa.json')
// console.log(isfile)
fs.stat('./aa.json',function(err,data){
    //data.isDirectory()判断是否是一个文件夹
    //data.isFile() 判断是否是一个文件
    let type = data.isDirectory()
    let type2 = data.isFile()
    console.log(type)
    console.log(type2)
})