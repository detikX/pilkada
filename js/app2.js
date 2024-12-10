/*$(function () {
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
    var data = [
        {
            "hc-key": "id-ac",
            "value": 0,
            // flag: '_England',
            data: [10, 15, 17, 20,]
        },
        {
            "hc-key": "id-jr",
            "value": 1,
            // flag: '_England',
            data: [30, 20, 27, 30]
        },
        {
            "hc-key": "id-kt",
            "value": 3,
            // flag: '_England',
            data: [25, 36, 99, 45]
        },
        {
            "hc-key": "id-kb",
            "value": 2,
            // flag: '_England',
            data: [55, 76, 26, 13]
        },
        {
            "hc-key": "id-sr",
            "value": 4,
            // flag: '_England',
            data: [30, 65, 13, 29,]
        },
        {
            "hc-key": "id-jk",
            "value": 5,
            // flag: '_England',
            data: [110, 21, 78, 35]
        },
        {
            "hc-key": "id-ki",
            "value": 6,
            // flag: '_England',
            data: [67, 44, 76, 92]
        },
        {
            "hc-key": "id-pa",
            "value": 7,
            // flag: '_England',
            data: [2, 12, 10, 38]
        }
    ],
        mapChart,
        countryChart,
        categories = ['Gerindra', 'PDIP', 'Demokrat', 'Golkar']

    var mapData = Highcharts.geojson(Highcharts.maps['countries/id/id-all']);

    Highcharts.wrap(Highcharts.Point.prototype, 'select', function (proceed) {
        proceed.apply(this, Array.prototype.slice.call(arguments, 1));
        var points = mapChart.getSelectedPoints();
        if (points.length) {
            if (points.length === 1) {
                // $('#info #flag').attr('class', 'flag ' + points[0].flag);
                $('#info h2').html(points[0].name);
            } else {
                // $('#info #flag').attr('class', 'flag');
                $('#info h2').html('Perbandingan Suara');
            }
            $('#info .subheader').html('<h4>Jumlah Suara</h4><small><em>Shift + Click on map to compare countries</em></small>');
            if (!countryChart) {
                countryChart = $('#country-chart').highcharts({
                    chart: {
                        height: 250,
                        spacingLeft: 0
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    legend: { enabled: false },
                    subtitle: {
                        text: null
                    },
                    xAxis: {
                        tickPixelInterval: 50,
                        crosshair: true,
                        categories: categories
                    },
                    yAxis: {
                        title: null,
                        opposite: true
                    },
                    tooltip: {
                        shared: true
                    },
                    plotOptions: {
                        series: {
                            threshold: 0,
                        }
                    }
                }).highcharts();
            }
            $.each(points, function (i) {
                if (countryChart.series[i]) {
                    countryChart.series[i].update({
                        name: this.name,
                        data: this.data,
                        type: points.length > 1 ? 'line' : 'area'
                    }, false);
                } else {
                    countryChart.addSeries({
                        name: this.name,
                        data: this.data,
                        type: points.length > 1 ? 'line' : 'area'
                    }, false);
                }
            });
            while (countryChart.series.length > points.length) {
                countryChart.series[countryChart.series.length - 1].remove(false);
            }
            countryChart.redraw();
        } else {
            //   $('#info #flag').attr('class', '');
            $('#info h2').html('');
            $('#info .subheader').html('');
            if (countryChart) {
                countryChart = countryChart.destroy();
            }
        }
    });
    mapChart = $('#container').highcharts('Map', {

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        colorAxis: {
            min: 0,
            max: 100
        },
        series: [{
            data: data,
            mapData: mapData,
            joinBy: 'hc-key',
            allowPointSelect: true,
            cursor: 'pointer',
            states: {
                select: {
                    color: '#a4edba',
                    borderColor: 'black',
                }
            }
        }]
    }).highcharts();

    // mapChart.get('id-ac').select();
}); */


$('.click-tv').click(function () {
    var buttonId = $(this).attr('id');
    // var name = $(this).attr('data-id')
    // alert(1)
    $(this).parent().parent().parent().parent().find('#modal-container').removeAttr('class').addClass(buttonId);
    // $('#modal-container').removeAttr('class').addClass(buttonId);
    // $(this).parent().parent().parent().parent().parent().children('#modal-container').children().children().children().children('.nama-paslon').text(name)
    $(".dalang").append()
    $('main').addClass('modal-active');
})

$('.closex,.tutup-bawah').click(function () {
    $(this).parent().parent().parent().parent().addClass('out');
    $('main').removeClass('modal-active');
});

$('.closex,.tutup-bawah').click(function () {
    $(this).parent().parent().parent().addClass('out');
    $('main').removeClass('modal-active');
});



// $(window).scroll(function () {
//     var scrollDistance = $(window).scrollTop();

//     // Show/hide menu on scroll
//     //if (scrollDistance >= 850) {
//     //		$('nav').fadeIn("fast");
//     //} else {
//     //		$('nav').fadeOut("fast");
//     //}

//     // Assign active class to nav links while scolling
//     $('.prov').each(function (i) {
//         if ($(this).position().top <= scrollDistance) {
//             $('.navigation a.active').removeClass('active');
//             $('.navigation a').eq(i).addClass('active');
//         }
//     });
// }).scroll();




$(document).ready(function () {
    // $('.navigation a').bind('click', function (e) {
    //     e.preventDefault(); // prevent hard jump, the default behavior
    //     // $(this).addClass('active');
    //     // $('a').removeClass("active");
    //     // console.log(e.target);


    //     var target = $(this).attr("href"); // Set the target as variable

    //     // perform animated scrolling by getting top-position of target-element and set it as scroll target
    //     $('html, body').stop().animate({
    //         scrollTop: $(target).offset().top - 90
    //     }, 600, function () {
    //         // location.hash = target; //attach the hash (#jumptarget) to the pageurl
    //     });
    //     // $().removeClass('active');

    //     return false;
    // });


    // $(".container p, .container blockquote, .container h1, .container h3, .container span, .body_text p").attr({ "data-aos": "fade-up", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })
    // $(".wrap-detikx .foto").attr({ "data-aos": "fade-in", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })

    // $(".wrap-detikx p").attr({ "data-aos": "fade-in", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })

    // $(".wrap-detikx .prov__title").attr({ "data-aos": "fade-down", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })
    // setTimeout(function () {
    //     AOS.init()
    // }, 500);
});


$('.wrap-detikxdd').slick({
    adaptiveHeight: true,
    fade: true,
});

// $('.slick-arrow').click(function () {
//     $(".wrap-detikxdd").animate({ scrollTop: 0 }, "fast");
// })

// $('.wrap-detikxdd').on('afterChange', function (event, slick, currentSlide, nextSlide) {
//     setTimeout(() => {
//         $(".modal").animate({
//             scrollTop: 0
//         }, "1000");

//     }, 1000);
// });



// function showTab(index) {
//     // Get all tab buttons and tab content elements
//     const buttons = document.querySelectorAll('.tab-button');
//     const contents = document.querySelectorAll('.tab-content');

//     // Remove 'active' class from all buttons and contents
//     buttons.forEach(button => button.classList.remove('active'));
//     contents.forEach(content => content.classList.remove('active'));

//     // Add 'active' class to the clicked button and the corresponding content
//     buttons[index].classList.add('active');
//     contents[index].classList.add('active');
// }

$(".controls .btn").click(function () {
    const test = document.querySelector('.modal');
    const modalContent = document.querySelector('.dalang');
    modalContent.scrollTo({ top: -50, behavior: 'smooth' });
    test.scrollTo({ top: -50, behavior: 'smooth' });

})
let currentStep = 1;

// Function to change the step
function changeStep(stepChange) {
    const totalSteps = 5;
    currentStep += stepChange;

    // Ensure currentStep stays within bounds
    if (currentStep < 1) {
        currentStep = 1;
    } else if (currentStep > totalSteps) {
        currentStep = totalSteps;
    }

    // Update the active step indicator
    updateStepIndicators();
    // Show the correct content
    updateContent();
    // Enable/Disable buttons based on the current step
    updateButtons();
}

// Function to update the step indicators
function updateStepIndicators() {
    for (let i = 1; i <= 5; i++) {
        const step = document.getElementById('step' + i);
        if (i < currentStep) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (i === currentStep) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    }
}

// Function to update the content based on the current step
function updateContent() {
    for (let i = 1; i <= 5; i++) {
        const content = document.getElementById('content' + i);
        content.classList.remove('active');
    }
    document.getElementById('content' + currentStep).classList.add('active');
}

// Function to enable/disable buttons based on the current step
function updateButtons() {
    if (currentStep === 1) {
        document.getElementById('prevBtn').disabled = true;
    } else if (currentStep === 5) {
        // document.getElementById('nextBtn').disabled = true;
        document.getElementById('nextBtn').classList.add('thanks').text("selesai");
    } else {
        document.getElementById('prevBtn').disabled = false;
        document.getElementById('nextBtn').disabled = false;
    }
}

// Initial setup
updateButtons();



// function scrollToTop() {
//     const modalContent = document.querySelector('.modal');
//     modalContent.scrollTo({ top: 0, behavior: 'smooth' });
// }