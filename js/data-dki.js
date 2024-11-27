// Data retrieved from https://netmarketshare.com/
// Build the chart
Highcharts.chart('container-dki', {
    chart: {
        plotBackgroundColor: null,
        backgroundColor: 'rgba(255,255,255,0)',
        borderRadius: 0,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        // text: 'Hasil Pilkada DKI Jakarta 2024',
        text: null,
        align: 'left',
        style: {

            font: 'bold 1.2rem "Jost", sans-serif',
            // lineHeight: '2rem'
        }
    },
    // legend: {
    //     enabled: false
    // },
    credits: {
        enabled: false //buat highcharts com
    },
    legend: {
        itemStyle: {
            font: '500 1rem Jost',
            // color: '#A0A0A0'
        },


    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Jost',
            fontSize: '1.2rem'
        }
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
                // style: {
                //     color: "white",//color nama
                //     borderColor: '#fafafa',
                //     font: 'normal 1.5rem "Zain", sans-serif',
                //     fontWeight: 'normal',
                //     textOutline: false
                //     // lineHeight: '2rem'
                // },
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Ridwan Kamil - Suswono',
            y: 263542,
            // sliced: true,
            // selected: true
        }, {
            name: 'Dharma - Kun',
            y: 654627
        }, {
            name: 'Pramono- Rano',
            y: 320928
        }]
    }]
});
