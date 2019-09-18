(function($){
	
	$.fn.jqzoom = function(options){
		
		var _this= this;
		//小图
		var smallImg = $(_this).find('.small-img')
		
		var smallWidth = smallImg.width()
		var smallHeight = smallImg.height()
		//存弹出选择方位的宽高
		var popwidth = 0,popheight = 0
		
		var bigWidth = 0,bigHeight = 0
		
		$(_this).mouseenter(function(){
			//将放大的图片设为要放大的图片
			var smallSrc = smallImg.attr('src')
			
			var bigHtml = `<div style="width:${options.offwidth}px;height:${options.offheight}px" class="zoom-big">
							<img src="${smallSrc}"/>
						</div>`
			
			$(_this).append('<div class="zoom-pop"></div>')
			$(_this).append(bigHtml)
				
			var bigImg = $(_this).find('.zoom-big img')
			
			bigWidth = bigImg.width()
			bigHeight = bigImg.height()
			//小区域块图宽高
			var popx = smallWidth/bigWidth*options.offwidth
			var popy = smallHeight/bigHeight*options.offheight
			popwidth = popx
			popheight = popy
			$(_this).find('.zoom-pop').css({
				width:popx,
				height:popy
			})
			//设置大区域块的宽高
			$(this).find('.zoom-big').css({
				width: options.offwidth,
				height: options.offheight
			})
			

		})
		
		$(_this).mouseleave(function(){
			//移除放大盒子的时候将区域块移除
			$(_this).find('.zoom-pop').remove()
			$(_this).find('.zoom-big').remove()
		})
		//在放大盒子移动的时候区域块跟随移动
		//区域块的位置为   鼠标距离页面的坐标  -  盒子距离页面的坐标
		//鼠标移动时限制小图的移动位置
		$(_this).mousemove(function(e){
			//鼠标距离页面的位置
			var pagex = e.pageX;
			var pagey = e.pageY;
			
			//小图的宽高    盒子当前距离页面的位置
			var offsetx = $(_this).offset().left
			var offsety = $(_this).offset().top
			//区块的位置   计算弹出的left top
			var popx = pagex - offsetx - popwidth/2
			var popy = pagey - offsety - popheight/2
			//提示区域块的运动范围
			popx = popx < 0?0 : popx
			popy = popy < 0?0 : popy
			
			popx = popx > (smallWidth - popwidth)?(smallWidth - popwidth) : popx
			popy = popy > (smallHeight - popheight)?(smallHeight - popheight) : popy
			//小区块的位置
			$('.zoom-pop').css({
				left: popx,
				top: popy
				
			})
			//计算大图的位置
			$(_this).find('.zoom-big img').css({
				left: -popx*bigWidth/smallWidth,
				top: -popy*bigHeight/smallHeight
			})
			
		})
		
	}
	
	
	
})(jQuery)
