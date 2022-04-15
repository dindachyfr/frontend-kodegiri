const deretAngka = () => {
    for(let angka=50; angka<101; angka+=5){
        if(angka<=60){
            console.log(`${angka} KURANG`);
        }
        if(angka<=70 && angka>60){
            console.log(`${angka} CUKUP`);
        }
        if(angka<=80 && angka>70){
            console.log(`${angka} BAIK`);
        }
        if(angka>80){
            console.log(`${angka} LUAR BIASA`);
        }
    }
}
deretAngka()

const fibonacci = () => {
    let a = 1
    let b = 0
    let temp
    let num = 20
    let array = [0]
    while (num > 1) {
        temp = a;
        a = a + b;
        b = temp;
        array.push(b)
        num--;
    }

    return array;
}
console.log(fibonacci())

const triangle = (triangleLength) => {
    let string = "";
    if (typeof (triangleLength) != "number") {
        console.log("Data harus angka")
    }
    else {
        for (let i = 1; i <= triangleLength; i++) {
            for (let j = 0; j < i; j++) {
                string += "*";
            }
            if(i<triangleLength){
                string += "\n";
            }
        }
        return string
    }
}
console.log(triangle(7));

const bacaAngka = (angka) => {
    const satuan = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];

    if (typeof angka !== "number") {
        console.log("Masukkan hanya format angka!");
    }
    else {
        if (angka < 12) {
            return satuan[angka];

        } else if (angka < 20) {

            return bacaAngka(angka - 10) + " belas";

        } else if (angka < 100) {

            return bacaAngka(Math.floor(parseInt(angka) / 10)) + " puluh " + bacaAngka(parseInt(angka) % 10);

        } else if (angka < 200) {

            return "seratus " + bacaAngka(parseInt(angka) - 100);

        } else if (angka < 1000) {

            return bacaAngka(Math.floor(parseInt(angka) / 100)) + " ratus " + bacaAngka(parseInt(angka) % 100);

        } else if (angka < 10000 && angka > 2000) {

            return bacaAngka(Math.floor(parseInt(angka) / 1000)) + " ribu " + bacaAngka(parseInt(angka) % 1000);
        }
        else {
            return `Masukkan angka di atas 2000!`
        }
    }
}

console.log(bacaAngka(3456));