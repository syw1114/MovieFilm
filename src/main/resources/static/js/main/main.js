var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['아바타', '슬램덩크', '유령', '교섭', '영웅', '12월'],
        datasets: [{
            label: '당일 관객수(만명)',
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'],
            borderColor: ['rgb(255, 99, 132,1.5)',
                'rgba(54, 162, 235, 1.5)',
                'rgba(255, 206, 86, 1.5)',
                'rgba(75, 192, 192, 1.5)',
                'rgba(153, 102, 255, 1.5)',
                'rgba(255, 159, 64, 1.5)'],
            data: [2, 4, 7, 10, 14, 15]
        }]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            fontSize: 30,
            fontColor: 'rgba(46, 49, 49, 1)'
        },
        legend: {
            labels: {
                fontColor: 'rgb(83, 51, 237)',
                fontSize: 15
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: 'rgb(27, 163, 156)',
                    fontSize: '15'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: 'rgba(246, 36, 89, 1)',
                    fontSize: '15'
                }
            }]
        }
    }
});
