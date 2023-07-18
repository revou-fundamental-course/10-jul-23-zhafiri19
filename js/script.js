function calculateBMI(){

    var jenisKelamin = document.querySelector('input[name = "JK"]:checked').value
    var beratBadan  = document.getElementById("BB")
    var usia = document.getElementById("Usia")
    var tinggiBadan = document.getElementById("TB")
    var hasil = document.getElementById("hasil")

    var BB = parseFloat(beratBadan.value)
    var Usia = (usia.value)
    var TB = parseFloat(tinggiBadan.value)

    if(BB === '' || Usia === '' || TB === ''){
        hasil.innerHTML = "Silahkan Isi Kolom Input"
        return
    }

    var BMI = BB / ((TB / 100) ** 2)
    var status = "";

    if(BMI < 18.5){
        status = "Kekurangan Berat Badan"
    }else if(BMI >= 18.5 && BMI <= 24.9){
        status = "Berat Badan Normal (ideal)"
    }else if(BMI >= 25 && BMI <= 29.9){
        status = "Kelebihan Berat Badan"
    }else{
        status = "Berat Badan Kegemukan (Obesitas)"
    }

    hasil.innerHTML = "BMI Untuk " + jenisKelamin + " dengan usia anda " + Usia + " Tahun " +
                        "<p>" + status + "</p>" + 
                        "<p>" + BMI.toFixed(2) + "</p>" +
                        "<p>" + "Anda Memiliki" + " " + status + " " + "</p>"

}

function reset(){
    window.location.reload()
}