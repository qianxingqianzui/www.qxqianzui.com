/**
 * Created by Administrator on 2021/4/3.
 */
$(function(){
    var wh=$(window).height();
    $('#J_nav').load('nav.html',function(){
        var href = window.location.href;
        var data_url=href.substring(href.indexOf('cn/')+3,href.lastIndexOf('.html'));
        $('#J_nav a').each(function(){
            var $this=$(this);
            if($(this).attr('data-url')==data_url){
                $(this).attr('class','cur');
                //瞬间滚动
                $('#J_nav').scrollTop($this.offset().top + $('#J_nav').scrollTop()-20-wh/2);
                //动画滚动
                //$('#J_nav').animate({
                //    scrollTop:$this.offset().top + $('#J_nav').scrollTop() - 200
                //});
            }
        });
    });
    //var href = window.location.href;
    //console.log(href.substring(href.indexOf('soft_bag/')+9,href.lastIndexOf('.html')));
    //$('#J_nav').on('click', 'a', function(e){
    //    e.preventDefault();
    //    var $this=$(this);
    //    console.log($(this).position().top);
    //    console.log($('#J_nav').scrollTop());
    //    $('#J_nav').animate({
    //        scrollTop:$this.offset().top + $('#J_nav').scrollTop() - 200
    //    });
    //});

});
