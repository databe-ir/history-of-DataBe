// common initial function to bind and pass data into chart
var initCharts = function () {
    //highchartjs
    getAreaHighchart({
        Id: 'hc-area-container'
    });
    getColumnHighchart({
        Id: 'hc-column-container'
    });

};

function zoomInCharts(options) {
    console.log("zoomInCharts called ...");
    //TO DO options should contain lot more info to make dyanmic for each charts based on parameter
    // Temporary logic to do zoom for all charts
    switch (options.title) {
        //highchartjs

        case 'نرخ تغییرات دمای ماهانه (درجه سانتیگراد) در شهر مشهد طی سال‌های 68 لغایت 97':
            getAreaHighchart({
                Id: options.Id
            });
            break;
        case 'میزان دمای ماهانه (درجه سانتیگراد) در شهر مشهد طی سال‌های 68 لغایت 97':
            getColumnHighchart({
                Id: options.Id
            });
            break;

    }

}

var togglechart = function (e) {
    console.log("togglechart BUTTON CLICKED.");

    console.log(e);
    // Temporary logic to do zoom for all charts
    var chartTitle = $(e).parent().text().trim();


    // Do Some calculation or some stuff for zomm in chart
    // Clear old contents from popup
    $('#zoomTitle').empty();
    $('#zoomTitle').text(chartTitle);
    $('#zoombody').empty();

    // fix height& width issue
    var element = document.getElementById('zoombody');
    element.removeAttribute("style");
    element.removeAttribute("class");
    element.style.height = "500px";

    // Update requested charts in Zoom mode
    // For Temporary purpose used setTimout function as popup opened after zoomInCharts function
    setTimeout(function () {
        zoomInCharts({
            title: chartTitle,
            Id: 'zoombody'
        });
    }, 0);

    //show thw popup
    $('#zoomPopup').modal('show');
};

$(function () {
    console.log("DOM is ready");
    initCharts();

    $(".togglechart").click(function () {
        togglechart(this);
    });
    // Dashboard toggle view using switch
    $('#toggleDashboard').click(function (e) {
        var element = $("#toggleDashboard").children();
        if ($(element).hasClass('fa-toggle-off')) {
            $(element).toggleClass('fa-toggle-off fa-toggle-on');
            $("#toggleDashboard").attr('title', "Click to switch main dashboard");
            $("#dashboard-title").html('Second Dashboard');
            $('.main-dashboard').hide();
            //temporary fixed issue common ids and charts loads
            $('.second-dashboard').html($('.main-dashboard').html());
            $('.second-dashboard').show();

        } else {
            $(element).toggleClass('fa-toggle-on fa-toggle-off');
            $("#toggleDashboard").attr('title', "Click to switch second dashboard");
            $("#dashboard-title").html('Main Dashboard');
            $('.main-dashboard').show();
            $('.second-dashboard').hide();
        }
    });

    $(".rotate-chart").click(function (e) {
        //Store current element in local as cache value to reduce extra traversing for same element using jquery
        var $currentElement = $(this);
        var chartLib = $currentElement.attr("data-lib");
        var chartType = $currentElement.attr("data-chart-type");
        if (chartLib === "c3js") {

            //Below code for rotate charts only works for c3 bar charts
            var isRotate = $currentElement.attr("data-rotate") === "false" ? true : false;
            console.log(this);
            $currentElement.attr("data-rotate", isRotate);
            var chartId = "c3-" + chartType + "-container";
            switch (chartType) {
                case "bar":

                    getBarC3Js({
                        Id: chartId, //$(this).attr("data-target-id"),
                        isRotate: isRotate
                    });

                    break;
                case "line":

                    getLineC3Js({
                        Id: chartId, //$(this).attr("data-target-id"),
                        isRotate: isRotate
                    });

                    break;
                default:
                    break;
            }
        } else if (chartLib === "chartjs") {
            //Below code for rotate charts only works for chartsjs bar/column charts
            var isRotate = $currentElement.attr("data-rotate") === "bar" ? "horizontalBar" : "bar";
            //console.log(this);
            $currentElement.attr("data-rotate", isRotate);
            var chartId = "chart-" + chartType + "-container";
            switch (chartType) {
                case "bar":

                    getBarChartJs({
                        Id: chartId, //$(this).attr("data-target-id"),
                        isRotate: isRotate
                    });

                    break;
                default:
                    break;
            }
        } else if (chartLib === "highchartjs") {
            //Below code for rotate charts only works for chartsjs bar/column charts
            var isRotate = $currentElement.attr("data-rotate") === "bar" ? "column" : "bar";
            //console.log(this);
            $currentElement.attr("data-rotate", isRotate);
            var chartId = "hc-" + chartType + "-container";
            switch (chartType) {
                case "bar":

                    getBarHighchart({
                        Id: chartId, //$(this).attr("data-target-id"),
                        isRotate: isRotate
                    });

                    break;
                case "column":

                    getColumnHighchart({
                        Id: chartId, //$(this).attr("data-target-id"),
                        isRotate: isRotate
                    });

                    break;

                default:
                    break;
            }
        }
    });

    $('body').on('click', function (e) {
        $("[data-toggle=popover]").each(function (i, obj) {
            $(this).popover({
                html: true,
                content: function () {
                    var id = $(this).attr('id')
                    return $('#popover-content-' + id).html();
                }
            });
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });
});