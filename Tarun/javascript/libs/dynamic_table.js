// Using the core $.ajax() method
$.ajax({
 
    // The URL for the request
    url: "data.json",
 
    // Whether this is a POST or GET request
    type: "GET",
 
    // The type of data we expect back
    dataType : "json",
})

  /**
 *Code to run if the request succeeds (is done);
 *The response is passed to the function
 * @version     0.0.1
 * @since       0.0.1
 * @access      public
 * @author      Tarun Nigam  <tnigam44@gmail.com>
 */
  .done(function( json ) {
  	/**
 * This function loop the table header and print it on page. 
 * @version     0.0.1
 * @since       0.0.1
 * @access      public
 * @author      Tarun Nigam  <tnigam44@gmail.com>
 */

var items = [];
var keys =Object.keys(json[0]); //value inside the object(json) is [0] because it only once write the headings in table.
items.push("<tr>");
$.each(keys,function(k,v){
	items.push("<th>"+v+"</th>");
})
items.push("</tr>");
 $("<thead/>",{html:items.join("")}).appendTo("table");
 items =[];
/**
 * This function loop the table contents and print it on page. 
 * @version     0.0.1
 * @since       0.0.1
 * @access      public
 * @author      Tarun Nigam  <tnigam44@gmail.com>
 */
  $.each(json,function(key,value){
    items.push("<tr>");
    $.each(keys,function(k,v){
    	items.push("<td>"+value[v]+"</td>");
    })
    items.push("</tr>");

    	   $("<tbody/>",{html:items.join("")}).appendTo("table");
  })
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