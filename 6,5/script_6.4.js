$("document").ready(function(){

	var wrap = $(".wrap");
	var slider = $(".slider");
	var imgs = slider.find("img");
	var indexMax = imgs.length;
	var imgIndex = 1;
	var button1 = $("#b1"),
		button2 = $("#b2"),
		button3 = $("#b3");
	
	
//First Animation
	function changeNext_1 () {
		imgs.filter(':nth-child(' + imgIndex + ')').animate({left:"+=640"}, 0).fadeIn(0);
		imgs.animate({left:"-=640"}, 500);
		imgs.not(':nth-child(' + imgIndex + ')').fadeOut(0).animate({left:"+=640"}, 0)
	};	
	
	function changePrev_1 () {
		imgs.filter(':nth-child(' + imgIndex + ')').animate({left:"-=640"}, 0).fadeIn(0);
		imgs.animate({left:"+=640"}, 500);
		imgs.not(':nth-child(' + imgIndex + ')').fadeOut(0).animate({left:"-=640"}, 0)
	};	

//Second Animation	
	function changeNext_2 () {
		imgs.not(':nth-child(' + imgIndex + ')').fadeOut(500);
		imgs.filter(':nth-child(' + imgIndex + ')').fadeIn(500);
	};	
	
	function changePrev_2 () {
		changeNext_2();
	}

//Third Animation	

	function change_3(dx1, dx2) {
		imgs.css('z-index', 1);
		if(imgIndex > 1) {
			imgs.filter(':nth-child(' + (imgIndex - 1) +')').css('z-index', 2);
		}
		if(imgIndex < indexMax) {
			imgs.filter(':nth-child(' + (imgIndex + 1) +')').css('z-index', 2);
		}
		imgs.filter(':nth-child(' + imgIndex + ')').animate({left:"+=" + dx1 + ""}, 0).fadeIn(0);
		imgs.filter(':nth-child(' + imgIndex + ')').css('z-index', 3);		
		imgs.filter(':nth-child(' + imgIndex + ')').animate({left:"+=" + dx2 + ""}, 500);
		
		
	};

	function changeNext_3 () {
		change_3(640, -640);
	};	
	
	function changePrev_3 () {
		change_3(-640, 640);
	};	
	
//Append Buttons	
	wrap.append('<span class="next"></span><span class="prev"></span>');
	var	btnNext = $('span.next'),
		btnPrev = $('span.prev');

	
	changeNext = changeNext_1;
	changePrev = changePrev_1;
	
	button1.click(function() {changeNext = changeNext_1, changePrev = changePrev_1 });
	button2.click(function() {changeNext = changeNext_2, changePrev = changePrev_2 });
	button3.click(function() {changeNext = changeNext_3, changePrev = changePrev_3 });
	
	

		
/*	button1.hover(
       function(){ $(this).addClass('hover') },
       function(){ $(this).removeClass('hover')}
	   
	);
	
	button2.hover(
       function(){ $(this).addClass('hover') },
       function(){ $(this).removeClass('hover')}
	);
	
	button3.hover(
       function(){ $(this).addClass('hover') },
       function(){ $(this).removeClass('hover')}
	);*/
	
	
	button1.addClass("active");
		
	button1.click(function(){
		$(this).addClass("active");
		button2.removeClass("active");
		button3.removeClass("active");
	});
	
	button2.click(function(){
		$(this).addClass("active");
		$(this).off("mouseenter");
		button1.removeClass("active");
		button3.removeClass("active");
	});
	
	button3.click(function(){
		$(this).addClass("active");
		$(this).off("mouseenter");
		button1.removeClass("active");
		button2.removeClass("active");
	});
	
	
	
//NEXT		
	btnNext.click(function() {

		if(imgIndex < indexMax) {
			imgIndex++;
			changeNext();
			btnNext.disabled = false;

		}
		
		if(imgIndex == indexMax) {
			
			btnNext.disabled = true;
			btnNext.css({opacity:0.5});
		}
		
		if(imgIndex > 1) {
			btnPrev.css({opacity:1});
		}
	});


//PREV	
	btnPrev.click(function() {
		if(imgIndex > 1) {
			imgIndex--;
			changePrev();
			btnPrev.disabled = false;
			
		}
		
		if(imgIndex == 1) {
			btnPrev.disabled = true;
			btnPrev.css({opacity:0.5});
		}
		
		if(imgIndex < indexMax) {
			btnNext.css({opacity:1});
		}	
		
	});	
});
















