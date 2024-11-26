(async () => {
    const mapData = await fetch(
        'https://code.highcharts.com/mapdata/countries/id/id-all.topo.json'
    ).then(response => response.json());

    const data = [
        ['Sumatera Utara', 10, 12, 55, 77, 40,], ['Jakarta Raya', 11, 54, 22, 66, 40,], ['Jawa Barat', 12, 44, 32, 12, 40,], ['Jawa Tengah', 13, 12, 65, 38, 40,],
        ['Jawa Timur', 14, 32, 76, 59, 40,], ['Sumatera Barat', 10, 12, 55, 77, 40,], ['Kalimantan Selatan', 11, 54, 22, 66, 40,], ['Sulawesi Selatan', 12, 44, 32, 12, 40,], ['Aceh', 13, 12, 65, 38, 40,],
        ['Bali', 14, 32, 76, 59, 40,]
        // const data = [
        //     ['id-3700', 10], ['id-ac', 11], ['id-jt', 12], ['id-be', 13],
        //     ['id-bt', 14], ['id-kb', 15], ['id-bb', 16], ['id-ba', 17],
        //     ['id-ji', 18], ['id-ks', 19], ['id-nt', 20], ['id-se', 21],
        //     ['id-kr', 22], ['id-ib', 23], ['id-su', 24], ['id-ri', 25],
        //     ['id-sw', 26], ['id-ku', 27], ['id-la', 28], ['id-sb', 29],
        //     ['id-ma', 30], ['id-nb', 31], ['id-sg', 32], ['id-st', 33],
        //     ['id-pa', 34], ['id-jr', 35], ['id-ki', 36], ['id-1024', 37],
        //     ['id-jk', 38], ['id-go', 39], ['id-yo', 40], ['id-sl', 41],
        //     ['id-sr', 42], ['id-ja', 43], ['id-kt', 44]
        // ];
    ];
    demColor = 'rgba(74,131,240,0.80)',
        repColor = 'rgba(220,71,71,0.80)',
        libColor = 'rgba(240,190,50,0.80)',
        grnColor = 'rgba(90,200,90,0.80)';


    // Compute max votes to find relative sizes of bubbles
    const maxVotes = data.reduce((max, row) => Math.max(max, row[5]), 0);

    // Build the chart
    const chart = Highcharts.mapChart('container', {

        chart: {
            animation: false
        },

        accessibility: {
            description: 'Complex map demo showing voting results for US ' +
                'states, where each state has a pie chart overlaid showing ' +
                'the vote distribution.'
        },

        colorAxis: {
            dataClasses: [{
                from: -1,
                to: 0,
                color: 'rgba(244,91,91,0.5)',
                name: 'Republican'
            }, {
                from: 0,
                to: 1,
                color: 'rgba(124,181,236,0.5)',
                name: 'Democrat'
            }, {
                from: 2,
                to: 3,
                name: 'Libertarian',
                color: libColor
            }, {
                from: 3,
                to: 4,
                name: 'Green',
                color: grnColor
            }]
        },

        mapNavigation: {
            enabled: true
        },

        title: {
            text: 'USA 2016 Presidential Election Results',
            align: 'left'
        },

        // Default options for the pies
        plotOptions: {
            pie: {
                borderColor: 'rgba(255,255,255,0.4)',
                borderWidth: 1,
                clip: true,
                dataLabels: {
                    enabled: false
                },
                states: {
                    hover: {
                        halo: {
                            size: 5
                        }
                    }
                },
                tooltip: {
                    headerFormat: ''
                }
            }
        },

        series: [{
            mapData,
            data: data,
            name: 'States',
            accessibility: {
                point: {
                    descriptionFormatter(point) {
                        const party = point.value > 0 ?
                            'democrat' : 'republican';
                        return point.name +
                            ', ' + party + '. Total votes: ' + point.sumVotes +
                            '. Democrat votes: ' + point.demVotes +
                            '. Republican votes: ' + point.repVotes +
                            '. Libertarian votes: ' + point.libVotes +
                            '. Green votes: ' + point.grnVotes + '.';
                    }
                }
            },
            borderColor: '#FFF',
            joinBy: ['name', 'id'],
            keys: [
                'id', 'demVotes', 'repVotes', 'libVotes', 'grnVotes',
                'sumVotes', 'value', 'pieOffset'
            ],
            tooltip: {
                headerFormat: '',
                pointFormatter() {
                    const hoverVotes = this.hoverVotes; // Used by pie only
                    return '<b>' + this.id + ' votes</b><br/>' +
                        [
                            ['Democrats', this.demVotes, demColor],
                            ['Republicans', this.repVotes, repColor],
                            ['Libertarians', this.libVotes, libColor],
                            ['Green', this.grnVotes, grnColor]
                        ]
                            .sort((a, b) => b[1] - a[1]) // Sort tooltip by
                            // most votes
                            .map(
                                line => '<span style="color:' + line[2] +
                                    // Colorized bullet
                                    '">\u25CF</span> ' +
                                    // Party and votes
                                    (line[0] === hoverVotes ? '<b>' : '') +
                                    line[0] + ': ' +
                                    Highcharts.numberFormat(line[1], 0) +
                                    (line[0] === hoverVotes ? '</b>' : '') +
                                    '<br/>'
                            )
                            .join('') +
                        '<hr/>Total: ' +
                        Highcharts.numberFormat(this.sumVotes, 0);
                }
            }
        }, {
            name: 'Connectors',
            type: 'mapline',
            color: 'rgba(130, 130, 130, 0.5)',
            zIndex: 5,
            showInLegend: false,
            enableMouseTracking: false,
            accessibility: {
                enabled: false
            }
        }]
    });

    // When clicking legend items, also toggle connectors and pies
    chart.legend.allItems.forEach(item => {
        const setVisible = item.setVisible;

        item.setVisible = function () {
            const item = this;

            setVisible.call(item);

            chart.series[0].points.forEach(point => {
                if (
                    chart.colorAxis[0].dataClasses[point.dataClass].name ===
                    item.name
                ) {
                    // Find this state's pie and set visibility
                    Highcharts.find(chart.series, function (item) {
                        return item.name === point.id;
                    }).setVisible(item.visible, false);

                    // Do the same for the connector point if it exists
                    const connector = Highcharts.find(
                        chart.series[2].points,
                        item => item.name === point.id
                    );

                    if (connector) {
                        connector.setVisible(item.visible, false);
                    }
                }
            });
            chart.redraw();
        };
    });

    // // Add the pies after chart load, optionally with offset and connectors
    // chart.series[0].points.forEach(state => {
    //     // Add the pie for this state
    //     chart.addSeries({
    //         type: 'pie',
    //         name: state.id,
    //         zIndex: 6, // Keep pies above connector lines
    //         minSize: 15,
    //         maxSize: 55,
    //         onPoint: {
    //             id: state.id,
    //             z: (() => {
    //                 const mapView = chart.mapView,
    //                     zoomFactor = mapView.zoom / mapView.minZoom;

    //                 return Math.max(
    //                     chart.chartWidth / 45 * zoomFactor, // Min size
    //                     chart.chartWidth /
    //                     11 * zoomFactor * state.sumVotes / maxVotes
    //                 );
    //             })()
    //         },
    //         states: {
    //             inactive: {
    //                 enabled: false
    //             }
    //         },
    //         accessibility: {
    //             enabled: false
    //         },
    //         tooltip: {
    //             // Use the state tooltip for the pies as well
    //             pointFormatter() {
    //                 return state.series.tooltipOptions.pointFormatter.call({
    //                     id: state.id,
    //                     hoverVotes: this.name,
    //                     demVotes: state.demVotes,
    //                     repVotes: state.repVotes,
    //                     libVotes: state.libVotes,
    //                     grnVotes: state.grnVotes,
    //                     sumVotes: state.sumVotes
    //                 });
    //             }
    //         },
    //         data: [{
    //             name: 'Democrats',
    //             y: state.demVotes,
    //             color: demColor
    //         }, {
    //             name: 'Republicans',
    //             y: state.repVotes,
    //             color: repColor
    //         }, {
    //             name: 'Libertarians',
    //             y: state.libVotes,
    //             color: libColor
    //         }, {
    //             name: 'Green',
    //             y: state.grnVotes,
    //             color: grnColor
    //         }]
    //     }, false);
    // });

    // // Only redraw once all pies and connectors have been added
    // chart.redraw();
})();
