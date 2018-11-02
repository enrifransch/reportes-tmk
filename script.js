const XLSX = require('xlsx');
const fs = require('fs');
const f1 = 'KOOMKIN_JR_GRAL_26_10_18.xlsx'
const uuidv4 = require('uuid/v4');

const buf = fs.readFileSync(f1);
const wb = XLSX.read(buf, {type:'buffer'});

console.log(wb['E3605'])

// Parse a file
// const workSheetsFromFile = xlsx.parse(`./${f1}`);
// workSheetsFromFile[0].data[0] = workSheetsFromFile[0].data[0].push('id')
// const hoja1 = workSheetsFromFile[0];
// hoja1.data[0].push('id')

// for (let i = 1; i < hoja1.data.length; i++) {
//   hoja1.data[i].push(uuidv4())
// }

// workSheetsFromFile[0] = hoja1;


// const buffer = xlsx.build([{name: "KOOMKIN_JR_GRAL_26_10_18(2)", data: workSheetsFromFile}]); 

// fs.writeFile("KOOMKIN_JR_GRAL_26_10_18(2)", buffer, function(err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// }); 