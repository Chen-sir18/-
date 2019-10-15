
//文档加载完成
$(function(){

    //验证表单
    $(".form-validate").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            code: {
                required:true
            },
            password: {
                required: true,
                rangelength: [6,18]
            },
            repassword: {
                equalTo:$("[name=password]")
            }

        
        }

    })

    //获取验证码
    $(".form-code").click(function(){
        let email = $("[name=email").val();
        let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if(email && reg.test(email)){
            //发送请求并且获取验证码
           $.ajax({
               url: api+'getcode',
               type: 'get',
               data: {
                   email: email,
                   status:1
               },
               dataType: 'json',
               success : function(res){
                    console.log(res)
                    //成功提示成功
                    //失败提示失败
                    if(res.status == 200){
                        $.tooltip({
                            type: 'success',
                            content: '验证码发送成功'
            
                        })
                    }else{
                        $.tooltip({
                            type: 'error',
                            content: res.massage
            
                        })
                    }
               }
           })
            //倒计时开始

            
        }else{
            //提示邮箱不正确
            $.tooltip({
                type: 'error',
                content: '请输入正确的邮箱'

            })
        }
    })

    //注册
    $(".btn-register").click(function(){
        
        console.log($(".form-validate").valid());
        if($(".form-validate").valid()){
            //判断点击是否重复
            if($(this).hasClass('disabled')) return false;
            $(this).addClass('disabled'); //添加类名给立即注册按钮

            let email = $("[name=email]").val();
            let code = $("[name=code]").val();
            let psd = $("[name=password]").val();
            psd = $.md5(psd); //加密密码  引用了md5
            console.log(psd)
            //发送请求注册
            $.ajax({
                url: api + 'register',
                type: 'post',
                data:{
                    email,
                    code,
                    psd
                },
                dataType: 'json',
                success: function(res){

                    $(".btn-register").removeClass('disabled'); //在注册成功后移除立即注册按钮类名

                    if(res.status == 200){
                        $.tooltip({
                            type: 'success',
                            content: '注册成功',
                            success: function(){
                                window.location.href = 'login.html'
                            }
                        })
                    }else{
                        $.tooltip({
                            type: 'error',
                            content: res.massage
                        })
                    }
                }
            })
        }
    })

})