$.getJSON("data.json", function(data) {
    var items=[];
    $.each(data,function(key,val)
    {
items.push("<tr>");
items.push("<td id=''"+key+"''>"+val.id+"</td>");
items.push("<td id=''"+key+"''>"+val.index+"</td>");
items.push("<td id=''"+key+"''>"+val.guid+"</td>");
items.push("<td id=''"+key+"''>"+val.isActive+"</td>");
items.push("<td id=''"+key+"''>"+val.balance+"</td>");
items.push("<td id=''"+key+"''>"+val.picture+"</td>");
items.push("<td id=''"+key+"''>"+val.age+"</td>");
items.push("<td id=''"+key+"''>"+val.eyeColor+"</td>");
items.push("<td id=''"+key+"''>"+val.name+"</td>");
items.push("<td id=''"+key+"''>"+val.gender+"</td>");
items.push("<td id=''"+key+"''>"+val.company+"</td>");
items.push("<td id=''"+key+"''>"+val.email+"</td>");
items.push("<td id=''"+key+"''>"+val.phone+"</td>");
items.push("<td id=''"+key+"''>"+val.address+"</td>");
items.push("<td id=''"+key+"''>"+val.about+"</td>");
items.push("<td id=''"+key+"''>"+val.registered+"</td>");
items.push("<td id=''"+key+"''>"+val.latitude+"</td>");
items.push("<td id=''"+key+"''>"+val.longitude+"</td>");


    });
    $("<t body/>",{html:items.join("") }).appendTo("table");
    // this will show the info it in firebug console
});
