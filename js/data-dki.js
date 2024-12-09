// Data retrieved from https://netmarketshare.com/
// Build the chart

setTimeout(() => {

    // Highcharts.chart('container-dki', {
    //     chart: {
    //         plotBackgroundColor: null,
    //         backgroundColor: 'rgba(255,255,255,0)',
    //         borderRadius: 0,
    //         plotBorderWidth: null,
    //         plotShadow: false,
    //         type: 'pie'
    //     },
    //     title: {
    //         // text: 'Hasil Pilkada DKI Jakarta 2024',
    //         text: null,
    //         align: 'left',
    //         style: {

    //             font: 'bold 1.2rem "Jost", sans-serif',
    //             // lineHeight: '2rem'
    //         }
    //     },
    //     // legend: {
    //     //     enabled: false
    //     // },
    //     credits: {
    //         enabled: false //buat highcharts com
    //     },
    //     legend: {
    //         itemStyle: {
    //             font: '500 .7rem Jost',
    //             // color: '#A0A0A0'
    //         },


    //     },
    //     tooltip: {
    //         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    //         style: {
    //             // fontWeight: 'bold',
    //             fontFamily: 'Jost',
    //             fontSize: '1.2rem'
    //         }
    //     },
    //     accessibility: {
    //         point: {
    //             valueSuffix: '%'
    //         }
    //     },
    //     plotOptions: {
    //         pie: {
    //             allowPointSelect: true,
    //             cursor: 'pointer',
    //             dataLabels: {
    //                 enabled: false,
    //                 style: {
    //                     color: "white",//color nama
    //                     borderColor: '#fafafa',
    //                     font: 'normal 1rem "Zain", sans-serif',
    //                     fontWeight: 'normal',
    //                     textOutline: false
    //                     // lineHeight: '2rem'
    //                 },
    //             },
    //             showInLegend: true
    //         }
    //     },
    //     series: [{
    //         name: 'Brands',
    //         colorByPoint: true,
    //         data: [{
    //             name: 'Ridwan Kamil - Suswono',
    //             y: 263542,
    //             // sliced: true,
    //             // selected: true
    //         }, {
    //             name: 'Dharma - Kun',
    //             y: 654627
    //         }, {
    //             name: 'Pramono- Rano',
    //             y: 320928
    //         }]
    //     }]
    // });


    Highcharts.setOptions({
        lang: {
            thousandsSep: '.'
        }
    })
    Highcharts.chart('container-dki', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Corn vs wheat estimated production for 2023'
        },
        subtitle: {
            text:
                'Source: <a target="_blank" ' +
                'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>'
        },
        xAxis: {
            categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
            crosshair: true,
            accessibility: {
                description: 'Countries'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '1000 metric tons (MT)'
            }
        },
        tooltip: {
            valueSuffix: ' (1000 MT)'
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [
            {
                name: 'Corn',
                data: [387749, 280000, 129000, 64300, 54000, 34300]
            },
            {
                name: 'Wheat',
                data: [45321, 140000, 10000, 140500, 19500, 113500]
            }
        ]
    });


}, 1000);
