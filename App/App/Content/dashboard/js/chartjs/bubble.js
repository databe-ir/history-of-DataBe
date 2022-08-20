var getBubbleChartJs = function (element) {
    var popData = {
        datasets: [{
            label: ["جمعیت"],
            //for bubble chart circle point you can direclty pass radius with 'r' on data or you can calculate at load time
            // refer this link https://www.chartjs.org/docs/latest/charts/bubble.html more details
            data: [
                { x: 76.5, y: 1.6, population: 1409517397, name: '1', country: 'منطقه1' },
                { x: 68.3, y: 2.43, population: 1339180127, name: '2', country: 'منطقه2' },
                { x: 79.3, y: 1.87, population: 322179605, name: '3', country: 'منطقه3' },
                { x: 81.2, y: 1.88, population: 66181585, name: '4', country: 'منطقه4' },
                { x: 82.4, y: 2.07, population: 64979548, name: '5', country: 'منطقه5' },
                { x: 82.7, y: 1.44, population: 59359900, name: '6', country: 'منطقه6' },
                { x: 62.9, y: 2.29, population: 56717156, name: '7', country: 'منطقه7' },
                { x: 82.2, y: 1.6, population: 36624199, name: '8', country: 'منطقه8' },
                { x: 74.5, y: 2.09, population: 32938213, name: '9', country: 'منطقه9' },
                { x: 82.8, y: 1.77, population: 24450561, name: '10', country: 'منطقه10' },
                { x: 81.9, y: 1.78, population: 17035938, name: '11', country: 'منطقه11' },
                { x: 77.1, y: 2.32, population: 9400145, name: '12', country: 'منطقه12' },
                { x: 80.6, y: 1.73, population: 5733551, name: '13', country: 'منطقه13' },
                //{ x: 81.6, y: 2.02, population: 4705818, name: 'NZ', country: 'New Zealand' },
                //{ x: 74.7, y: 2.4, population: 4136528, name: 'KW', country: 'Kuwait' },
                //{ x: 76.2, y: 1.96, population: 2890299, name: 'JM', country: 'Jamaica' },
                //{ x: 69.9, y: 2.41, population: 905502, name: 'FJ', country: 'Fiji' },
                //{ x: 69.8, y: 1.9, population: 807610, name: 'BT', country: 'Bhutan' },
                //{ x: 70.9, y: 3.47, population: 97553151, name: 'EG', country: 'Egypt' }
            ],
            backgroundColor: "#7cb5ec"
        }]
    };
    //Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontFamily = "Shabnam";
    Chart.defaults.global.defaultFontSize = 18;
    var ctx = document.getElementById(element.Id);
    var _options = {
        elements: {
            point: {
                radius: function (context) {
                    var index = context.dataIndex;
                    var population = context.dataset.data[index].population;
                    var base = population / 100000000;
                    return base * 3 + 3;
                }
            }
        },
        title: {
            display: true,
            text: 'امید به زندگی در مناطق 13 گانه شهرستان مشهد'
        }, scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "میزان باروری"
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "امید به زندگی"
                }
            }]
        },
        tooltips: {
            callbacks: {
                title: function (tooltipItem, data) {
                    return this._data.datasets[0].data[tooltipItem[0].index].country
                },
                beforeLabel: function (tooltipItem, data) {
                    return "میزان باروری: " + tooltipItem.yLabel
                },
                afterLabel: function (tooltipItem, data) {
                    return "امید به زندگی: " + tooltipItem.xLabel;
                },
                label: function (tooltipItem, data) {
                    return "جمعیت: " + data.datasets[0].data[tooltipItem.index].population;
                }

            }
        }
    }

    new Chart(ctx, {
        type: 'bubble',
        data: popData,
        options: _options
    });
}