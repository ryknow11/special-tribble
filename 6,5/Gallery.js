function Gallery(images) {

	this.images = images;
	this.imgCurrentIndex = 1;
	this.indexMax = images.length;
	this.animationType = 1;
	this.forTimer = true;
	
	
	this.IsNextAvailable = function() {
		return (this.imgCurrentIndex < this.indexMax);
	}

	this.IsPreviousAvailable = function() {
		return (this.imgCurrentIndex > 1);
	}
	
	this.Next = function() {
		if(this.IsNextAvailable()) {
			this.ShowSlide((this.imgCurrentIndex + 1), 1);
		}
	}
	
	
	this.Previous = function() {
		if(this.IsPreviousAvailable()) {
			this.ShowSlide((this.imgCurrentIndex - 1), 2);
		}	
	}
	
	this.ShowSlide = function(index, x) {
	//пкз
		this.images.stop(false, true);
		if (this.animationType == 1)
			this.ShowSlideAnimation1(index, x);
		else if (this.animationType == 2)
			this.ShowSlideAnimation2(index);
		else if (this.animationType == 3)
		this.ShowSlideAnimation3(index, x);
		this.imgCurrentIndex = index;
	}
	
	
	
	
	this.ShowSlideAnimation1 = function(index, x) {
		if (x==1) {
			this.images.filter(':nth-child(' + index + ')').animate({left:"+=640"}, 0).fadeIn(0);
			this.images.animate({left:"-=640"}, 500);
			this.images.not(':nth-child(' + index + ')').fadeOut(0).animate({left:"+=640"}, 0);
		}
		else if (x==2) {
			this.images.filter(':nth-child(' + index + ')').animate({left:"-=640"}, 0).fadeIn(0);
			this.images.animate({left:"+=640"}, 500);
			this.images.not(':nth-child(' + index + ')').fadeOut(0).animate({left:"-=640"}, 0);
		}
		
	}
	
	
	this.ShowSlideAnimation2 = function(index) {
			this.images.not(':nth-child(' + index + ')').fadeOut(500);
			this.images.filter(':nth-child(' + index + ')').fadeIn(500);
	}
	
	this.ShowSlideAnimation3 = function(index, x) {
		if(x==1) {
			this.images.css('z-index', 1);
			this.images.filter(':nth-child(' + (index - 1) + ')').css('z-index', 2);
			this.images.filter(':nth-child(' + index + ')').css('z-index', 3);
			this.images.filter(':nth-child(' + index + ')').animate({left:"+=640"}, 0).fadeIn(0);	
			this.images.filter(':nth-child(' + index + ')').animate({left:"-=640"}, 500);	
		}
			
		if(x==2) {
			this.images.css('z-index', 1);
			this.images.filter(':nth-child(' + (index + 1) + ')').css('z-index', 2);
			this.images.filter(':nth-child(' + index + ')').css('z-index', 3);
			this.images.filter(':nth-child(' + index + ')').animate({left:"-=640"}, 0).fadeIn(0);	
			this.images.filter(':nth-child(' + index + ')').animate({left:"+=640"}, 500);	
		}
		
		
	}
	
	this.ChangeAnimationType = function(animationType) {
		this.animationType = animationType;
	}
	
	

}











