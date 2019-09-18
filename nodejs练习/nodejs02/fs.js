let fs = require('fs');

//fs.readFile(文件路径，回调函数（错误码，返回的数据）)  读取文件
//返回数据是buffer形式，buffer  在内存中以二进制形式储存
//返回形式为16进制

//读取文件的路径跟执行环境路径有关 ，跟当前文件路劲无关
//__dirname获取当前文件下的绝对路径
console.log(__dirname)
fs.readFile(__dirname+'/a.json',function(err,data){
    console.log(err)
    if (!err) {
        console.log(JSON.parse(data))
    }

})
