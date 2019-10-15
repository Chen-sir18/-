//重置密码

let email = '',code = ''
$(".btn-next").click(function(){
    email = $("[name = email]").val()
    code = $("[name = code]").val()
    
    $(".register-box").eq(0).addClass('hide')
    $(".register-box").eq(1).removeClass('hide')
})

$(".btn-prev").click(function(){
    $(".register-box").eq(1).addClass('hide')
    $(".register-box").eq(0).removeClass('hide')
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
               status:2
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

$(".btn-change").click(function(){
    let password = $("[name=password]").val()
    password = $.md5(password)

    $.ajax({
        url: api + 'find',
        type: 'post',
        data: {
            email: email,
            code: code,
            password,
            status: 2
        },
        dataType: 'json',
        success: function(res){
            if (res.status == 200) {
                $.tooltip({
                    type: 'success',
                    content: '修改成功，请登录',
                    success: function(){
                        window.location.href = 'login.html'
                    }
                })
            }else{
                $.tooltip({
                    type: 'success',
                    content: res.massage
            }
        }

    })

})