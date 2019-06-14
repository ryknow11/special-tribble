$("document").ready(function(){


	var wrap = $(".wrap");
	var slider = $(".slider");
	var button1 = $("#b1"),
		button2 = $("#b2"),
		button3 = $("#b3");
	var paused = false;
	var rM, Rs;
	var myGallery = new Gallery(slider.find("img"));
	

//Append Buttons	
	wrap.append('<span class="next"></span><span class="prev"></span>');
	var	btnNext = $('span.next'),
		btnPrev = $('span.prev');
	
//Appearance
	
	function btn1_appearance() {
		button1.addClass("active");
		button2.removeClass("active");
		button3.removeClass("active");
	};
		
	function btn2_appearance() {
		button2.addClass("active");
		button2.off("mouseenter");
		button1.removeClass("active");
		button3.removeClass("active");
	};
		
	function btn3_appearance() {
		button3.addClass("active");
		button3.off("mouseenter");
		button1.removeClass("active");
		button2.removeClass("active");
	};

	button1.addClass("active");
		
	button1.click(function(){
		btn1_appearance();
		myGallery.ChangeAnimationType(1);
	});
	
	button2.click(function(){
		btn2_appearance();
		myGallery.ChangeAnimationType(2);
	});
	
	button3.click(function(){
		btn3_appearance();
		myGallery.ChangeAnimationType(3);
	});
	
	function DisableEnableButtons() {
		if (myGallery.IsNextAvailable()) 
		{
			btnNext.disabled = false;
			btnNext.css({opacity:1});
		}
		else		
		{
			btnNext.disabled = true;
			btnNext.css({opacity:0.5});
		}
		
		if (myGallery.IsPreviousAvailable()) 
		{
			btnPrev.disabled = false;
			btnPrev.css({opacity:1});
		}
		else
		{
			btnPrev.disabled = true;
			btnPrev.css({opacity:0.5});
		}
	
	};
	
	
	
//NEXT		
	btnNext.click(function(){
		myGallery.Next();
		DisableEnableButtons();
	});
		


//PREV	
	btnPrev.click(function(){
		myGallery.Previous();
		DisableEnableButtons();
	});

//Timer
	function start(resume) {
		if(!resume)
		{
			rM = Math.floor((Math.random() * 0) + 0);
			rS = Math.floor((Math.random() * 59) + 1);
		}
		$('#minutes').text(rM);
		$('#seconds').text(rS);
		
	int1 = setInterval(function() 
	
	{
		if(rM > 0 && rS > 0) 
		{
			rS--;
			$('#seconds').text(rS);
		}
		
		else if(rM > 0 && rS == 0) 
		{
			rM--;
			rS = 60;
			$('#minutes').text(rM);
			$('#seconds').text(rS);
		}
		
		else if(rM == 0 && rS > 0) 
		{
			rS--;
			$('#seconds').text(rS);
		}
		
		else if(rM == 0 && rS == 0) 
		{
			$('#minutes').text(rM);
			$('#seconds').text(rS);
			
			function timerChange() {
				if(myGallery.IsNextAvailable())
				{
					myGallery.Next();
					DisableEnableButtons();
					
					rM = Math.floor((Math.random() * 0) + 0);
					rS = Math.floor((Math.random() * 59) + 1);
					$('#minutes').text(rM);
					$('#seconds').text(rS);
				}
				
				else
				{
					myGallery.ShowSlide(1, 1);
					DisableEnableButtons();
					
					rM = Math.floor((Math.random() * 0) + 0);
					rS = Math.floor((Math.random() * 59) + 1);
					$('#minutes').text(rM);
					$('#seconds').text(rS);
				}
			}
			
			timerChange();
			
		}
		

    }, 1000);
		
		
	};	
			
		$('#pause').click(function()
		{
			if(paused == false)
			{
				
				clearInterval(int1),
				paused = true;
			}
			
			else
			{
				paused = false;
				start(true);
			}
		});
		
	start();
	

});