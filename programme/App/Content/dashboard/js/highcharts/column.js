var getColumnHighchart = function (element) {
    Highcharts.chart(element.Id, {
        chart: {
            type: element.isRotate === undefined ? 'column' : element.isRotate
        },
        title: {
            text: 'توسعه شهرداری'
        },
        xAxis: {
            categories: [
                'معاونت فرهنگی',
                'معاونت مالی',
                'معاونت نیروانسانی'
            ]
        },
        credits: {
            enabled: false
        },
        yAxis: [{
            min: 0,
            title: {
                text: 'کارمندان'
            }
        }, {
            title: {
                text: 'درآمدها'
            },
            opposite: true
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: 'کارمندان',
            color: 'rgba(165,170,217,1)',
            data: [150, 73, 20],
            pointPadding: 0.3,
            pointPlacement: -0.2
        }, {
            name: 'پیمان کاران',
            color: 'rgba(126,86,134,.9)',
            data: [140, 90, 40],
            pointPadding: 0.4,
            pointPlacement: -0.2
        }, {
            name: 'درآمدها',
            color: 'rgba(248,161,63,1)',
            data: [183.6, 178.8, 198.5],
            tooltip: {
                valuePrefix: 'R',
                valueSuffix: 'X'
            },
            pointPadding: 0.3,
            pointPlacement: 0.2,
            yAxis: 1
        }, {
            name: 'هزینه ها',
            color: 'rgba(186,60,61,.9)',
            data: [203.6, 198.8, 208.5],
            tooltip: {
                valuePrefix: 'R',
                valueSuffix: 'X'
            },
            pointPadding: 0.4,
            pointPlacement: 0.2,
            yAxis: 1
        }]
    });

};