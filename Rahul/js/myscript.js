
var output= document.getElementById('output');
// console.log(jcontent);
// console.log(jcontent.phoneNumbers[0].type);
// output.innerHTML=jcontent.firstName+' '+jcontent.phoneNumbers[1].type;
var ajaxhttp = new XMLHttpRequest();
var url="https://api.myjson.com/bins/bhbhf";

ajaxhttp.open("GET",url,true);
ajaxhttp.setRequestHeader("content-type","application/json");

ajaxhttp.onreadystatechange = function(){
		if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200)
		{

 			var content = JSON.parse(ajaxhttp.responseText);
 			console.log(content);
 			console.log(ajaxhttp);

		}
 										}
 ajaxhttp.send();
 // console.log(ajaxhttp);