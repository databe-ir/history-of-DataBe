var getLineC3Js = function (element) {

    var linechart = c3.generate({
        bindto: '#' + element.Id,
        data: {
            x: 'x',
            columns: [
                ['x', "تاکسی بیسیم", "تاکسی شهری", "اتوبوس", "مترو"],
                ['1394', 107, 31, 635, 203],
                ['1395', 133, 156, 947, 408]
                ,
                ['1396', 814, 841, 3714, 727]
                ,
                ['1397', 1216, 1001, 4436, 738]
            ],
            //x:'country',
            //json:commonData,
            //json:_.pluck(commonData,"data") ,
            // type: 'bar',
            labels: true
            // keys: {
            // //    tick:{ value: _.pluck(commonData,"country")}

            // }
        },
        axis: {
            rotated: element.isRotate,
            x: {
                type: 'category' // this needed to load string x value
            }
        },
        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        },
        grid: {
            x: {
                show: true
            },
            y: {
                show: true
            }
        }
    });

    setTimeout(function () {
        linechart.resize();
    }, 100);
};