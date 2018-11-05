
const f1 = 'KOOMKIN_JR_GRAL_26_10_18'
const f2 = 'KOOMKIN_SEMIMASTER_26_10.xlsx'
const uuidv4 = require('uuid/v4');
const Excel = require('exceljs');
const tp = require('tedious-promises');
const dbConfig = require('./conf.json');
const TYPES = require('tedious').TYPES;
tp.setConnectionConfig(dbConfig); // global scope

tp.sql('select top 10 * from catusuario')
.execute()
.then(console.log)
.catch(console.error)

// addId(f1);
// addId(f2);

function addId(filename) {
    const workbook = new Excel.Workbook();
    workbook.xlsx.readFile(filename + '.xlsx').then(wb => {
        const sheet = wb.getWorksheet('Hoja1') 
        const count = sheet.rowCount;
        const columns = sheet.columns;
        const idCol = sheet.getColumn(13);
        idCol.values = uuids(count);
        idCol.header = 'uuid' 
        wb.xlsx.writeFile(filename + '_uuid.xlsx').then(res => {
            console.log(res)
        })
    })
}

function uuids(n) {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = uuidv4();
    }
    return arr;
}
    