$(document).ready(function() {

//选项卡切换		
var $ap=$(".tab_opt span");
$ap.click(function(){
$(this).addClass("curr").siblings().removeClass("curr");
var index=$ap.index(this);
$(".tab_cont .tab_ctn").eq(index).show().siblings(".tab_ctn").hide();
});


//首页案例选项卡切换		
var $bp=$(".wmdj_tab p");//设定选项
$bp.click(function(){
$(this).addClass("wtab1").siblings().removeClass("wtab1");
var index=$bp.index(this);
$(".case_m .case_m1").eq(index).show().siblings(".case_m1").hide();//绑定选项内容
});


//首页案例右侧图片选项卡切换
var $cp=$(".wmdj_exam li");//设定选项
$cp.click(function(){
$(this).addClass("curr1").siblings().removeClass("curr1");
var index=$cp.index(this);
$(".wmdj_R .wmdj_R1").eq(index).show().siblings(".wmdj_R1").hide();//绑定选项内容
});	


//旅居卡 选项卡切换		
var $ap=$(".tab_opt li");
$ap.click(function(){
$(this).addClass("curr").siblings().removeClass("curr");
var index=$ap.index(this);
$(".tab_cont .tab_ctn").eq(index).show().siblings(".tab_ctn").hide();
});


});