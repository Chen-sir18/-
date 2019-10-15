//接口的回调
//所有接口回调的汇总

let news = require('./news');
let login = require('./login');

let register = require('./register');

//Object.assign() 合并对象的
let option = Object.assign({},news,login,register)
console.log(option);

//module.exports  导出模块
module.exports =　option;