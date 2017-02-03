$(function () {
    pageInitModule.setWidth();
    pageInitModule.setSidebar();
    pageInitModule.setCarousel();
})
/*
$(window).resize(function () {
    pageInitModule.setWidth();
})*/
$(window).scroll(function () {
    pageInitModule.setScrollToTop();
});

/*
* init page when page load
*/

var pageInitModule = (function (mod) {

    mod.setCarousel = function () {
        try {
            $('.carousel').hammer().on('swipeleft', function () {
                $(this).carousel('next');
            });
            $('.carousel').hammer().on('swiperight', function () {
                $(this).carousel('prev');
            });
        } catch (e) {
            console.log("you mush import hammer.js and jquery.hammer.js to let the carousel can be touched on mobile");
        }
    };
    /*
      mod.setWidth = function () {
     if ($(window).width() < 768) {
     $(".sidebar").css({ left: -220 });
     $(".all").css({ marginLeft: 0 });
     } else {
     $(".sidebar").animate({ left: 0 });
     $(".all").animate({ marginLeft: 220 });
     }
     };
    */
    mod.setWidth = function () {
	
        if ($(window).width() < 768) {
            $(".sidebar").css({ left: -220 });
            $(".all").css({ marginLeft: 0 });
			

        } else {
            $(".sidebar").animate({ left: -220 });
            $(".all").animate({ marginLeft: 0 });


        }
    };

    mod.setScrollToTop = function () {
        var top = $(window).scrollTop();
        if (top < 60) {
            $('#goTop').hide();
        } else {
            $('#goTop').show();
        }
    };
    mod.setSidebar = function () {
        /*备份
         $('[data-target="sidebar"]').click(function () {
         var asideleft = $(".sidebar").offset().left;
         if (asideleft == 0) {
         $(".sidebar").animate({ left: -220 });
         $(".all").animate({ marginLeft: 0 });
         }
         else {
         $(".sidebar").animate({ left: 0 });
         $(".all").animate({ marginLeft: 220 });
         }
         });
        */
		var aa=document.getElementById('aa'); //限制右侧不能向上滚
	    var handler=function(event){
		    event.preventDefault();
	    }//限制右侧不能向上滚
        $('[data-target="sidebar"]').click(function () {
		
            var asideleft = $(".sidebar").offset().left;
            if (asideleft == 0) {
                $(".sidebar").animate({ left: -220 });
                $(".all").animate({ marginLeft: 0 });
				$('#aa').css({
					height: 100 + '%'
				})
				aa.removeEventListener('touchmove',handler, false);//解除限制右侧不能向上滚
            }
            else {
                $(".sidebar").animate({ left: 0 });
                $(".all").animate({ marginLeft: 220 });
				$('#aa').css({
					height: $(window).height() + 'px'
				})
				aa.addEventListener('touchmove',handler, false);//限制右侧不能向上滚
           
            }
        });
        $(".has-sub>a").click(function () {
            $(this).parent().siblings().find(".sub-menu").slideUp();
            $(this).parent().find(".sub-menu").slideToggle();
        })
        var _strcurrenturl = window.location.href.toLowerCase();
        $(".navbar-nav a[href],.sidebar a[href]").each(function () {
            var href = $(this).attr("href").toLowerCase();
            var isActive = false;
            $(".breadcrumb>li a[href]").each(function (index) {
                if (href == $(this).attr("href").toLowerCase()) {
                    isActive = true;
                    return false;
                }
            })
            if (_strcurrenturl.indexOf(href) > -1 || isActive) {
                $(this).parent().addClass("active");
                if ($(this).parents("ul").attr("class") == "sub-menu") {
                    $(this).parents("ul").slideDown();
                    $(this).parents(".has-sub").addClass("active");
                }
            }
        })
    }
    return mod;
})(window.pageInitModule || {});





