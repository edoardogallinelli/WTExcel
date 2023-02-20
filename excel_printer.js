const moment = require('moment');
const xlsx = require('xlsx');
module.exports = async function (name, data, isMultiSheet = false) {
    console.log('INIZIO JSON2XLS');
    console.log('NUMERO RIGHE ' + data.length);
    var wb = xlsx.utils.book_new();

    if (!isMultiSheet) {
        var newWS = xlsx.utils.json_to_sheet(data);
        var wscols = [
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 },
            { wch: 10 }
        ];

        newWS['!cols'] = wscols;

        xlsx.utils.book_append_sheet(wb, newWS, 'Export');
    } else {
        for (let key in data) {
            let newWS = xlsx.utils.json_to_sheet(data[key]);
            let wscols = [
                { wch: 10 },
                { wch: 10 },
                { wch: 10 },
                { wch: 10 },
                { wch: 10 },
                { wch: 10 },
                { wch: 10 },
                { wch: 10 },
                { wch: 10 },
                { wch: 10 },
                { wch: 10 },
                { wch: 10 },
                { wch: 10 },
                { wch: 10 },
                { wch: 10 },
                { wch: 10 }
            ];

            newWS['!cols'] = wscols;

            xlsx.utils.book_append_sheet(wb, newWS, key);
        }
    }

    //workbook name as param



    console.log('CONVERTED');
    const time = moment().format('DDMMYYYY_h-mm-ss');
    console.log('INIZIO WRITEFILE');
    await xlsx.writeFile(wb, './exports/' + time + name + '.xlsx');
    console.log('FINE WRITEFILE');
    return '/exports/' + time + name + '.xlsx';
};