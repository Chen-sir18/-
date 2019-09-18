


//点击发表评论时显示评论输入框
var aBttn = $(".bttn");
aBttn.click(function(){
	$('.fill').css({
		display:'block'
	})
})


//点击提交按钮时提交评论的内容到评价内容模块中
var send = $(".send")
send.click(function(){
	var value = $("[name=content]").val()
	if (value) {
		
		
		if (confirm('是否确定提交')) {
			var html =`<li>
				<div class="lists-ulists-img margin-20-r">
					<img src="img/eg.jpg"/>
					<span>h***o</span>
				</div>
				<div class="lists-ulists-txt ">
					<span class="">好评 |</span>
					<sapn>2016-11-29  16:10:45</sapn>
					<div class="margin-20-tb lists-ulists-txts">
							${value}		
					</div>
				</div>
			</li>`
			
			//append向标签中后面添加标签
//					$(".lists-ulists-txts").append(html)
			//appendTo向标签中父级后面添加标签
//					$(html).appendTo($(".lists-ulists-txts"))
			//向标签中添加元素  添加到前面
//					$(".lists-ulists-txts").prepend(html)
//					//向标签中添加元素  添加到父级前面
			$(html).prependTo($(".lists-ulists"))
			
			$("[name=content]").val('')
		}
		
	}
	
	
	
})

