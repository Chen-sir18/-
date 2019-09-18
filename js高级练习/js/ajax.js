function resolveAjax(options){
	//通过函数返回一个Promise对象   来解决ajax的以异步
	return new Promise(function(resolve,reject){
		
		//处理异步执行体  将返回值给 resolve,reject
		
		//创建ajax请求
		
		//1.创建请求
		
		let request = new XMLHttpRequest();
		
		//2.打开请求
		//请求类型    请求地址  同步还是异步
		
		request.open(options.type,options.url,options.async)
		
		//3.发送请求
		request.send(null)
		request.onreadystatechange = function(){
			
			//监听状态
			if (request.readyState==4 && request.status == 200) {
				//request.responseText   请求返回的内容
				resolve(request.responseText)
			}else if(request.readyState==4 && request.status != 200){
				reject(request.responseText)
			}
			
		}
	
	})
	
}

