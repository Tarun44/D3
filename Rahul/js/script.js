	
	$.getJSON('data.json',function(data){
  		
		var items = [];
		// for accessing the Header of the Json data
	var keys = Object.keys(data[0]);

	
	items.push("<tr>");
		// Fetching each heading in table from JSON Data using the <th> tag
			$.each(keys,function(k,v){
				items.push("<th>"+v+"</th>");
			});
			
			// Fetching the Value of each heading from the JSON Data 
			items.push("</tr>");
		$.each(data,function(key,value){
		
			// console.log(keys);
			// items.push("<td>"+keys+"</td>");
			// items.push("<td id='id_"+Object.keys(key)+"'>"+Object.keys(value)+"</td>");
			// console.log(items.push("<td id='id_"+Object.keys(key)+"'>"+Object.keys(value)+"</td>"));
			items.push("<tr>");

			$.each(keys,function(k,v){
				items.push("<td>"+value[v]+"</td>");
				console.log(value[v]);
			})
			
			// items.push("<td id='id_"+Object.keys(key)+"'>"+Object.keys(value)+"</td>");
			items.push("</tr>");
		});
		
	

		$('<tbody>',{html:items.join('')}).appendTo("table");


});
	