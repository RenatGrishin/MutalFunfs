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
	});

	$('.ft-spoiler').click(handler);
})

function handler(e) {
	let target = $(e.target);
	console.log(target)

	function offOn(element) {
		if(element.text() == '+'){
			element.text('-')
		}else{
			element.text('+')
		}
	}

	if ( target.is("article.ft-spoiler")) {
		target.children('ul').toggleClass('show-block');
		offOn(target.children('span'));
	}
	if ( target.is("h4") ){
		target.siblings('ul').toggleClass('show-block');
		offOn(target.siblings('span'));
	}
	if ( target.is("span.spoiler-arrow") ){
		target.siblings('ul').toggleClass('show-block');
		offOn(target);
	}
}

function dtAnim(entry) {
	console.log(entry);
	entry.forEach((change) => {
		if(change.isIntersecting){
			change.target.classList.add('dt-anim-show');
		}
	});
}

let observer = new IntersectionObserver(dtAnim, {threshold: [0.5]});
let elements = $('.dt-anim');
for(let key of elements) observer.observe(key);