// ------------------------ANOTHER METHOD TO POPULATE DYNAMIC JSON DATA IN HTML TABLE------------------

// Using the core $.ajax() method
$.ajax({
 
    // The URL for the request
    url: "jsondata.json",
 
 
    // Whether this is a POST or GET request
    type: "GET",
 
    // The type of data we expect back
    dataType : "json",
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  
  .done(function( json ) {

      var items = [];

      var keys = Object.keys(json[0]);
      // console.log(keys);

     items.push("<tr>");
    // Fetching each heading from JSON Data & Putting these heading in table using the <th>
      $.each(keys,function(k,v){
        items.push("<th>"+v+"</th>");
      });

      $.each(json,function(key,value){
       // console.log(value);
      items.push("<tr>");   
      $.each(keys,function(k,v){
        if(typeof(value[v]) =="object"){
          var ary = [];
          $.each(value[v],function(k1,v1){
              console.log(v1);
            if(typeof(v1) =="object"){
 ary.push(v1.name);
            }else{
              console.log(v1);
            ary.push(v1);
          }
          })

 items.push("<td>"+ary.join(",")+"</td>");
        }else{
        items.push("<td>"+value[v]+"</td>");
        // console.log(value[v]);
        }
     //    var f=[];
     //    $.each(value.f,function(k1,v1){         
     // f.push(v1.name);
      // console.log(v1.name);
      // });
        // console.log(Object.keys(v[0]));
      });
      items.push("</tr>");   
      // var Dynamic_table ='<h1>JQuery Ajax Tutorials</h1>';
       $("<tbody/>",{html:items.join("")}).appendTo("table");
    });
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