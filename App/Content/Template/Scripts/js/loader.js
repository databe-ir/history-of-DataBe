// page loader
$(window).on('load', function () {
    setTimeout(function () {

        if (navigator.onLine) {

            $('.status').remove();

            $(".loader-o").addClass("hide-loading");
        }
        else {
            $('.status').html('<p style="z-index: 999;color: #ffffff;text-align:center;font-size:50px;position: absolute;width: 100 %;height: 100 %;">نرم افزار مبتی بر وب میباشد و شما به آن دسترسی ندارید<br />لطفا اتصال خود را به اینترنت برسی کنید و برنامه را دوباره اجرا کنید</p>');
            setTimeout('', 200);
            $('.loading-spinner').remove();
            $('.refresh').html('<p><a class="checkonline" style="text-decoration:none;color:white;">برسی دوباره</a></p>');

            $('.checkonline').on('click', function (e) {
                e.preventDefault();

                location.reload();

            });
        }

    }, 1000);

});
