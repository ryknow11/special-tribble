$("document").ready(function(){

	$("input[type=submit]").click(function()
		{
			
			
			nameTest = /[а-я-]+/i.test($("input[name=name]").val());
			if(nameTest==false)
				{
					$('#popup').show("fast").animate({height: "200px"}, 100);
					return false;
						
									
				}
				
			else if($("select :selected").val() == 0) 
				{
					alert("Выберите обращение!");
					return false;	
				}
					
			else
				{
					alert("Приветствуем" + " " + $("select :selected").html() + " " + $("input[name=name]").val());
					return false;
				}
				
				
		});
		
		
		
	$("input[value=male]").click(function()
	{
		$("select").empty();
		$("select").prepend($('<option value=0>Выберите обращение:</option>'));
		$("select").append($('<option>Гражданин</option>'));
		$("select").append($('<option>Сеньор</option>'));
	});
	
	$("input[value=female]").click(function()
	{
		$("select").empty();
		$("select").prepend($('<option value=0>Выберите обращение:</option>'));
		$("select").append($('<option>Гражданка</option>'));
		$("select").append($('<option>Сеньорита</option>'));
	});
	
	$("#popupButton").click(function()
		{
			$('#popup').height("0px");
			$("#popup").hide("fast");
		
		});
	
});
 
 
 
 
 
 
 
 