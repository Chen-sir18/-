


//   ;()()立即执行函数      闭合空间
;(function($,w){
	
	//模拟下拉框
	$.fn.selectExamp = function(option){
		
		//合并对象  合并到第一个  
		var options = $.extend({
			title:'.select-title',
			list:'.select-lists'
		},option);
		

		var _this = this
		//获取title
		var selectTitle = $(this).find(options.title)
		//获取下拉列表
		var selectLists = $(this).find(options.list).children()
		
		//1.点击下拉框的title  将下拉框的列表显示出来
		selectTitle.click(function(e){
			//阻止冒泡
			event.stopPropagation()
			$(this).next().toggleClass('show')
			//4.关闭其他兄弟姐妹的list
			$(this).closest(options.parent).siblings(options.parent).find(options.list).removeClass('show')
		
		})
		
		//2.点击下拉框的选项赋值
		selectLists.click(function(){
			
			var aInput = $(this).closest(options.parent).find('input')
			//给input框赋值
			aInput.val($(this).html())
			
			//将lists收回去
			$(options.list).removeClass('show')
		})
		
		//3.点击文档下拉框收回去
		$(document).click(function(){
			$(options.list).removeClass('show')
		})
		
		
		
		
	}
	
	
	//传参到匿名函数中
})($,window)
