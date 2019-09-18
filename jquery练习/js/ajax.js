//ajax//XMLHttpRequest网络数据请求
//1.定义网络请求实例
var requst =new XMLHttpRequest();
//2.打开请求
//requst.open("请求的类型",请求的路径地址，是否异步)
//请求类型  时后台人员规定的
//请求的路径地址  时后台人员给的
//异步：浏览器执行js代码从上到下执行，当遇到ajax请求时，会开出新的线路，但不会影响会面的代码执行的时间
requst.open("get",'http://192.168.97.231:3000/lists',true)
//3.发送请求到后台
//后台会规定是否需要数据
//requst.send(后台需要的数据);
requst.send(null);
//请求发送的状态  4个
//0   初始化XMLHttpRequest
//1   打开
//23  请求发送成功   后台接收成功

//请求完成  后台返回前端数据成功了
//请求监听状态码
requst.onreadystatechange = function(){
	//就是执行过程中状态码
	console.log(requst.readyState);
	if(requst.readyState == 4){		
		//请求成功后的数据requst.responseText
		console.log(requst.responseText)
	}
}
