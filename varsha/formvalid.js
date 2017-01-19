
		
function myFunction()
	{
		var firstname = document.getElementById("fn");
        var lastname = document.getElementById("ln");
		var email = document.getElementById("em");
		var table = document.getElementById("tabdata");
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML= 'Data';
        row.insertCell(1).innerHTML= firstname.value;
        row.insertCell(2).innerHTML= lastname.value;
		row.insertCell(3).innerHTML= email.value;
		
	}