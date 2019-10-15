
//文档加载完成
$(function(){

    //获取一个token  使用localStorage里的方法getItem
    let token = window.localStorage.getItem('token');
    
    //判断没有token时跳转到登录页面
    if(token){
        let userinfo = window.localStorage.getItem('info')
         userinfo= JSON.parse(userinfo)
        $(".go-login").addClass('hide')
        $(".user").removeClass('hide')
        $(".username").html(userinfo.email)

        // window.location.href = 'login.html'
        // return false;
    }
    //验证登录
    $.ajax({ //请求router文件夹下的接口
        url: api + 'verifyLogin',
        type: 'post',
        data:{
            token
        },
        dataType: 'json',
        success: function(res){
            //判断没有成功时  去掉token
            if(res.status == 512){
                window.localStorage.removeItem('token');  //去掉token 使用localStorage里的removeItem
                window.localStorage.removeItem('info');
                window.location.href = 'login.html'
            }else if(res.status !=200){
                $.tooltip({
                    type: 'error',
                    content: res.message
                })
            }
        }
    })
    //退出登录
    $(".loginout").click(function(){

        let info = window.localStorage.getItem('info')  //得到传的info数据   是字符串
            info = JSON.parse(info)   //将上面得到的info转为对象
        $.ajax({   //发送请求
            url: api + 'loginout',
            type: 'post',
            data: {
                email: info.email
            },
            dataType: 'json',
            success: function(res){
                if(res.status == 200 ){
                    window.localStorage.removeItem('token');
                    window.localStorage.removeItem('info');
                    window.location.href = 'login.html';
                }else{
                    $.tooltip({
                        type: 'err',
                        content: res.message
                    })
                }
            }

        })

    })

})