

	 $("#choose").on("change", function() {

	 	var selected = this.value;
		if(selected == "Dean"){
			// console.log(selected);
			
			$(".AProf").hide();
			$(".Prof").hide();
			$(".Dean").show();
	 	 }
	 	 else if(selected == "Prof"){
	 	 	$(".Prof").show();
			$(".AProf").hide();
			$(".Dean").hide();
	 	 }
	 	  else if(selected == "AProf"){
	 	 	$(".AProf").show();
			$(".Prof").hide();
			$(".Dean").hide();
	 	 }
	 	 else{
	 	 	$(".AProf").show();
			$(".Prof").show();
			$(".Dean").show();
	 	 }

	 	
	});	

