var getPieHighchart = function (element) {
    Highcharts.chart(element.Id, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: ''
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    //format: '<p class="--gray"><b>{point.name}</b>: {point.percentage:.1f} %</p>',
                    format: '{point.percentage:.1f} %</p>',
                    //format: '<b>{point.name}</b>',
                    style: {
                        color: '#656565'
                        //color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        //color: #656565
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'کارمنددولت',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'گردشگری',
                y: 11.84
            }, {
                name: 'پزشکی',
                y: 10.85
            }, {
                name: 'ریخته گری',
                y: 4.67
            }, {
                name: 'تولیدی',
                y: 4.18
            }, {
                name: 'بیمه',
                y: 1.64
            }, {
                name: 'بازرگانی',
                y: 1.6
            }, {
                name: 'دارویی',
                y: 1.2
            }, {
                name: 'سایر',
                y: 2.61
            }]
        }]
    });

};