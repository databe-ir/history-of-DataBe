var getBarChartJs = function(element) {
    var data = {
        labels: ["شهر مشهد"],
        datasets: [{
                label: "1393",
                data: [107, 31, 635, 203],
            },
            {
                label: "1394",
                data: [133, 156, 947, 408],
            },
            {
                label: "1395",
                data: [814, 841, 3714, 727],
            },
            {
                label: "1396",
                data: [1216, 1001, 4436, 738],
            }
        ]
    };
    var options = {
        scales: {
            yAxes: [{
                //	stacked:true,
                gridLines: {
                    display: true,
                    color: "rgba(255,99,132,0.2)"
                }
            }],
            xAxes: [{
                stacked: false,
                gridLines: {
                    display: false
                }
            }]
        }
    };


    var ctx = document.getElementById(element.Id);
    //console.log(ctx);

    new Chart(ctx, {
        type: element.isRotate === undefined ? "bar" : element.isRotate, //'bar',//'horizontalBar', for rotate charts
        data: data,
        options: options
    });

};