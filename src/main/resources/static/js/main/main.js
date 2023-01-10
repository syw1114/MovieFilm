new Chart(document.getElementById("canvas"), {
    type: 'horizontalBar',
    data: {
        labels: ['test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test'],
        datasets: [{
            label: '당일 관객수(만명)',
            data: [10, 3, 30, 23, 10, 5, 15, 25, 2, 4, 1, 13, 52, 23],
            borderColor: "rgba(255, 201, 14, 1)",
            backgroundColor: "rgba(255, 201, 14, 0.5)",
            fill: false,
        }]
    },
    options: {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,

            }],
            yAxes: [{
                display: true,
                ticks: {
                    autoSkip: false,
                },

            }]
        }
    }
});