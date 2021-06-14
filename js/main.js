$(function(){
	$('.mob-menu').click(()=>{
		$('#mb-nav').attr('id', 'mb-nav-show');
		$('.mb-nav-show-h3').attr('id', 'mb-nav-show-h3');
		$('.mb-nav-show-close').attr('id', 'mb-nav-show-close');
	});
	$('.mb-nav-show-close').click(()=>{
		$('.mb-nav').attr('id', 'mb-nav');
		$('.mb-nav-show-h3').removeAttr('id');
		$('.mb-nav-show-close').removeAttr('id');
	})
})
