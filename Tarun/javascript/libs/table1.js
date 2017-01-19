// Using the core $.ajax() method
$.ajax({
 
    // The URL for the request
    url: "data.json",
 
    // Whether this is a POST or GET request
    type: "GET",
 
    // The type of data we expect back
    dataType : "json",
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  .done(function( json ) {
var items = [];
  $.each(json,function(key,value){
    items.push("<tr>");
    items.push("<td id=''"+key+"'>"+value._id+"</td>");
    items.push("<td id=''"+key+"'>"+value.index+"</td>");
    items.push("<td id=''"+key+"'>"+value.guid+"</td>");
    items.push("<td id=''"+key+"'>"+value.isActive+"</td>");
    items.push("<td id=''"+key+"'>"+value.balance+"</td>");
    items.push("<td id=''"+key+"'>"+value.picture+"</td>");
    items.push("<td id=''"+key+"'>"+value.age+"</td>");
    items.push("<td id=''"+key+"'>"+value.eyeColor+"</td>");
    items.push("<td id=''"+key+"'>"+value.name+"</td>");
    items.push("<td id=''"+key+"'>"+value.gender+"</td>");
    items.push("<td id=''"+key+"'>"+value.company+"</td>");
    items.push("<td id=''"+key+"'>"+value.email+"</td>");
    items.push("<td id=''"+key+"'>"+value.phone+"</td>");
    items.push("<td id=''"+key+"'>"+value.address+"</td>");
    items.push("<td id=''"+key+"'>"+value.registered+"</td>");
    items.push("<td id=''"+key+"'>"+value.latitude+"</td>");
    items.push("<td id=''"+key+"'>"+value.longitude+"</td>");
    items.push("<td id=''"+key+"'>"+value.tags+"</td>");
    items.push("<td id=''"+key+"'>"+value.friends+"</td>");
    items.push("<td id=''"+key+"'>"+value.greeting+"</td>");
    items.push("<td id=''"+key+"'>"+value.favoriteFruit+"</td>");
    items.push("</tr>");
  });
   $("<tbody/>",{html:items.join("")}).appendTo("table");
  })
  // Code to run if the request fails; the raw request and
  // status codes are passed to the function
  .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
  })
  // Code to run regardless of success or failure;
  .always(function( xhr, status ) {
    alert( "The request is complete!" );
  });