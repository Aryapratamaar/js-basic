//inisiasi variable
let vehicle;
let duration;
let totalPrice_final = 0;


function totalPrice (vehicle, duration){
    let totalPrice_car = 5000;
    let totalPrice_bike = 2000;

    //cek tipe kendaraan
    if(vehicle === "car"){
        //cek apakah durasi parkir lebih dari 24 jam
        if(duration > 24){
            totalPrice_car = totalPrice_car + 50000;
        }

        //perulangan untuk menghitung total biaya parkir mobil
        for(let i = 1; i <= (duration - 1); i++){
            totalPrice_car = totalPrice_car + 3000;
            // console.log(i);
            // console.log(totalPrice_car);
        }

        //menampung biaya akhir
        totalPrice_final = totalPrice_car;
    }
    else{
        //cek apakah durasi parkir lebih dari 24 jam
        if(duration > 24){
            totalPrice_bike = totalPrice_bike + 20000;
        }
        //perulangan untuk menghitung total biaya parkir motor
        for(let i = 1; i <= (duration - 1); i++){
            totalPrice_bike = totalPrice_bike + 1000;
        }
        //menampung biaya akhir
        totalPrice_final = totalPrice_bike;
    }
    return totalPrice_final;
}

//case 1
totalPrice("car",3);
console.log("Total Biaya Yang Harus Dibayarkan : Rp ",totalPrice_final);
// //case 2
totalPrice("bike",1);
console.log("Total Biaya Yang Harus Dibayarkan : Rp ",totalPrice_final);
//case 3
totalPrice("car",27);
console.log("Total Biaya Yang Harus Dibayarkan : Rp ",totalPrice_final);
