var getBarHighchart = function(element) {


    var commonData = [{ "name": "ولادت", "data": [107, 31, 635, 203] }, { "name": "مرگ", "data": [133, 156, 947, 408] }, { "name": "ازدواج", "data": [814, 841, 3714, 727] }, { "name": "طلاق", "data": [1216, 1001, 4436, 738] }];
    Highcharts.chart(element.Id, {
        chart: {
            type: element.isRotate === undefined ? 'bar' : element.isRotate
        },
        title: {
            text: 'وقایع چهارگانه حیاتی شهرستان مشهد سال های 93 تا 96'
        },
        subtitle: {
            text: 'هزار نفر'
        },
        xAxis: {

            // categories: _.pluck(commonData, "country"),
            // OLD way commnted and make dynamic based on base data
            // ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],

            //categories: ['1393', 'America', 'Asia', 'Europe']
            title: {
                text: null
                //text: ['1393', 'America', 'Asia', 'Europe']
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'سرشماری',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: 'هزار'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            // Commented below code due to Roate chart feature as this chart doesn't fit in available region
            // layout: 'vertical',
            // align: 'right',
            // verticalAlign: 'top',
            // x: -30,
            // y: 50,
            //floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: commonData
    });
}