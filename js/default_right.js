/*右侧菜单*/
$(function(){
    $('.xinwen_right ').click(function(){
        if($('.sidebar1').css('right')=='-220px'){
            $('.sidebar1').animate({'right':'0'});
            $('#bg').show().css({
                height: $(window).height() + 'px'
            })
        }else
        {
            $('.sidebar1').animate({'right':'-220px'});
        }
    })
})

/*小俊班*/
$(function(){
    $('.browsing_right ').click(function(){
        if($('.sidebar1').css('right')=='-220px'){
            $('.sidebar1').animate({'right':'0'});
            $('#bg').show().css({
                height: $(window).height() + 'px'
            })
        }else
        {
            $('.sidebar1').animate({'right':'-220px'});
        }
    })
    $('#bg').click(function(){
        $('#bg').hide();
        $('.sidebar1').animate({'right':'-220px'});
    })
})
/*分享朋友圈*/
$(function(){
    $('.zan_img').click(function(){
        $('#bg').show().css({
            height: $(window).height() + 'px'
        })
        $('body').css('overflow','hidden');
        $('#zan_tip').show();
    })
    $('#bg').click(function(){
        $('#bg').hide();
        $('#zan_tip').hide();
    })
    $('#zan_tip').click(function(){
        $('#bg').hide();
        $('#zan_tip').hide();
    })
})
/*发布信息*/
$(function(){
    $('.browsing_add_info').click(function(){
        $('.browsing_add').show();
    })
})


