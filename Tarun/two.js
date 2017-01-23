
	var data1 =function(){
		return new Promise(function(resolve,reject){
			var daa=$.get('data.json');
			resolve(daa);
		});
	};
	var data2 =function(msg){
		return new Promise(function(resolve,reject){
			var data = $.get('data2.json');
			resolve(data);
		});
	};
	Promise.all([data1(),data2()]).then(function(data){
		console.log(data);
	})