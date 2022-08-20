//< !-- ===================scripts  for various  charts  begin ================================================= -->
//< !-- ===================scatter  chart  begin ================================================= -->
//<script type="text/javascript">

$(document).ready(function () {
    $("img.ScatterImg").click(function () {

        document.getElementById("sliders").style.display = "none";

        var options1 = {
            chart: {
                renderTo: 'container',
                margin: 100,
                type: 'scatter',
                options3d: {
                    enabled: true,
                    alpha: 20,
                    beta: 10,
                    depth: 100,
                    viewDistance: 5,

                    frame: {
                        bottom: { size: 1, color: 'rgba(0,0,0,0.02)' },
                        back: { size: 1, color: 'rgba(0,0,0,0.04)' },
                        side: { size: 1, color: 'rgba(0,0,0,0.06)' }
                    }
                }
            },
            title: {
                text: 'وقایع حیاتی چهارگانه  طی سالیان 89 تا 97'
            },
            subtitle: {
                text: 'برای چرخش در فضا ، کلیک کنید و منطقه را صفحه بکشید'
            },
            plotOptions: {
                scatter: {
                    width: 100000,
                    height: 100000,
                    depth: 100000
                }
            },
            yAxis: {
                min: 0,
                max: 100000,
                title: "عنوانp"
            },
            xAxis: {
                min: 0.0,
                max: 100000,
                //gridLineWidth: 1,
                title: "97"
            },
            zAxis: {
                min: 0.0,
                max: 100000,
                title: "96"
            },
            legend: {
                enabled: true
            },
            series: []
            // series: [{name:'',colorByPoint: true, data: [[]]}, {name:'',colorByPoint: true, data: [[]]}, {name:'',colorByPoint: true, data: [[]]}]
        };



        $.get('Data/sample_2.csv', function (data) {

            try {
                var lines = data.toString().split('\n');
                //alert(lines.toString());
            }
            catch (err) {
                alert(err.message);
            }

            try {


                $.each(lines, function (lineNo, line) {
                    var items = line.split(',');
                    if (lineNo === 0) {
                        /*$.each(items, function(itemNo, item) {
                             if (itemNo > 0) options1.xAxis.categories.push(item);
                         });*/
                    }
                    else {
                        var arr_series = { name: '', colorByPoint: true, data: [[]] };
                        $.each(items, function (itemNo, item) {
                            if (itemNo === 0) {
                                arr_series.name = item;
                                arr_series.colorByPoint = true;
                            } else if (itemNo <= 3) {
                                //alert("NO: "+itemNo+"  ITEM: "+item);
                                arr_series.data[0].push(parseFloat(item));
                            }
                        });
                        options1.series.push(arr_series);
                    }
                }
                );
            }
            catch (err) {
                alert(err.message);
            }

            // Give the points a 3D feel by adding a radial gradient
            Highcharts.getOptions().colors = $.map(Highcharts.getOptions().colors, function (color) {
                return {
                    radialGradient: {
                        cx: 0.4,
                        cy: 0.3,
                        r: 0.5
                    },
                    stops: [
                        [0, color],
                        [1, Highcharts.Color(color).brighten(-0.2).get('rgb')]
                    ]
                };
            });

            // Set up the chart
            var chart = new Highcharts.Chart(options1);


            // Add mouse events for rotation
            $(chart.container).bind('mousedown.hc touchstart.hc', function (e) {
                e = chart.pointer.normalize(e);

                var posX = e.pageX,
                    posY = e.pageY,
                    alpha = chart.options.chart.options3d.alpha,
                    beta = chart.options.chart.options3d.beta,
                    newAlpha,
                    newBeta,
                    sensitivity = 2; // lower is more sensitive

                $(document).bind({
                    'mousemove.hc touchdrag.hc': function (e) {
                        // Run beta
                        newBeta = beta + (posX - e.pageX) / sensitivity;
                        newBeta = Math.min(100, Math.max(-100, newBeta));
                        chart.options.chart.options3d.beta = newBeta;

                        // Run alpha
                        newAlpha = alpha + (e.pageY - posY) / sensitivity;
                        newAlpha = Math.min(100, Math.max(-100, newAlpha));
                        chart.options.chart.options3d.alpha = newAlpha;

                        chart.redraw(false);
                    },
                    'mouseup touchend': function () {
                        $(document).unbind('.hc');
                    }
                });
            });
        }, "text");
    });
});

//</script>
//<!-- ================== scatter chart end ================================================= -->
//< !--================== 3D bar chart begin -================================================= --->
//<script type="text/javascript">
$(document).ready(function () {
    $("img.3dBarImg").click(function () {

        document.getElementById("sliders").style.display = "initial";

        var options1 = {
            mapNavigation: {
                enabled: true,
                enableDoubleClickZoomTo: true
            },
            chart: {
                zoomType: 'x',
                renderTo: 'container',
                type: 'column',
                margin: 75,
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 15,
                    depth: 50,
                    viewDistance: 25
                }
            },
            title: {
                text: 'Statewise Vegetables Intake of India'
            },
            subtitle: {
                text: 'Rotate by dragging the sliders below'
            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -20,
                    style: {
                        fontSize: '11px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                },
                categories: []
            },

            series: []
            //series: [{data: [29.9, 71.5, 106.4, 129.2, 144.0]}, {data: [176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]}]
        };

        $.get('sample_2_tr.csv', function (data) {
            //alert(data.toString());

            try {
                var lines = data.toString().split('\n');
                //alert(lines.toString());
            }
            catch (err) {
                alert(err.message);
            }

            try {

                $.each(lines, function (lineNo, line) {
                    var items = line.split(',');

                    if (lineNo === 0) {
                        $.each(items, function (itemNo, item) {
                            if (itemNo > 0) options1.xAxis.categories.push(item);
                        });
                    }
                    else {
                        var series = { data: [] };
                        $.each(items, function (itemNo, item) {
                            if (itemNo === 0) {
                                series.name = item;
                            } else {
                                series.data.push(parseFloat(item));
                            }
                        });
                        options1.series.push(series);
                    }
                }
                );

            }
            catch (err) {
                alert(err.message);
            }
            var chart = new Highcharts.Chart(options1);

            function showValues() {
                $('#R0-value').html(chart.options.chart.options3d.alpha);
                $('#R1-value').html(chart.options.chart.options3d.beta);
            }

            // Activate the sliders
            $('#R0').on('change', function () {
                chart.options.chart.options3d.alpha = this.value;
                showValues();
                chart.redraw(false);
            });
            $('#R1').on('change', function () {
                chart.options.chart.options3d.beta = this.value;
                showValues();
                chart.redraw(false);
            });

            showValues();
        }, "text");
    });
});
////</script>
////<!--================== 3D bar chart end -================================================= --->
////< !--==================== Area Chart Begin -================================================= --->

////<script type="text/javascript">

$(document).ready(function () {
    $("img.AreaImg").click(function () {

        document.getElementById("sliders").style.display = "none";
        var options1 = {
            chart: {
                zoomType: 'y',
                type: 'area'
            },
            title: {
                text: 'State wise Vegetables Intake in India'
            },
            subtitle: {
                text: 'Drag to Zoom'
            },
            xAxis: {
                allowDecimals: true,
                categories: []
            },
            yAxis: {
                title: {
                    text: 'Intake'
                }
            },
            tooltip: {
                pointFormat: '{series.name} <b>{point.y:,.0f}%</b><br/>'
            },
            plotOptions: {
                area: {
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: []
        };

        $.get('sample_2_tr.csv', function (data) {

            try {
                var lines = data.toString().split('\n');
                //alert(lines.toString());
            }
            catch (err) {
                alert(err.message);
            }

            try {


                $.each(lines, function (lineNo, line) {
                    var items = line.split(',');
                    if (lineNo === 0) {
                        $.each(items, function (itemNo, item) {
                            if (itemNo > 0) options1.xAxis.categories.push(item);
                        });
                    }
                    else {
                        var arr_series = { name: '', data: [] };
                        $.each(items, function (itemNo, item) {
                            if (itemNo === 0) {
                                arr_series.name = item;
                            } else if (itemNo <= 17) {
                                arr_series.data.push(parseFloat(item));
                            }
                        });
                        options1.series.push(arr_series);
                    }
                }
                );
            }
            catch (err) {
                alert(err.message);
            }
            $('#container').highcharts(options1);
        }, "text");
    });
});
//</script>


//<!--===================== Area Chart End -=================================================== --->
//< !-- =================== column chart  begin ================================================= -->
//<script type="text/javascript">

$(document).ready(function () {
    $("img.ColumnImg").click(function () {

        document.getElementById("sliders").style.display = "none";
        var options4 = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'وقایع حیاتی چهارگانه  طی سالیان 89 تا 97'
            },
            subtitle: {
                text: 'ماخذ: ثبت احوال'
            },
            xAxis: {
                categories: ["89", "90", "91", "92", "93", "94", "95", "96", "97"]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'ثبت رخداد'
                }
            },
            //headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            //pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            //    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            //footerFormat: '</table>',
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: []
        };
        $.get('Data/sample_2.csv', function (data) {

            try {
                var lines = data.toString().split('\n');
                //alert(lines.toString());
            }
            catch (err) {
                alert(err.message);
            }

            try {


                $.each(lines, function (lineNo, line) {
                    var items = line.split(',');
                    if (lineNo === 0) {
                        /*$.each(items, function(itemNo, item) {
                             if (itemNo > 0) options1.xAxis.categories.push(item);
                         });*/
                    }
                    else {
                        var arr_series = { name: '', data: [] };
                        $.each(items, function (itemNo, item) {
                            if (itemNo === 0) {
                                arr_series.name = item;
                            } else if (itemNo <= 9) {
                                arr_series.data.push(parseFloat(item));
                            }
                        });
                        options4.series.push(arr_series);
                    }
                }
                );
            }
            catch (err) {
                alert(err.message);
            }
            $('#container').highcharts(options4);
        }, "text");
    });
});
//</script>
//<!-- ===================column chart end ================================================= -->
//< !-- ===================Line chart  begin ================================================= -->
//<script type="text/javascript">

$(document).ready(function () {
    $("img.LineImg").click(function () {

        document.getElementById("sliders").style.display = "none";
        var options1 = {
            chart: {
                zoomType: 'y'
            },
            title: {
                text: 'State Wise Vegetables Intake of India'
            },
            subtitle: {
                text: 'Drag to Zoom In'
            },
            xAxis: {
                categories: ["Daily", "Weekly", "Monthly", "Never"]
            },
            yAxis: {
                title: {
                    text: 'Intake(%)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: []
        };
        $.get('sample_2.csv', function (data) {

            try {
                var lines = data.toString().split('\n');
                //alert(lines.toString());
            }
            catch (err) {
                alert(err.message);
            }

            try {


                $.each(lines, function (lineNo, line) {
                    var items = line.split(',');
                    if (lineNo === 0) {
                        /*$.each(items, function(itemNo, item) {
                             if (itemNo > 0) options1.xAxis.categories.push(item);
                         });*/
                    }
                    else {
                        var arr_series = { name: '', data: [] };
                        $.each(items, function (itemNo, item) {
                            if (itemNo === 0) {
                                arr_series.name = item;
                            } else if (itemNo <= 4) {
                                arr_series.data.push(parseFloat(item));
                            }
                        });
                        options1.series.push(arr_series);
                    }
                }
                );
            }
            catch (err) {
                alert(err.message);
            }
            $('#container').highcharts(options1);
        }, "text");
    });
});
//</script>

//<!-- ===================PIE  chart  begin ======================================= -->
//    <script type="text/javascript">

$(document).ready(function () {
    $("img.PieImg").click(function () {

        document.getElementById("sliders").style.display = "none";
        var options1 = {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: false,
                    alpha: 45,
                    beta: 0
                }
            },
            title: {
                text: 'State Wise Vegetables Intake in India'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Daily Veg Intake(%)',
                data: []
            }]
            // series: [{data: [['Firefox',45.0], ['IE',26.8]]}]
        };


        $.get('sample_2.csv', function (data) {
            try {
                var lines = data.toString().split('\n');
                //alert(lines.toString());
            }
            catch (err) {
                alert(err.message);
            }

            try {

                $.each(lines, function (lineNo, line) {
                    var items = line.split(',');
                    if (lineNo === 0) {
                        /*$.each(items, function(itemNo, item) {
                             if (itemNo > 0) options1.xAxis.categories.push(item);
                         });*/
                    }
                    else {
                        var arr_series = [];
                        $.each(items, function (itemNo, item) {
                            if (itemNo === 0) {
                                arr_series.push(item);
                            } else if (itemNo === 1) {
                                arr_series.push(parseFloat(item));
                            }
                        });
                        options1.series[0].data.push(arr_series);
                    }
                }
                );
            }
            catch (err) {
                alert(err.message);
            }
            $('#container').highcharts(options1);

        }, "text");
    });
});

//</script>
//    <!-- ===================PIE  chart  end ======================================= -->
//< !-- ===================3D PIE  chart  begin ======================================= -->
//<script type="text/javascript">
$(document).ready(function () {
    $("img.3dPieImg").click(function () {

        document.getElementById("sliders").style.display = "none";
        var options1 = {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 60,
                    beta: 0
                }
            },
            title: {
                text: 'State Wise Vegetables Intake in India'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Daily Veg Intake(%)',
                data: []
            }]
            // series: [{data: [['Firefox',45.0], ['IE',26.8]]}]
        };


        $.get('sample_2.csv', function (data) {
            try {
                var lines = data.toString().split('\n');
                //alert(lines.toString());
            }
            catch (err) {
                alert(err.message);
            }

            try {


                $.each(lines, function (lineNo, line) {
                    var items = line.split(',');
                    if (lineNo === 0) {
                        /*$.each(items, function(itemNo, item) {
                             if (itemNo > 0) options1.xAxis.categories.push(item);
                         });*/
                    }
                    else {
                        var arr_series = [];
                        $.each(items, function (itemNo, item) {
                            if (itemNo === 0) {
                                arr_series.push(item);
                            } else if (itemNo === 1) {
                                arr_series.push(parseFloat(item));
                            }
                        });
                        options1.series[0].data.push(arr_series);
                    }
                }
                );
            }
            catch (err) {
                alert(err.message);
            }
            $('#container').highcharts(options1);

        }, "text");
    });
});
//</script>
//<!-- ===================3D PIE  chart  end ======================================= -->
//< !-- ===================DONUT   chart  begin ======================================= -->
//<script type="text/javascript">

$(document).ready(function () {
    $("img.DonutPieImg").click(function () {

        document.getElementById("sliders").style.display = "none";
        var options1 = {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 60,
                }
            },
            title: {
                text: 'State Wise Vegetables Intake in India'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    innerSize: 100,
                    depth: 45
                }
            },
            series: [{
                type: 'pie',
                name: 'Daily Veg Intake(%)',
                data: []
            }]
            // series: [{data: [['Firefox',45.0], ['IE',26.8]]}]
        };


        $.get('sample_2.csv', function (data) {
            try {
                var lines = data.toString().split('\n');
                //alert(lines.toString());
            }
            catch (err) {
                alert(err.message);
            }

            try {


                $.each(lines, function (lineNo, line) {
                    var items = line.split(',');
                    if (lineNo === 0) {
                        /*$.each(items, function(itemNo, item) {
                             if (itemNo > 0) options1.xAxis.categories.push(item);
                         });*/
                    }
                    else {
                        var arr_series = [];
                        $.each(items, function (itemNo, item) {
                            if (itemNo === 0) {
                                arr_series.push(item);
                            } else if (itemNo === 1) {
                                arr_series.push(parseFloat(item));
                            }
                        });
                        options1.series[0].data.push(arr_series);
                    }
                }
                );
            }
            catch (err) {
                alert(err.message);
            }
            $('#container').highcharts(options1);

        }, "text");
    });
});

//</script>
//<!-- ===================DONUT  chart  end ======================================= -->
//< !-- ===================SEMI PIE  chart  begin ======================================= -->
//<script type="text/javascript">
$(document).ready(function () {
    $("img.SemiPieImg").click(function () {

        document.getElementById("sliders").style.display = "none";
        var options1 = {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: false,
                    alpha: 45,
                    beta: 0
                }
            },
            title: {
                text: 'State Wise Vegetables Intake in India'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white',
                            textShadow: '0px 1px 2px black'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%']
                }
            },
            series: [{
                type: 'pie',
                name: 'Daily Veg Intake(%)',
                innerSize: '50%',
                data: []
            }]
            // series: [{data: [['Firefox',45.0], ['IE',26.8]]}]
        };


        $.get('sample_2.csv', function (data) {
            try {
                var lines = data.toString().split('\n');
                //alert(lines.toString());
            }
            catch (err) {
                alert(err.message);
            }

            try {

                $.each(lines, function (lineNo, line) {
                    var items = line.split(',');
                    if (lineNo === 0) {
                        /*$.each(items, function(itemNo, item) {
                             if (itemNo > 0) options1.xAxis.categories.push(item);
                         });*/
                    }
                    else {
                        var arr_series = [];
                        $.each(items, function (itemNo, item) {
                            if (itemNo === 0) {
                                arr_series.push(item);
                            } else if (itemNo === 1) {
                                arr_series.push(parseFloat(item));
                            }
                        });
                        options1.series[0].data.push(arr_series);
                    }
                }
                );
            }
            catch (err) {
                alert(err.message);
            }
            $('#container').highcharts(options1);

        }, "text");
    });
});

//</script>
//<!-- ===================SEMI PIE   chart  end ======================================= -->
//< !-- ===================Polar SPIDER chart begin ======================================= -->
//<script type="text/javascript">
$(document).ready(function () {
    $("img.PolarSpiderImg").click(function () {

        document.getElementById("sliders").style.display = "none";
        var options1 = {
            chart: {
                polar: true,
                type: 'line'
            },

            title: {
                text: 'State wise Vegetable Intake of India(%)',
                x: -10
            },

            pane: {
                size: '95%'
            },

            xAxis: {
                categories: ['Daily', 'Weekly', 'Monthly', 'Never'],
                tickmarkPlacement: 'off',
                lineWidth: 0
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 70,
                layout: 'vertical'
            },

            series: []
        };

        $.get('sample_2.csv', function (data) {
            try {
                var lines = data.toString().split('\n');
                //alert(lines.toString());
            }
            catch (err) {
                alert(err.message);
            }

            try {


                $.each(lines, function (lineNo, line) {
                    var items = line.split(',');
                    if (lineNo === 0) {
                        /*$.each(items, function(itemNo, item) {
                             if (itemNo > 0) options1.xAxis.categories.push(item);
                         });*/
                    }
                    else {
                        var arr_series = { name: '', data: [], pointPlacement: 'on' };
                        $.each(items, function (itemNo, item) {
                            if (itemNo === 0) {
                                arr_series.name = item;
                            } else if (itemNo <= 4) {
                                arr_series.data.push(parseFloat(item));
                            }
                        });
                        options1.series.push(arr_series);
                    }
                }
                );
            }
            catch (err) {
                alert(err.message);
            }
            $('#container').highcharts(options1);

        }, "text");
    });
});
//</script>
//<!-- ===================Polar SPIDER  chart  end ======================================= -->
//< !--================== GEO India chart begin -================================================= --->

//<script type="text/javascript" src="https://www.google.com/jsapi"></script>
//<script type="text/javascript">

/*
google.load("visualization", "1", { packages: ["corechart"] });

function drawGeoGDP() {
    document.getElementById("sliders").style.display = "none";
    var request = new XMLHttpRequest();
    request.open("GET", "sampleData_5.json", false);
    request.send(null);
    var servers = JSON.parse(request.responseText);

    var data = google.visualization.arrayToDataTable(servers.data);

    var options = {
        title: 'StateWise Vegetable consumption in India',
        region: 'IN',
        displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: { colors: ['yellow', 'blue'] }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('container'));
    chart.draw(data, options);
};
*/

//</script>

//<!--==================== GEO India chart end ============================================= -->
//< !--================== GEO MP chart begin -================================================= --->

//<script type="text/javascript">
function drawGeoGDPDist() {
    try {
        document.getElementById("sliders").style.display = "none";
        var request = new XMLHttpRequest();
        request.open("GET", "sampleData_4.json", false);
        request.send(null);
        var servers = JSON.parse(request.responseText);
        var xHeader = [];
        var xName = servers.fields[0].label;
        var yName = "In Lakh Rupees";
        var no_xElements = 0;
        for (var i = 0; i < servers.fields.length; i++) {
            xHeader.push(servers.fields[i].label.split("\n")[0]);
            no_xElements++;
        }

        var res = '';
        var op = new Array(servers.data.length);
        for (var i = 0; i < servers.data.length; i++) {
            op[i] = new Array(3);
            for (var j = 0; j < 3; j++) {
                if (i === 0) {
                    op[i][j] = xHeader[j];

                }
                else {
                    if (j === 0) {
                        op[i][j] = servers.data[i][j];
                    }
                    else {
                        op[i][j] = parseFloat(servers.data[i][j]);
                    }
                    //op[i].push(servers.data[i][j+1]);
                }
                res = res + "  " + op[i][j];
            }
            res = res + "</br>";
        }
        //document.getElementById("para").innerHTML=res;

        var data = google.visualization.arrayToDataTable(op);
        //var data = google.visualization.arrayToDataTable(servers.data);

        var options = {
            title: 'GDP of States MP',
            region: 'IN',
            displayMode: 'markers',
            resolution: 'provinces',
            colorAxis: { colors: ['yellow', 'blue'] }
        };

        var chart = new google.visualization.GeoChart(document.getElementById('container'));
        chart.draw(data, options);
    }
    catch (err) {
        alert(err.message);
    }
}

    //    /**/</script >


    //< !--================== GEO MP chart end -================================================= --->
    //< !-- ===================scripts  for various  charts  end ================================================= -->