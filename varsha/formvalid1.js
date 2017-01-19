
		
function myFunction()
	{
		var firstname = document.getElementById("fn");
        var lastname = document.getElementById("ln");
		var email = document.getElementById("em");
		var number = document.getElementById("num");
		var meet = document.getElementById("ent");
		var age = document.getElementById("age");
		var blood_group = document.getElementById("bg");
		var table = document.getElementById("tabdata");
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML= 'Data';
        row.insertCell(1).innerHTML= firstname.value;
        row.insertCell(2).innerHTML= lastname.value;
		row.insertCell(3).innerHTML= email.value;
		row.insertCell(4).innerHTML= number.value;
        row.insertCell(5).innerHTML= meet.value;
		row.insertCell(6).innerHTML= age.value;
		row.insertCell(7).innerHTML= blood_group.value;
	}