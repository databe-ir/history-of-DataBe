var getDoughNutChartJs = function (element) {

var data = {
    labels: ["عوارض", "بودجه", "دیون", "هزینه ها"],
    datasets: [
        {
            label: "1394",
            data: [107,31,635,203],
        },
        {
            label: "1395",
            data: [133,156,947,408],
        },
        {
            label: "1396",
            data: [814,841,3714,727],
        },
        {
            label: "1397",
            data: [1216,1001,4436,738],
        }
    ]

    
};
var options = {
	
};


var ctxDoughnut = document.getElementById(element.Id);

// And for a doughnut chart
 new Chart(ctxDoughnut, {
    type: 'doughnut',
    data: data,
    options: options
});

};