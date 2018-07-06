//左部分行四 导航切换
$(".list-fw").click(function(){
    $(this).addClass('fw-a').parent('li').siblings().children('a').removeClass('fw-a');
});

$(":file").filestyle({text: "上传文档"});

//版本选择
$(function(){
    $(".icon-img").click(function() {
        $(this).parent('li').siblings().children('i').removeClass("icon-i");
        $(this).parent('li').children('i').addClass('icon-i');
    });
});
//支付方式
$(function(){
    $(".pay-mode,.form-hide").hide();
    $(".radio-hide").click(function(){
        var v =  this.value;
        if (v == "option1"){
            $(".form-hide").hide();
            $(".pay-mode").show();
            $(".go-pay").hide();
        }else if(v == "option3"){
            $(".form-hide").show();
            $(".pay-mode").hide();
        }else{
            $(".pay-mode").hide();
            $(".form-hide").hide();
            $(".go-pay").show();
        }
    });
});