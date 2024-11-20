$(document).ready(function () {
  const swiper6 = new Swiper(".mySwiper6", {
    grabCursor: false,
    navigation: "true",
    allowTouchMove: false,
    // effect: "creative",
    effect: "fade",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  AOS.init();

  //   Pie Chart Js S
  console.log($.fn.insertFusionCharts);
  //   Pie Chart Js E
});

FusionCharts.ready(function () {
  var fusioncharts = new FusionCharts({
    type: "pie3d",
    renderAt: "chart-container",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource: {
      chart: {
        subcaption: "For a net-worth of $1M",
        showvalues: "1",
        showpercentintooltip: "0",
        numberprefix: "$",
        enablemultislicing: "1",
        theme: "candy",
        bgColor: "transparent",
        showBorder: "0", // Remove chart border
        canvasBgAlpha: "0", // Remove canvas background
        showCanvasBorder: "0", // Hide canvas border
        plotBorderAlpha: "0",
        showLabels: "1",
        labelDistance: "15", // Adjust label distance
        use3DLighting: "0",
      },
      data: [
        {
          label: "Equity",
          value: "300000",
        },
        {
          label: "Debt",
          value: "230000",
        },
        {
          label: "Bullion",
          value: "180000",
        },
        {
          label: "Real-estate",
          value: "270000",
        },
        {
          label: "Insurance",
          value: "20000",
        },
      ],
    },
  });
  fusioncharts.render();

  $(window).on("load", function () {
    $(".ct_loader_main").fadeOut();
  });
});
