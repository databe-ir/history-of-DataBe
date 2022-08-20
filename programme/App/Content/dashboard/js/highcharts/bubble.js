var getBubbleHighchart = function (element) {
    Highcharts.chart(element.Id, {
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'طول عمر کسب کار ها در منطق 13 گانه'
        },

        subtitle: {
            text: 'منبع: دفتر آمار'
        },

        xAxis: {
            startOnTick: true,
            endOnTick: true,
            gridLineWidth: 1,
            title: {
                text: 'سابقه'
            },
            labels: {
                format: '{value}'
            },
            tickInterval: 1/*,
            maxPadding:0.2
            /*,
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 65,
                label: {
                    rotation: 0,
                    y: 15,
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe fat intake 65g/day'
                },
                zIndex: 3
            }]*/
        },

        yAxis: {
            startOnTick: true,
            endOnTick: true,
            tickInterval: .5,
            title: {
                text: 'درآمد'
            },
            labels: {
                format: '{value}'
            },
            maxPadding: 0.1/*,
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 50,
                label: {
                    align: 'right',
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe sugar intake 50g/day',
                    x: -10
                },
                zIndex: 3
            }]*/
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h4>{point.country}</h4></th></tr>' +
                '<tr><th>سابقه:</th><td>{point.x} </td></tr>' +
                '<tr><th>درآمد:</th><td>{point.y} </td></tr>' +
                '<tr><th>تعداد نیرو :</th><td>{point.z} </td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        series: [{
            data: [
                { x: 76.5, y: 1.6, z: 1409517397, name: '1', country: 'منطقه 1' },
                { x: 68.3, y: 2.43, z: 1339180127, name: '2', country: 'منطقه 2' },
                { x: 79.3, y: 1.87, z: 322179605, name: '3', country: 'منطقه 3' },
                { x: 81.2, y: 1.88, z: 66181585, name: '4', country: 'منطقه 4' },
                { x: 82.4, y: 2.07, z: 64979548, name: '5', country: 'منطقه 5' },
                { x: 82.7, y: 1.44, z: 59359900, name: '6', country: 'منطقه 6' },
                { x: 62.9, y: 2.29, z: 56717156, name: '7', country: 'منطقه 7' },
                { x: 82.2, y: 1.6, z: 36624199, name: '8', country: 'منطقه 8' },
                { x: 74.5, y: 2.09, z: 32938213, name: '9', country: 'منطقه 9' },
                { x: 82.8, y: 1.77, z: 24450561, name: '10', country: 'منطقه 10' },
                { x: 81.9, y: 1.78, z: 17035938, name: '11', country: 'منطقه 11' },
                { x: 77.1, y: 2.32, z: 9400145, name: '12', country: 'منطقه 12' },
                { x: 80.6, y: 1.73, z: 5733551, name: '13', country: 'منطقه 13' },
                //{ x: 81.6, y: 2.02, z: 4705818, name: 'NZ', country: 'New Zealand' },
                //{ x: 74.7, y: 2.4, z: 4136528, name: 'KW', country: 'Kuwait' },
                //{ x: 76.2, y: 1.96, z: 2890299, name: 'JM', country: 'Jamaica' },
                //{ x: 69.9, y: 2.41, z: 905502, name: 'FJ', country: 'Fiji' },
                //{ x: 69.8, y: 1.9, z: 807610, name: 'BT', country: 'Bhutan' },
                //{ x: 70.9, y: 3.47, z: 97553151, name: 'EG', country: 'Egypt' }
            ]
        }]

    });
};