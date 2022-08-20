var getColumnHighchart = function (element) {
    Highcharts.chart(element.Id, {
        chart: {
            type: element.isRotate === undefined ? 'column' : element.isRotate
        },
        title: {
            text: 'میزان دمای ماهانه (درجه سانتیگراد) در شهر مشهد طی سال‌های 68 لغایت 97'
        },
        xAxis: {
            categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"]
        },
        credits: {
            enabled: false
        },
        yAxis: [{
            min: 0,
            title: {
                text: 'درجه سلسیوس'
            }
        }, {
            title: {
                text: 'C°'
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
        series: [
            //{
            //name: 'کارمندان',
            //color: 'rgba(165,170,217,1)',
            //data: [150, 73, 20],
            //pointPadding: 0.3,
            //pointPlacement: -0.2
            //},
            {
                name: 'حداکثر',
                color: 'rgba(126,86,134,.9)',
                data: [19.8, 26.1, 31.8, 35, 34.6, 31.2, 25.2, 18.3, 11.5, 8.9, 9.3, 13.3],
                pointPadding: 0.4,
                pointPlacement: -0.2

            }
            , {
                name: 'متوسط',
                color: 'rgba(248,161,63,1)',
                data: [13.7, 19.5, 24.6, 27.7, 27.1, 23.4, 17.6, 11.8, 6, 3.6, 4, 7.8],

                tooltip: {
                    //valuePrefix: 'R',
                    //valueSuffix: 'X'
                },
                pointPadding: 0.3,
                pointPlacement: 0.2,
                yAxis: 1
            }, {
                name: 'حداکثر',
                color: 'rgba(186,60,61,.9)',
                data: [19.8, 26.1, 31.8, 35, 34.6, 31.2, 25.2, 18.3, 11.5, 8.9, 9.3, 13.3],
                tooltip: {
                    //valuePrefix: 'R',
                    //valueSuffix: 'X'
                },
                pointPadding: 0.4,
                pointPlacement: 0.2,
                yAxis: 1
            }]
    });

};
