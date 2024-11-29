$.ajax({
    url: 'https://raw.githubusercontent.com/razanfawwaz/pilkada-scrap/refs/heads/main/pkwkp/0.json',
    method: 'GET',
    success: function (response) {
        // var chart = response.ts;
        var toObj = JSON.parse(response);
        var tgl = toObj.ts;
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
        var chart = toObj.tungsura;
        var toObjFirst = Object.values(chart)[1][31];
        var rk = Object.values(toObjFirst)[0];
        var dharma = Object.values(toObjFirst)[1];
        var pram = Object.values(toObjFirst)[2];
        var totalx = rk + dharma + pram;

        var jumRk = rk / totalx * 100;
        var jumdhar = dharma / totalx * 100;
        var jumPram = pram / totalx * 100;

        var persenRk = jumRk.toFixed(2);
        var totalRK = rk.toLocaleString('id-ID');

        var persenDhar = jumdhar.toFixed(2);
        var totalDhar = dharma.toLocaleString('id-ID');

        var persenPram = jumPram.toFixed(2);
        var totalPram = pram.toLocaleString('id-ID');

        $("#dki-1 .suara").text(persenRk.toLocaleString('id-ID'))
        $("#dki-1 .smalls small").text(totalRK)

        $("#dki-2 .suara").text(persenDhar)
        $("#dki-2 .smalls small").text(totalDhar)

        $("#dki-3 .suara").text(persenPram)
        $("#dki-3 .smalls small").text(totalPram)


    }
})