"use strict";$(document).ready(function(){function t(){window.addEventListener("scroll",function(t){d||(d=!0,setTimeout(e,250))},!1)}function e(){var t=o();t>=c?$(l).addClass("shrink"):$(l).removeClass("shrink"),d=!1}function o(){return window.pageYOffset||r.scrollTop}function i(){var t=$("#success-modal");t.length&&$.magnificPopup.open({items:{src:t},type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,showCloseBtn:!1,mainClass:"my-mfp-slide-bottom"})}function a(){var t=$("#error-modal");t.length&&$.magnificPopup.open({items:{src:t},type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,showCloseBtn:!1,mainClass:"my-mfp-slide-bottom"})}var n=!1,s=$(".main-mobile-menu");setTimeout(function(){$(".mouse").addClass("hide"),setTimeout(function(){$(".mouse").remove()},400)},6e3),$(".mouse").click(function(){return $("html, body").animate({scrollTop:$(".taxi-hero").height()+120},"slow"),!1}),$("#owl-blog").owlCarousel({navigation:!0,slideSpeed:300,paginationSpeed:400,pagination:!1,singleItem:!0,navigationText:["",""]}),$("img, a").on("dragstart",function(t){t.preventDefault()}),$(".taxi-header--burger").click(function(){s.addClass("open"),n=!0}),$(".mobile-menu-close").click(function(){s.removeClass("open"),n=!1}),$("#telephone").mask("+99999999?9999999");var r=document.documentElement,l=document.querySelector("header.taxi-header"),d=!1,c=70;t(),$(window).trigger("scroll"),$(".taxi-clients").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,showCloseBtn:!1,mainClass:"my-mfp-slide-bottom"}),$(".taxi-header--btn, .taxi-hero--btn, .taxi-pricing--btn").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,showCloseBtn:!1,mainClass:"my-mfp-slide-bottom",callbacks:{beforeOpen:function(){n&&s.removeClass("open")}}}),$(".gallery").each(function(){$(this).magnificPopup({delegate:"a",type:"image",closeOnContentClick:!0,mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,2],tCounter:'<span class="mfp-counter">%curr% из %total%</span>'},image:{verticalFit:!0}})}),$(".closeBtn").click(function(){$.magnificPopup.close()}),$(".taxi-about--clients").waypoint(function(){$(".taxi-about--clients").addClass("on")},{offset:"70%"}),$(".taxi-about--drivers").waypoint(function(){$(".taxi-about--android").addClass("on"),$(".taxi-about--drivers").addClass("on")},{offset:"70%"}),$(".bottom-screen-wrap").waypoint(function(){$(".taxi-about--dapp").addClass("on")},{offset:"50%"}),$(".taxi-admin--operators").waypoint(function(){$(".taxi-admin--operators").addClass("on"),setTimeout(function(){$(".taxi-about--dapp").addClass("on")},1e3),$(".taxi-admin--operators-thumbs a").each(function(t){var e=$(this);setInterval(function(){e.addClass("on")},200*t)})},{offset:"50%"}),$(".taxi-admin--managers").waypoint(function(){$(".taxi-admin--managers").addClass("on"),$("svg#svggraph").addClass("grown"),$(".taxi-download").addClass("on")},{offset:"50%"}),$(".taxi-indicators").waypoint(function(){$(".taxi-indicators--label-bg").addClass("on"),$(".taxi-indicators--label-sm").addClass("on"),$(".indicator").each(function(t){var e=$(this);setInterval(function(){e.addClass("on")},200*t)})},{offset:"50%"}),$(".taxi-knowh").waypoint(function(){$(".taxi-knowh--label").addClass("on"),$(".taxi-kn").each(function(t){var e=$(this);setInterval(function(){e.addClass("on")},200*t)})},{offset:"50%"}),$(".taxi-cooperation").waypoint(function(){$(".taxi-cooperation--title").addClass("on"),$(".taxi-cooperation--l").addClass("on"),$(".taxi-cooperation--r").addClass("on")},{offset:"50%"}),$(".taxi-pricing").waypoint(function(){$(".taxi-pricing--title").addClass("on"),$(".taxi-pricing--desc").addClass("on"),$(".taxi-pricing--services a").each(function(t){var e=$(this);setInterval(function(){e.addClass("on")},200*t)})},{offset:"50%"}),$('.main-mobile-menu .nav a[href*="#"]:not([href="#"])').click(function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),n&&s.removeClass("open"),e.length)return $("html, body").animate({scrollTop:e.offset().top-50},1e3),!1}});var f,m=$("nav.main-nav"),p=m.outerHeight()+15,u=m.find("a"),h=u.map(function(){var t=$($(this).attr("href"));return t.length?t:void 0});u.click(function(t){var e=$(this).attr("href"),o="#"===e?0:$(e).offset().top-p+1;u.filter('a[href!="'+e+'"]').removeClass("active"),$("html, body").stop().animate({scrollTop:o},1e3),t.preventDefault()}),$(window).scroll(function(){var t=$(this).scrollTop()+p,e=h.map(function(){return $(this).offset().top<t?this:void 0});e=e[e.length-1];var o=e&&e.length?e[0].id:"";f!==o&&(f=o,u.removeClass("active").filter('a[href="#'+o+'"]').addClass("active"))}),$("#leaveDemoRequest").submit(function(t){var e=$($(this)[0]),o=e.serializeArray();return $.post(e.prop("action"),o).success(function(t){e.find("input").val(""),i()}).fail(function(t){e.find("input").val(""),a()}),!1}),$.ajaxSetup({beforeSend:function(t,e){function o(t){var e=null;if(document.cookie&&""!=document.cookie)for(var o=document.cookie.split(";"),i=0;i<o.length;i++){var a=jQuery.trim(o[i]);if(a.substring(0,t.length+1)==t+"="){e=decodeURIComponent(a.substring(t.length+1));break}}return e}"POST"==e.type&&t.setRequestHeader("X-CSRFToken",o("csrftoken"))}}),$(".match-height").matchHeight()}),$(document).ready(function(){function t(){$(".taxi-hero--map").width($(window).width()),$(".taxi-hero--map").height($(window).height());var t=$(window).width()/e,a=$(window).height()/o,n=t>a?t:a;i>n*e&&(n=i/e),$("#mapvideo").width(n*e),$("#mapvideo").height(n*o),$(".taxi-hero--map").scrollLeft(($("#mapvideo").width()-$(window).width())/2),$(".taxi-hero--map").scrollTop(($("#mapvideo").height()-$(window).height())/2)}var e,o,i=300;e=parseInt($("#mapvideo").attr("width")),o=parseInt($("#mapvideo").attr("height")),$(window).resize(function(){$(window).width()>540?($("#mapvideo").get(0).play(),$(".taxi-hero--map").show(),t()):($(".taxi-hero--map").hide(),$("#mapvideo").get(0).pause())}),$(window).trigger("resize")});