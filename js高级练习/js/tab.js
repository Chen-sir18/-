//使用原型封装tab切换
//闭包（）（）
(function(w){
	
	function TabEample(options){
		//获取tab切换的父级盒子
		this.box = document.querySelector(options.box)
		this.init()
		
	}
	
	//减少内存开销
	TabEample.prototype.init = function(){   //构造函数
		
		var _this = this;  //_this为TabEample对象的内容
//		console.log(_this)
		//获取按钮以及列表
		//tab按钮
		this.tabTitle = this.box.querySelectorAll('.tab-title')
		//列表
		this.tabList = this.box.querySelectorAll('.tab-list')
		//给tabTitle添加点击事件
		for(var i = 0;i<this.tabTitle.length;i++){
			this.tabTitle[i].index = i;
			this.tabTitle[i].onclick = function(){
				//给个公共_this.index的tab存一个下标  下标为点击的按钮的下标 this.index 
				_this.index = this.index;
//				console.log(_this.index)
				_this.change()
//				console.log(_this.change)
			}

		}	

	}
	
	TabEample.prototype.change = function(){   //构造函数

		for(var i=0;i<this.tabTitle.length;i++){   //循环
			//首先移除on类名
			this.tabTitle[i].classList.remove('on')	
			this.tabList[i].classList.remove('on')
		}
		//添加on类名
		this.tabTitle[this.index].classList.add('on')
		this.tabList[this.index].classList.add('on')
	}
	w.TabEample = TabEample   //将TabEample方法抛出给window
	
})(window)
