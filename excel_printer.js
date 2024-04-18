const moment = require('moment');
const xlsx = require('sheetjs-style');
const validator = require('./tracksValidator')
module.exports = async function (name, data, isMultiSheet = false) {
    console.log('INIZIO JSON2XLS');
    console.log('NUMERO RIGHE ' + data.length);
    var wb = xlsx.utils.book_new();
    let checkedTracks = await validator(data)
    if (!isMultiSheet) {
        var newWS = xlsx.utils.json_to_sheet(checkedTracks);
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
            console.log(newWS);
            let regex = /.+?(?=<-)/g
            let style = { fill: { fgColor: { rgb: "eb2409" } }, font: { bold: true, color: { rgb: "FFFFFF" } } }
            if (newWS.A1) {
                for (let cell of Object.entries(newWS)) {
                    console.log(`${JSON.stringify(cell[1].stringify)}, cell before edit`);
                    if (cell[1].v && cell[1].v.includes('<-')) {
                        newWS[cell[0]].s = style
                        let removeMarker = cell[1].v.match(regex)
                        console.log(removeMarker)
                        newWS[cell[0]].v = removeMarker
                    }
                }
            }
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


    console.log('CONVERTED');
    const time = moment().format('DDMMYYYY_h-mm-ss');
    console.log('INIZIO WRITEFILE');
    await xlsx.writeFile(wb, './exports/' + time + name + '.xlsx');
    console.log('FINE WRITEFILE');
    return '/exports/' + time + name + '.xlsx';
};