
//文档加载完成  
$(function(){
    //表单的验证
    $(".form-validate").validate({
        rules:({
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                rangelength:[6,18]
            }
        })
    })
    //判断token
    let token = window.localStorage.getItem("token");
    console.log(token);
    //有token跳转到页面
    if(token) window.location.href=('usercenter.html')

    //点击登录按钮操作
    $(".btn-login").click(function(){

        if($(".form-validate").valid()){

            //禁止重复提交
            if($(this).hasClass('disabled')) return false
            $(this).addClass('disabled')


            let email = $("[name=email]").val();  //获取表单的value值
            let password = $("[name=password]").val();

            password =$.md5(password);  //加密密码
          
            $.ajax({  //请求接口
                url: api + 'login',
                type: "post",
                dataType: 'json',
                data: {
                    email,
                    password
                },
                success: (res)=>{
                    $(this).removeClass('disabled')
                        //判断是否成功
                    if(res.status == 200){
                        //将res 的数据存到localStorage里去  
                        //localStorage只能存储string内容  所以要将下面的info  使用json.stringify来转为字符串 
                        //setItem  为localStorage的方法 ’检索‘
                        window.localStorage.setItem('token',res.data.token);  // 用户信息  人不能识别的值也就是加密后的  token
                        window.localStorage.setItem('info',JSON.stringify(res.data.info));  //用户信息  人能识别的值 info
                        $.tooltip({
                            type: 'success',
                            content: '登录成功，将在2s后跳转到用户中心',
                            interval: 2000,
                            success: function(){
                                window.location.href= 'usercenter.html'
                            }
                            
                        })
                    }else{
                        $.tooltip({
                            type: 'error',
                            content: res.message,
                            interval: 3000
                        })
                    }
                    
                }
            })

        }
    })

})