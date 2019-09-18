(function($,w){
	
	
	//第一种
//	$.extend({
//		//options  对象
//		//content  提示信息
//		//type  表示提示的信息  error  , warn ,success
//		//interval  表示传入的时间
//		tooltip: function(options){
//			var className =''
//			if(options.type == 'error'){
//				className = 'alter-error'		
//			}else if(options.type == 'warn'){
//				className = 'alter-warning'
//			}else{
//				className = 'alter-info'	
//			}
//		
//			
//			$('body').append(`<div class="alter ${className}">${options.content}</div>`)
//			
//			setTimeout(function(){
//				$(".alter").remove()
//			},options.interval || 3000)
//			
//				
//		}
//			
//
//		
//	})
	
	
	//第二种
	//$ 即看成对象  也看成方法
	//options  对象
	// type   提示的类型   info   error   warn 
	//content  提示的内容
	//interval  提示的时间
	$.tooltip = function(options){
		//3.判断定时器是否存在  存在就清除定时器
		if (w.timer) {
			clearTimeout(w.timer)
		}
		$('.alter').remove()
		
		//1.往页面添加提示语
		//如果看不出从前还是从后移除的效果   就加一个${new Date().getTime()}
		var html = $(`<div class="alter alter-${options.type}">${options.content}</div>`)
		$("body").append(html)
		
		//2.添加延时器  隔interval时间将提示语清除
		w.timer = setTimeout(function(){
			html.remove()
			if (options.success) {
				
				options.success()
			}
		},options.interval || 3000)
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})(jQuery,window)
