/*global $, jQuery, Chart */
(function () {
    "use strict";
    var canvas = document.getElementById('chart'),
        ctx = canvas.getContext("2d"),
        gradient = ctx.createLinearGradient(0, 0, 0, 400),
        chart = null,
        lineChartData = null;
    
    gradient.addColorStop(0, 'rgba(255,255,255,0.6)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');

    lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            fillColor: gradient,
            strokeColor: "rgba(255, 255, 255, 1)",
            pointColor: "rgba(255, 255, 255, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(255, 255, 255, 1)",
            data: [400, 500, 488, 533, 500, 559, 615]
        }]
    };

    function init() {
        if (chart !== null) {
            chart.destroy();
        }
        chart = new Chart(ctx).Line(lineChartData, {
            scaleBeginAtZero: true,
            showScale: false,
            pointDotStrokeWidth: 4
        });
    }


    window.addEventListener('resize', init);
    init();

}(jQuery));