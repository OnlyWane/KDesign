//main.js

require.config({
	baseUrl:'../../vendor',
	paths: {	
		"jquery": "jquery/jquery-2.1.4.min",
	　	"bootstrap": "bootstrap-3.3.7/js/bootstrap.min",
		"highlight":"highlight/highlight.pack",
		"clipboard":"clipboard/clipboard"
	},
	shim : {  
        bootstrap : {  
            deps : [ 'jquery' ],  
            exports : 'bootstrap'  
        }
        // clipboard : {
        // 	deps : [ 'jquery' ],  
        //     exports : 'clipboard'
        // } 
    }
});
require(["jquery","bootstrap","highlight","clipboard"],function($){


	       $(document).ready(function() {
			  $('pre code').each(function(i, block) {
			    hljs.highlightBlock(block);
			  });
			});

		$('body').scrollspy({target: '.navbar-section'});
		$('[data-spy="affix"]').each(function () {
			var $spy = $(this)
			, data = $spy.data()
			data.offset = data.offset || {}
			data.offsetBottom && (data.offset.bottom = data.offsetBottom)
			data.offsetTop && (data.offset.top = data.offsetTop)
			$spy.affix(data)
		 })
		
		$(".phone-control").click(function(){
			$('.pc-control').removeClass('active');  
			$(this).addClass('active');
			$('.pc').hide();
			$('.phone').show();					
		 });
		$(".pc-control").click(function(){
			$('.phone-control').removeClass('active');  
			$(this).addClass('active');
			$('.phone').hide();
			$('.pc').show();			
		 });

		$("#daima-show3").click(function(){
			if($("#daima-show-3").css("display")=="none"){
				$("#daima-show-3").slideDown(400);
			}else{
				$("#daima-show-3").slideUp(400);
			}						
		 });

  // 		console.log("--------------------");
  // 		$('.navbar-section li a').click(function(event) { 			
		// 	var offset = 200;			
		//     event.preventDefault();		   
		//                                 // 添加当前元素的样式
		// 	$($(this).attr('href'))[0].scrollIntoView();
		// 	$('.navbar-section li').removeClass('active');  // 删除其他兄弟元素的样式
  //       	$(this).addClass('active');			
		//     scrollBy(0, -offset);	   
		//     //window.location.hash = $(this).attr('href');
		// });

})

define(['clipboard'],function(clipboard){
	console.log("---------copy?-----------");
	window['Clipboard']=clipboard;
	var clipboard = new Clipboard('.btn-copy');
	clipboard.on('success', function(e) {
		console.log(e);
		// alert("复制成功！");
		//layer.msg("复制成功");
		//e.clearSelection();
	});
	

})