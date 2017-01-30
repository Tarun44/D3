function linechart(options)
{

var margin = {top: options.marginTop, right: options.marginRight, bottom: options.marginBottom, left: options.marginLeft},
    width = options.width - margin.left - margin.right,
    height = options.height - margin.top - margin.bottom;

var parseDate = d3.time.format("%d-%b-%y").parse;

var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(options.ticksxaxis);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(options.ticksyaxis);



var valueline = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });
    
var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

// function for the x grid lines
function make_x_axis() {
    return d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(options.ticksxaxis)
}

// function for the y grid lines
function make_y_axis() {
  return d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(options.ticksyaxis)
}

// Get the data
d3.csv(options.data, function(error, data) {
    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.close = +d.close;
    });

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([0, d3.max(data, function(d) { return d.close; })]);


    // Draw the x Grid lines
if(options.gridx==true)
{



    svg.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .call(make_x_axis()
            .tickSize(-height, 0, 0)
            .tickFormat("")
        )
    }
if(options.gridy==true)
{
    // Draw the y Grid lines
    svg.append("g")            
        .attr("class", "grid")
        .call(make_y_axis()
            .tickSize(-width, 0, 0)
            .tickFormat("")
        )
}
    

    // Add the valueline path.
    svg.append("path").style({ 
    "stroke": options.pathstrokecolor,
    "stroke-width":options.pathstrokewidth

})
        .attr("d", valueline(data));

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis).style({"stroke":options.strokecolor,
            "stroke-width":"4"});

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis).style({"stroke":options.strokecolor});

    // Add the text label for the X axis
    svg.append("text")
        .attr("transform",
              "translate(" + (width/2) + " ," + 
                             (height+margin.bottom) + ")")
        .style("text-anchor", "middle")
        .text("Date");

    // Add the white background to the y axis label for legibility
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("x", margin.top - (height / 2))
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .attr("class", "shadow")
        .text("Price ($)");

    // Add the text label for the Y axis
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("x", margin.top - (height / 2))
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Price ($)");

    // Add the title
    svg.append("text")
        .attr("x", (width / 2))     
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("text-decoration", "underline")
        .text("Price vs Date Graph");

});

}