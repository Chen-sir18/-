//1.启动服务器
//为静态网页创建打开方式   通过ip 以及  端口打开的方式

//2.书写接口
//在网络上传送数据的地址，目的是与前端交互

let express = require('express'); //引入express

let app = express();  //调用 express

let bodyParser = require('body-parser');

//application/json形式接收    jsonParser 与 lencodedParser称为中间件
let jsonParser = bodyParser.json();
//application/x-www-form-urlencoded 形式接收
let lencodedParser = bodyParser.urlencoded({extended:false});

//启用静态拂服务器   
//为某一个文件夹启用静态服务器
//可以直接打开里面的文件
//若静态文件中文件重名则访问第一个服务器文件夹中的文件
app.use(express.static(__dirname+'/upload'));
app.use(express.static(__dirname+'/static'));

let router = require('./router')

//获取消息列表   app.get('路径'，回调函数)
app.get("/news",router.getNews).post("/news",router.getNews)
//post请求时会出现错误   接收不到参数
app.get("/getcode",router.getCode).post("/getcode",router.getCode)



//注册
app.post("/register",lencodedParser,router.register)
//登录
app.post("/login",lencodedParser,router.login)

//验证登录
app.post("/verifylogin",lencodedParser,router.verifyLogin)
//退出登录
app.post("/loginout",lencodedParser,router.loginout)

//本机访问的任何方式都可以用来访问接口或者服务器
app.listen(3000);







