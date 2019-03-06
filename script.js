
const f1 = 'Base0306'
const uuidv4 = require('uuid/v4');
const Excel = require('exceljs');

addId(f1);

function addId(filename) {
    const workbook = new Excel.Workbook();
    workbook.xlsx.readFile(filename + '.xlsx').then(wb => {
        const sheet = wb.getWorksheet('Hoja1')
        const count = sheet.rowCount;
        const columns = sheet.columns;
        const idCol = sheet.getColumn(13);
        idCol.values = uuids(count);
        idCol.header = 'uuid'
        wb.xlsx.writeFile(filename + '_uuid.xlsx').then(() => {
            console.log('Success 🌝');
        });
    });
}

function uuids(n) {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = uuidv4();
    }
    return arr;
}
