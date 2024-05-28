// 1 Vazifa

// function promptForNumber() {
//     let number = prompt("Ixtiyoriy son kiriting:");
//     if (number !== null) {
//         number = number.trim();
//         if (!isNaN(number) && number !== "") {
//             let length = number.replace("-", "").length;
//             if (length <= 4) {
//                 alert("Son " + length + " xonali");
//             } else {
//                 alert("4 xonadan ortiq bo'lmagan son kiriting");
//             }
//         } else {
//             alert("To'g'ri son kiriting.");
//         }
//     }
// }

// promptForNumber()

// 2 Vazifa

// function promptForNumber() {
//     let number = prompt("Ixtiyoriy son kiriting:");
//     if (number !== null) {
//         number = number.trim();
//         if (!isNaN(number) && number !== "") {
//             let parsedNumber = parseInt(number, 10);
//             if (parsedNumber % 2 === 0) {
//                 alert("Son juft.");
//             } else {
//                 alert("Son toq.");
//             }
//         } else {
//             alert("To'g'ri son kiriting.");
//         }
//     }
// }

// promptForNumber()

// 3 Vazifa

// function promptForNumber() {
//     let number = prompt("Ixtiyoriy son kiriting:");
//     if (number !== null) {
//         number = number.trim();
//         if (!isNaN(number) && number !== "") {
//             let absNumber = Math.abs(parseInt(number, 10));
//             let length = absNumber.toString().length;
            
//             if (length <= 4) {
//                 let parity = (absNumber % 2 === 0) ? "juft" : "toq";
//                 alert("Son " + length + " xonalidir va " + parity + ".");
//             } else {
//                 alert("4 xonadan ortiq bo'lmagan son kiriting.");
//             }
//         } else {
//             alert("To'g'ri son kiriting.");
//         }
//     }
// }

// promptForNumber()

// 4 Vazifa

// function promptForThreeNumbers() {
//     let numbers = [];
//     for (let i = 0; i < 3; i++) {
//         let number = prompt((i + 1) + "-sonni kiriting:");
//         if (number !== null) {
//             number = number.trim();
//             if (!isNaN(number) && number !== "" && number.length === 1 && number >= 0 && number <= 9) {
//                 numbers.push(parseInt(number, 10));
//             } else {
//                 alert("0 dan 9 gacha bo'lgan bir xonali son kiriting.");
//                 return;
//             }
//         }
//     }

//     numbers.sort((a, b) => a - b);
//     let combinedNumber = numbers.join('');
//     alert(combinedNumber);
// }

// promptForThreeNumbers()

// 5 Vazifa 

// function promptForNumbers() {
//     let number = prompt("3 xonali son kiriting:");
//     if (number !== null) {
//         number = number.trim();
//         if (!isNaN(number) && number.length === 3) {
//             let digits = number.split('').map(Number);
//             let minDigit = Math.min(...digits);
//             alert("Eng kichigi: " + minDigit);
//         } else {
//             alert("Aniq 3 xonali son kiriting.");
//         }
//     }
// }

// promptForNumbers()

// 6 Vazifa 

// function promptForNumber() {
//     let number = prompt("3 xonali son kiriting:");
//     if (number !== null) {
//         number = number.trim();
//         if (!isNaN(number) && number.length === 3) {
//             let tenDigit = number.charAt(1);
//             alert(tenDigit);
//         } else {
//             alert("Aniq 3 xonali son kiriting.");
//         }
//     }
// }

// promptForNumber()

// 7 Vazifa 

// function tezlikTekshirish() {
//     let tezlik = prompt("Tezlikni kiriting:");

//     if (tezlik !== null) {
//         tezlik = parseFloat(tezlik.trim());

//         if (!isNaN(tezlik) && tezlik >= 0) {
//             const tezlikMiqdori = 70;
//             const kmuchunPoint = 5;

//             if (tezlik <= tezlikMiqdori) {
//                 console.log("Hammasi yaxshi");
//             } else {
//                 let point = Math.floor((tezlik - tezlikMiqdori) / kmuchunPoint);

//                 if (point > 12) {
//                     console.log("Prava olindi");
//                 } else {
//                     console.log("Pointlar soni: " + point);
//                 }
//             }
//         } else {
//             console.log("To'g'ri tezlik kiriting.");
//         }
//     }
// }

// tezlikTekshirish()

// 8 Vazifa 

//     function promptForYear() {
//     let tugilganYil = prompt("Tug'ilgan yilingizni kiriting:");
//     if (tugilganYil !== null) {
//         tugilganYil = tugilganYil.trim();
//         if (!isNaN(tugilganYil) && tugilganYil.length === 4) {
//             let joriyYil = new Date().getFullYear();
//             let yosh = joriyYil - parseInt(tugilganYil, 10);
//             alert("Sizning yoshingiz: " + yosh + " yosh.");
//         } else {
//             alert("4 xonali yilni kiriting.");
//         }
//     }
// }

// promptForYear()

// 9 Vazifa 

// function promptForNumber() {
//     let number = prompt("Bir ikki yoki uch xonali son kiriting:");
//     if (number !== null) {
//         number = number.trim();
//         if (!isNaN(number) && number !== "") {
//             let tahlilson = parseInt(number, 10);
//             let Number = Math.abs(tahlilson);
//             let length = Number.toString().length;
            
//             if (length >= 1 && length <= 3) {
//                 let tahlil = (tahlilson % 2 === 0) ? "juft" : "toq";
//                 let sign = (tahlilson >= 0) ? "musbat" : "manfiy";
//                 alert("Son " + length + " xonalidir, " + tahlil + " va " + sign);
//             } else {
//                 alert("Bir, ikki yoki uch xonali son kiriting.");
//             }
//         } else {
//             alert("To'g'ri son kiriting.");
//         }
//     }
// }

// promptForNumber()

// 10 Vazifa 

// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz ()

// Alisher masala 

// function miqdoriniTekshirish() {
//     let alisherPuli = prompt("Alisher, qancha pulingiz bor?");

//     if (alisherPuli !== null) {
//         alisherPuli = parseFloat(alisherPuli.trim());

//         if (!isNaN(alisherPuli) && alisherPuli > 0) {
//             const uchishDollar = 500;
//             const mehmonxonaDollar = 250;
//             const muzeyEuro = 120;
//             const dollarSum = 111000.34;
//             const euroSum = 12354.03;


//             const uchishNarxi = uchishDollar * dollarSum;
//             const mehmonxonaNarxi = mehmonxonaDollar * dollarSum;
//             const muzeykirishNarxi = muzeyEuro * euroSum;

//             const umumiy = uchishNarxi + mehmonxonaNarxi + muzeykirishNarxi;

//             if (alisherPuli >= umumiy) {
//                 console.log("Oq yo'l, Alisher!");
//             } else {
//                 console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
//             }
//         } else {
//             console.log("To'g'ri miqdorda pul kiriting.");
//         }
//     }
// }

// miqdoriniTekshirish()