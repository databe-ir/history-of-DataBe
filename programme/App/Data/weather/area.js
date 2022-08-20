var getAreaHighchart = function (element) {
    Highcharts.chart(element.Id, {
        chart: {
            type: 'area'
        },
        title: {
            text: 'نرخ تغییرات دمای ماهانه (درجه سانتیگراد) در شهر مشهد طی سال‌های 68 لغایت 97'
        },
        subtitle: {
            text: 'مأخذ : اداره کل هواشناسی استان خراسان رضوی'
        },
        xAxis: {
            //categories: ['1365', '1370', '1375', '1380', '1385', '1390', '1395'],
            categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'درجه سلسیوس'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000;
                }
            }
        },
        tooltip: {
            //split: true,
            //valueSuffix: 'C°'
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
            name: 'حداکثر',
            data: [19.8, 26.1, 31.8, 35, 34.6, 31.2, 25.2, 18.3, 11.5, 8.9, 9.3, 13.3]

        }, {
            name: 'متوسط',
            data: [13.7, 19.5, 24.6, 27.7, 27.1, 23.4, 17.6, 11.8, 6, 3.6, 4, 7.8]
        }, {
            name: 'حداقل',
            data: [7.5, 12.8, 17.4, 20.5, 19.5, 15.5, 9.9, 5.3, 0.5, - 1.7, - 1.3, 2.4]
        }]
    });
};