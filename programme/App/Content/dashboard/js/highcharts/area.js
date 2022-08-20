var getAreaHighchart = function (element) {
    Highcharts.chart(element.Id, {
        chart: {
            type: 'area'
        },
        title: {
            text: 'تخمین جمعیت نواحی شهرستان مشهد'
        },
        subtitle: {
            text: 'منبع: سرشماری'
        },
        xAxis: {
            categories: ['1365', '1370', '1375', '1380', '1385', '1390', '1395'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'هزارنفر'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000;
                }
            }
        },
        tooltip: {
            split: true,
            valueSuffix: 'میلیون'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'منطقه 7',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'منطقه 10',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'منطقه 9',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'منطقه 5',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
            name: 'منطقه 4',
            data: [2, 2, 2, 6, 13, 30, 46]
        }]
    });
};