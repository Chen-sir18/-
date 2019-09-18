//导航
$(".navbar-avtiu .navbar-toggle").click(function(){
$(".navbar-collapse-lists").css({
	display: 'block'
})
if($(this).hasClass('on')){
	$(this).removeClass('on')
	$(".content").animate({
	"marginLeft":0
	},300)
}else{
	$(this).addClass('on')
	$(".content").animate({
	"marginLeft":'50%'
	},300)
}

$(".inner").css({
		'display':'block'
	})
})
$(".content .inner").click(function(){
$(".navbar-avtiu .navbar-toggle").removeClass('on')
	$(".content").animate({
	"marginLeft":0
	},300)
$(".inner").css({
		'display':'none'
	})
})
		
//大图部分
window.onscroll = function(){
	scrollTop()	
}

function scrollTop(){
	//获取滚动的距离
	var scrollTop  = document.body.scrollTop || document.documentElement.scrollTop
	if (scrollTop>=20) {
		$(".content").addClass("content-mid")
	}else{
		$(".content").removeClass("content-mid")
	}
}

//按钮切换按钮的图片
$('.carousel').on('slid.bs.carousel', function (event) {
			var index = $(".carousel-control").data('index')
			index++
			if (index>=4) {
				index = 0
			}
			$(".right img").eq(index).removeClass('hide').siblings('img').addClass('hide')
			
			$('.right').data('index',index)
			
			$(".left img").eq(index).removeClass('hide').siblings('img').addClass('hide')
			
			$('.left').data('index',index)
			//停止自动轮播
			$('.carousel').carousel('pause')
		
		})