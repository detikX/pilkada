// https://backend-dot-jagasuara.et.r.appspot.com/public/recap/prov/32/details jabar
// https://backend-dot-jagasuara.et.r.appspot.com/public/recap/prov/33/details jateng
// https://backend-dot-jagasuara.et.r.appspot.com/public/recap/prov/35/details jatim
// https://backend-dot-jagasuara.et.r.appspot.com/public/recap/prov/12/details sumut
$.ajax({
    url: 'https://backend-dot-jagasuara.et.r.appspot.com/public/recap/prov/31/details',
    type: 'GET',
    success: function (response) {
        console.log(response);

        var tgl = response.lastUpdate;
        // var progress = response.progres.progres;
        // var progresstotal = response.progres.total;
        // var progressnilai = progress / progresstotal * 100;
        // 2024-02-17 19:30:11
        // console.log(tgl);


        var shortDate = new Date(tgl)
        var sliceDate = tgl.slice(11, 19)
        console.log(sliceDate);
        var senin = shortDate.getDay();
        var getHari = shortDate.getDate();
        var getBulan = shortDate.getMonth() + 1;
        var getTahun = shortDate.getFullYear();

        var monthWording = {
            '1': 'Januari',
            '2': 'Februari',
            '3': 'Maret',
            '4': 'April',
            '5': 'Mei',
            '6': 'Juni',
            '7': 'Juli',
            '8': 'Agustus',
            '9': 'September',
            '10': 'Oktober',
            '11': 'November',
            '12': 'Desember',
        }

        var hariWording = {
            '1': 'Senin',
            '2': 'Selasa',
            '3': 'Rabu',
            '4': 'Kamis',
            '5': 'Jumat',
            '6': 'Sabtu',
            '0': 'Minggu'
        }

        // console.log(`${hariWording[senin]}, ${getHari} ${monthWording[getBulan]} ${getTahun}`)
        $("#harinya").text(`${hariWording[senin]}, ${getHari} ${monthWording[getBulan]} ${getTahun}`);
        $("#jam").text(sliceDate);

        // var hasName = (name === 'true') ? 'Y' :'N';

        $("#persenjkt").text(response.persentaseTps.toFixed(2) == 100.00 ? 100 : response.persentaseTps.toFixed(2));

        var chart = response.suaraPaslon;
        var cagubnamedki1 = Object.values(chart)[0].cakadaShort;
        var cawagubnamedki1 = Object.values(chart)[0].cawadaShort;
        var cagubnamedki2 = Object.values(chart)[1].cakadaShort;
        var cawagubnamedki2 = Object.values(chart)[1].cawadaShort;
        var cagubnamedki3 = Object.values(chart)[2].cakadaShort;
        var cawagubnamedki3 = Object.values(chart)[2].cawadaShort;



        var rk = Object.values(chart)[0].suara;
        var dharma = Object.values(chart)[1].suara;
        var pram = Object.values(chart)[2].suara;
        var totalx = rk + dharma + pram;

        var jumRk = rk / totalx * 100;
        var jumdhar = dharma / totalx * 100;
        var jumPram = pram / totalx * 100;

        var persenRk = jumRk.toFixed(2);
        var totalRK = rk.toLocaleString('id-ID');

        var persenDhar = jumdhar.toFixed(2);
        var totalDhar = dharma.toLocaleString('id-ID');

        var persenPram = jumPram.toFixed(2);
        var totalPram = pram.toLocaleString('id-ID')

        $("#dki-1 .suara").text(persenRk.toLocaleString('id-ID'))
        $("#dki-1 .smalls small").text(totalRK)
        $("#dki-1 .cagub").text(cagubnamedki1)
        $("#dki-1 .cawagub").text(cawagubnamedki1)

        $("#dki-2 .suara").text(persenDhar)
        $("#dki-2 .smalls small").text(totalDhar)
        $("#dki-2 .cagub").text(cagubnamedki2)
        $("#dki-2 .cawagub").text(cawagubnamedki2)

        $("#dki-3 .suara").text(persenPram)
        $("#dki-3 .smalls small").text(totalPram)
        $("#dki-3 .cagub").text(cagubnamedki3)
        $("#dki-3 .cawagub").text(cawagubnamedki3)



    }
})


// jateng
$.ajax({
    url: 'https://backend-dot-jagasuara.et.r.appspot.com/public/recap/prov/33/details',
    type: 'GET',
    success: function (response) {
        var tgl = response.lastUpdate;
        // var progress = response.progres.progres;
        // var progresstotal = response.progres.total;
        // var progressnilai = progress / progresstotal * 100;
        // 2024-02-17 19:30:11
        // console.log(tgl);


        var shortDate = new Date(tgl)
        var sliceDate = tgl.slice(11, 19)
        console.log(sliceDate);
        var senin = shortDate.getDay();
        var getHari = shortDate.getDate();
        var getBulan = shortDate.getMonth() + 1;
        var getTahun = shortDate.getFullYear();

        var monthWording = {
            '1': 'Januari',
            '2': 'Februari',
            '3': 'Maret',
            '4': 'April',
            '5': 'Mei',
            '6': 'Juni',
            '7': 'Juli',
            '8': 'Agustus',
            '9': 'September',
            '10': 'Oktober',
            '11': 'November',
            '12': 'Desember',
        }

        var hariWording = {
            '1': 'Senin',
            '2': 'Selasa',
            '3': 'Rabu',
            '4': 'Kamis',
            '5': 'Jumat',
            '6': 'Sabtu',
            '0': 'Minggu'
        }

        // console.log(`${hariWording[senin]}, ${getHari} ${monthWording[getBulan]} ${getTahun}`)
        $("#harinya-jateng").text(`${hariWording[senin]}, ${getHari} ${monthWording[getBulan]} ${getTahun}`);
        $("#jam-jateng").text(sliceDate);
        $("#persenjateng").text(response.persentaseTps.toFixed(2) == 100.00 ? 100 : response.persentaseTps.toFixed(2));

        var chart = response.suaraPaslon;
        var cagubnamejateng1 = Object.values(chart)[0].cakadaShort;
        var cawagubnamejateng1 = Object.values(chart)[0].cawadaShort;
        var cagubnamejateng2 = Object.values(chart)[1].cakadaShort;
        var cawagubnamejateng2 = Object.values(chart)[1].cawadaShort;



        var paslon1 = Object.values(chart)[0].suara;
        var dharma = Object.values(chart)[1].suara;
        // var pram = Object.values(chart)[2].suara;
        var totalx = paslon1 + dharma;

        var jumpaslon1 = paslon1 / totalx * 100;
        var jumdhar = dharma / totalx * 100;
        // var jumPram = pram / totalx * 100;

        var persenpaslon1 = jumpaslon1.toFixed(2);
        var totalpaslon1 = paslon1.toLocaleString('id-ID');

        var persenDhar = jumdhar.toFixed(2);
        var totalDhar = dharma.toLocaleString('id-ID');

        // var persenPram = jumPram.toFixed(2);
        // var totalPram = pram.toLocaleString('id-ID')

        $("#jateng-1 .suara").text(persenpaslon1.toLocaleString('id-ID'))
        $("#jateng-1 .smalls small").text(totalpaslon1)
        $("#jateng-1 .cagub").text(cagubnamejateng1)
        $("#jateng-1 .cawagub").text(cawagubnamejateng1)

        $("#jateng-2 .suara").text(persenDhar)
        $("#jateng-2 .smalls small").text(totalDhar)
        $("#jateng-2 .cagub").text(cagubnamejateng2)
        $("#jateng-2 .cawagub").text(cawagubnamejateng2)




    }
})

//sumut
$.ajax({
    url: 'https://backend-dot-jagasuara.et.r.appspot.com/public/recap/prov/12/details',
    type: 'GET',
    success: function (response) {
        var tgl = response.lastUpdate;
        // var progress = response.progres.progres;
        // var progresstotal = response.progres.total;
        // var progressnilai = progress / progresstotal * 100;
        // 2024-02-17 19:30:11
        // console.log(tgl);


        var shortDate = new Date(tgl)
        var sliceDate = tgl.slice(11, 19)
        console.log(sliceDate);
        var senin = shortDate.getDay();
        var getHari = shortDate.getDate();
        var getBulan = shortDate.getMonth() + 1;
        var getTahun = shortDate.getFullYear();

        var monthWording = {
            '1': 'Januari',
            '2': 'Februari',
            '3': 'Maret',
            '4': 'April',
            '5': 'Mei',
            '6': 'Juni',
            '7': 'Juli',
            '8': 'Agustus',
            '9': 'September',
            '10': 'Oktober',
            '11': 'November',
            '12': 'Desember',
        }

        var hariWording = {
            '1': 'Senin',
            '2': 'Selasa',
            '3': 'Rabu',
            '4': 'Kamis',
            '5': 'Jumat',
            '6': 'Sabtu',
            '0': 'Minggu'
        }

        // console.log(`${hariWording[senin]}, ${getHari} ${monthWording[getBulan]} ${getTahun}`)
        $("#harinya-sumut").text(`${hariWording[senin]}, ${getHari} ${monthWording[getBulan]} ${getTahun}`);
        $("#jam-sumut").text(sliceDate);
        $("#persensumut").text(response.persentaseTps.toFixed(2) == 100.00 ? 100 : response.persentaseTps.toFixed(2));

        var chart = response.suaraPaslon;
        var cagubnamejateng1 = Object.values(chart)[0].cakadaShort;
        var cawagubnamejateng1 = Object.values(chart)[0].cawadaShort;
        var cagubnamejateng2 = Object.values(chart)[1].cakadaShort;
        var cawagubnamejateng2 = Object.values(chart)[1].cawadaShort;



        var paslon1 = Object.values(chart)[0].suara;
        var dharma = Object.values(chart)[1].suara;
        // var pram = Object.values(chart)[2].suara;
        var totalx = paslon1 + dharma;

        var jumpaslon1 = paslon1 / totalx * 100;
        var jumdhar = dharma / totalx * 100;
        // var jumPram = pram / totalx * 100;

        var persenpaslon1 = jumpaslon1.toFixed(2);
        var totalpaslon1 = paslon1.toLocaleString('id-ID');

        var persenDhar = jumdhar.toFixed(2);
        var totalDhar = dharma.toLocaleString('id-ID');

        // var persenPram = jumPram.toFixed(2);
        // var totalPram = pram.toLocaleString('id-ID')

        $("#sumut-1 .suara").text(persenpaslon1.toLocaleString('id-ID'))
        $("#sumut-1 .smalls small").text(totalpaslon1)
        $("#sumut-1 .cagub").text(cagubnamejateng1)
        $("#sumut-1 .cawagub").text(cawagubnamejateng1)

        $("#sumut-2 .suara").text(persenDhar)
        $("#sumut-2 .smalls small").text(totalDhar)
        $("#sumut-2 .cagub").text(cagubnamejateng2)
        $("#sumut-2 .cawagub").text(cawagubnamejateng2)




    }
})


//jabar
$.ajax({
    url: 'https://backend-dot-jagasuara.et.r.appspot.com/public/recap/prov/32/details',
    type: 'GET',
    success: function (response) {
        var tgl = response.lastUpdate;
        // var progress = response.progres.progres;
        // var progresstotal = response.progres.total;
        // var progressnilai = progress / progresstotal * 100;
        // 2024-02-17 19:30:11
        // console.log(tgl);


        var shortDate = new Date(tgl)
        var sliceDate = tgl.slice(11, 19)
        console.log(sliceDate);
        var senin = shortDate.getDay();
        var getHari = shortDate.getDate();
        var getBulan = shortDate.getMonth() + 1;
        var getTahun = shortDate.getFullYear();

        var monthWording = {
            '1': 'Januari',
            '2': 'Februari',
            '3': 'Maret',
            '4': 'April',
            '5': 'Mei',
            '6': 'Juni',
            '7': 'Juli',
            '8': 'Agustus',
            '9': 'September',
            '10': 'Oktober',
            '11': 'November',
            '12': 'Desember',
        }

        var hariWording = {
            '1': 'Senin',
            '2': 'Selasa',
            '3': 'Rabu',
            '4': 'Kamis',
            '5': 'Jumat',
            '6': 'Sabtu',
            '0': 'Minggu'
        }

        // console.log(`${hariWording[senin]}, ${getHari} ${monthWording[getBulan]} ${getTahun}`)
        $("#harinya-jabar").text(`${hariWording[senin]}, ${getHari} ${monthWording[getBulan]} ${getTahun}`);
        $("#jam-jabar").text(sliceDate);
        $("#persenjabar").text(response.persentaseTps.toFixed(2) == 100.00 ? 100 : response.persentaseTps.toFixed(2));

        var chart = response.suaraPaslon;
        var cagubnamejateng1 = Object.values(chart)[0].cakadaShort;
        var cawagubnamejateng1 = Object.values(chart)[0].cawadaShort;
        var cagubnamejateng2 = Object.values(chart)[1].cakadaShort;
        var cawagubnamejateng2 = Object.values(chart)[1].cawadaShort;
        var cagubnamejateng3 = Object.values(chart)[2].cakadaShort;
        var cawagubnamejateng3 = Object.values(chart)[2].cawadaShort;
        var cagubnamejateng4 = Object.values(chart)[3].cakadaShort;
        var cawagubnamejateng4 = Object.values(chart)[3].cawadaShort;



        var paslon1 = Object.values(chart)[0].suara;
        var dharma = Object.values(chart)[1].suara;
        var paslon11 = Object.values(chart)[2].suara;
        var dharma1 = Object.values(chart)[3].suara;
        // var pram = Object.values(chart)[2].suara;
        var totalx = paslon1 + dharma + paslon11 + dharma1;

        var jumpaslon1 = paslon1 / totalx * 100;
        var jumdhar = dharma / totalx * 100;
        var jumpaslon11 = paslon11 / totalx * 100;
        var jumdhar1 = dharma1 / totalx * 100;
        // var jumPram = pram / totalx * 100;

        var persenpaslon1 = jumpaslon1.toFixed(2);
        var totalpaslon1 = paslon1.toLocaleString('id-ID');

        var persenDhar = jumdhar.toFixed(2);
        var totalDhar = dharma.toLocaleString('id-ID');

        var persenpaslon11 = jumpaslon11.toFixed(2);
        var totalpaslon11 = paslon11.toLocaleString('id-ID');

        var persenDhar1 = jumdhar1.toFixed(2);
        var totalDhar1 = dharma1.toLocaleString('id-ID');

        // var persenPram = jumPram.toFixed(2);
        // var totalPram = pram.toLocaleString('id-ID')

        $("#jabar-1 .suara").text(persenpaslon1.toLocaleString('id-ID'))
        $("#jabar-1 .smalls small").text(totalpaslon1)
        $("#jabar-1 .cagub").text(cagubnamejateng1)
        $("#jabar-1 .cawagub").text(cawagubnamejateng1)

        $("#jabar-2 .suara").text(persenDhar)
        $("#jabar-2 .smalls small").text(totalDhar)
        $("#jabar-2 .cagub").text(cagubnamejateng2)
        $("#jabar-2 .cawagub").text(cawagubnamejateng2)

        $("#jabar-3 .suara").text(persenpaslon11.toLocaleString('id-ID'))
        $("#jabar-3 .smalls small").text(totalpaslon11)
        $("#jabar-3 .cagub").text(cagubnamejateng3)
        $("#jabar-3 .cawagub").text(cawagubnamejateng3)

        $("#jabar-4 .suara").text(persenDhar1)
        $("#jabar-4 .smalls small").text(totalDhar1)
        $("#jabar-4 .cagub").text(cagubnamejateng4)
        $("#jabar-4 .cawagub").text(cawagubnamejateng4)




    }
})


//jatim
$.ajax({
    url: 'https://backend-dot-jagasuara.et.r.appspot.com/public/recap/prov/35/details',
    type: 'GET',
    success: function (response) {
        var tgl = response.lastUpdate;
        // var progress = response.progres.progres;
        // var progresstotal = response.progres.total;
        // var progressnilai = progress / progresstotal * 100;
        // 2024-02-17 19:30:11
        // console.log(tgl);


        var shortDate = new Date(tgl)
        var sliceDate = tgl.slice(11, 19)
        console.log(sliceDate);
        var senin = shortDate.getDay();
        var getHari = shortDate.getDate();
        var getBulan = shortDate.getMonth() + 1;
        var getTahun = shortDate.getFullYear();

        var monthWording = {
            '1': 'Januari',
            '2': 'Februari',
            '3': 'Maret',
            '4': 'April',
            '5': 'Mei',
            '6': 'Juni',
            '7': 'Juli',
            '8': 'Agustus',
            '9': 'September',
            '10': 'Oktober',
            '11': 'November',
            '12': 'Desember',
        }

        var hariWording = {
            '1': 'Senin',
            '2': 'Selasa',
            '3': 'Rabu',
            '4': 'Kamis',
            '5': 'Jumat',
            '6': 'Sabtu',
            '0': 'Minggu'
        }

        // console.log(`${hariWording[senin]}, ${getHari} ${monthWording[getBulan]} ${getTahun}`)
        $("#harinya-jatim").text(`${hariWording[senin]}, ${getHari} ${monthWording[getBulan]} ${getTahun}`);
        $("#jam-jatim").text(sliceDate);
        $("#persenjatim").text(response.persentaseTps.toFixed(2) == 100.00 ? 100 : response.persentaseTps.toFixed(2));

        var chart = response.suaraPaslon;
        var cagubnamejateng1 = Object.values(chart)[0].cakadaShort;
        var cawagubnamejateng1 = Object.values(chart)[0].cawadaShort;
        var cagubnamejateng2 = Object.values(chart)[1].cakadaShort;
        var cawagubnamejateng2 = Object.values(chart)[1].cawadaShort;
        var cagubnamejateng3 = Object.values(chart)[2].cakadaShort;
        var cawagubnamejateng3 = Object.values(chart)[2].cawadaShort;



        var paslon1 = Object.values(chart)[0].suara;
        var dharma = Object.values(chart)[1].suara;
        var paslon11 = Object.values(chart)[2].suara;
        // var pram = Object.values(chart)[2].suara;
        var totalx = paslon1 + dharma + paslon11;

        var jumpaslon1 = paslon1 / totalx * 100;
        var jumdhar = dharma / totalx * 100;
        var jumpaslon11 = paslon11 / totalx * 100;
        // var jumPram = pram / totalx * 100;

        var persenpaslon1 = jumpaslon1.toFixed(2);
        var totalpaslon1 = paslon1.toLocaleString('id-ID');

        var persenDhar = jumdhar.toFixed(2);
        var totalDhar = dharma.toLocaleString('id-ID');

        var persenpaslon11 = jumpaslon11.toFixed(2);
        var totalpaslon11 = paslon11.toLocaleString('id-ID');


        // var persenPram = jumPram.toFixed(2);
        // var totalPram = pram.toLocaleString('id-ID')

        $("#jatim-1 .suara").text(persenpaslon1.toLocaleString('id-ID'))
        $("#jatim-1 .smalls small").text(totalpaslon1)
        $("#jatim-1 .cagub").text(cagubnamejateng1)
        $("#jatim-1 .cawagub").text(cawagubnamejateng1)

        $("#jatim-2 .suara").text(persenDhar)
        $("#jatim-2 .smalls small").text(totalDhar)
        $("#jatim-2 .cagub").text(cagubnamejateng2)
        $("#jatim-2 .cawagub").text(cawagubnamejateng2)

        $("#jatim-3 .suara").text(persenpaslon11.toLocaleString('id-ID'))
        $("#jatim-3 .smalls small").text(totalpaslon11)
        $("#jatim-3 .cagub").text(cagubnamejateng3)
        $("#jatim-3 .cawagub").text(cawagubnamejateng3)




    }
})