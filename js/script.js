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
        hasil.innerHTML = "Silahkan Isi Kolom Input dengan Angka yang Valid"
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

    hasil.textContent = "BMI Untuk " + jenisKelamin + " dengan usia anda " + Usia + " Tahun " +
                        "\n" + status + "\n" + 
                        "\n" + BMI.toFixed(2) + "\n" +
                        "\n" + "Anda Memiliki" + " " + status + " " + "\n"

}

function reset(){
    window.location.reload()
}
