Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    }
})
Highcharts.chart('container-usia-muda', {
    chart: {
        type: 'bar',
        backgroundColor: 'rgba(255,255,255,.6)',
        borderRadius: 16,
    },
    title: {
        text: null,
        align: 'left',
        style: {
            // color: "#fafafa",
            font: 'bold 2rem "Zain", sans-serif',

            lineHeight: '4rem'
        }
    },
    subtitle: {
        text: 'Sumber: BPS',
        align: 'left',
        style: {
            color: "#4a4a4a",
            font: 'normal 13px "Source Code Pro", sans-serif',
            // lineHeight: '2rem'
        }
    },
    xAxis: {
        categories: ['15-19 ', '20-24 ', '25-29 ', '30-34 ', '35-39 ', '40-44 ', '45-49 ', '50-54 ', '55-59 ', '> 60 '],
        title: {
            text: 'Tahun'
        },

        labels: {
            // text: null,
            style: {
                // color: "#fafafa",
                font: '18px "Zain", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
        gridLineWidth: .7,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        // title: {
        //     text: 'Population (millions)',
        //     align: 'high'
        // },
        labels: {
            overflow: 'justify',
            enabled: false
        },
        title: {
            text: null
        },
        gridLineWidth: 0
    },
    tooltip: {
        // formatter: function () {
        //     var a = this.y.toString().replace('.', ',');
        //     return this.series.name + ': <b>' + a + '%</b>';

        // },
        // valueSuffix: '%',
        // value: '{point.name} tahun'
        formatter: function () {
            var a = this.y.toString().replace('.', ',');
            return 'Usia: ' + this.x + ' tahun<br>Pengangguran di tahun <b>' + this.series.name +
                '</b><br> mencapai <b>' + a + '%</b>';
        },
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Zain',
            fontSize: '1.2rem'
        }
    },
    plotOptions: {
        // series: {
        //     stacking: 'normal',
        // },
        bar: {
            borderRadius: '50%',
            borderColor: 'transparent',
            dataLabels: {
                enabled: true,
                formatter: function () {
                    var a = this.y.toString().replace('.', ',');
                    // var pcnt = (data[this.x].y / dataSum) * 100;
                    return '<span>' + a + ' %' + '</span>';
                },
                style: {
                    // color: "#fafafa",
                    font: 'normal 1.5rem "Zain", sans-serif',
                    // lineHeight: '2rem'
                    fontWeight: 'normal',
                    textOutline: false
                },
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        x: -10,
        y: 10,
        floating: true,
        borderWidth: 1,
        itemStyle: {
            font: 'normal .9rem Zain',
            // color: '#A0A0A0'
        },
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'rgba(255,255,255,.7)',
        shadow: false
    },
    credits: {
        enabled: false //buat highcharts com
    },
    series: [{
        name: '2021',
        data: [23.91, 17.73, 9.26, 5.43, 4.02, 3.42, 3.30, 2.18, 1.98, 2.73]
    }, {
        name: '2022',
        data: [29.08, 17.02, 7.13, 3.70, 2.65, 2.43, 2.33, 2.38, 2.37, 2.85]
    }, {
        name: '2023',
        data: [25.77, 16.85, 7.48, 3.55, 2.54, 1.82, 1.80, 1.79, 1.52, 1.28]
    }]
});
