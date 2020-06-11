// from data.js
var tableData = data;

var tbody = d3.select('tbody');

function insertData(data) {
    data.forEach((a) => {
        var row = tbody.append('tr');

        Object.entries(a).forEach(([key, value]) => {
            var cell = row.append('td').text(value);
        });
    })
};

//     data.forEach(function(tableData) {
//         console.log(tableData);
//         var row = tbody.append('tr');
    
//         Object.entries(tableData).forEach(function([key,value]) {
//             console.log(key, value);
//             var cell = row.append('td');
//             cell.text(value);
//         })
//     });
// };

insertData(tableData);

var button = d3.select('#filter-btn');

function returnData() {
    
    function deleteData() {
        d3.selectAll('tbody')
            .selectAll('tr').remove();
    };
    deleteData();

    function filterData() {
        var inputValue = d3.select("#datetime").property("value");
        // var filteredUFO = tableData.map(ufo => ufo.datetime === inputValue);

        if (inputValue === "") {
            var filtered = tableData;
            insertData(filtered);
        } else {
            var filtered = tableData.filter(row => row.datetime === inputValue);
            insertData(filtered);
        };

        if (filtered.length === 0) {
            d3.select('tbody').append('tr').append('td').text('Record Not Found');
        };

        // if (inputValue === ""){
        //     filtered = tableData;
        //     insertData(filtered);
        // } if (inputValue === filteredData) {
        //     insertData(filteredData)
        // } else {
        //     d3.select('tbody').append('tr').append('td').text('Record Not Found');
        // };
    };
    filterData();
};

button.on('click', returnData);




// var lastRow = tbody.append('tr');
// var a = lastRow.append('date/time');
// var b = lastRow.append('city');
// var c = lastRow.append('state');
// var d = lastRow.append('country');
// var e = lastRow.append('shape');
// var f = lastRow.append('comment');

// function deleteTbody() {
//     d3.select("tbody")
//       .selectAll("tr").remove()
//       .selectAll("td").remove();
//   };
  
//   // initial display of all UFO sightings
//   console.log(tableData);
//   tableDisplay(tableData);
  
//   // 'Filter Table' button
//   var button = d3.select("#filter-btn");
  
//   // filter the database and display
//   button.on("click", function(event) {
//     d3.event.preventDefault();
//     deleteTbody();
//     var dateInput = d3.select("#datetime").property("value");
    
//     if (dateInput.trim() === "" ) {
//       // display the whole database if the date field has no date
//       var filteredData = tableData;
//     } else {
//       // otherwise, display the filtered dataset  
//       var filteredData = tableData.filter(ufoSighting => 
//         ufoSighting.datetime === dateInput.trim());
//     };
  
//     // display message if no records found
//     if (filteredData.length == 0) {
//       d3.select("tbody")
//         .append("tr")
//         .append("td")
//           .attr("colspan", 7)
//           .html("<h4>No Records Found</h4>");
//     };
  
//     console.log(filteredData);
//     tableDisplay(filteredData);
//   });












// var button = d3.select("#filter-btn");

// button.on('click', function() {
//     var inputElement = d3.select("#datetime");
//     var inputValue = inputElement.property('value');
//     console.log(inputValue);

// });
