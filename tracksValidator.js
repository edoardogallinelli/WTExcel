const ComscoreMapping = require('./ComscoreMapping.js')
const fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname +'/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d)+ '\n');
  log_stdout.write(util.format(d) + '\n');
};

 function validator(tracks) {
    // console.log("TRACCIAMENTI RAW", tracks);
    let data = tracks.eventi_altro_tipo
    for (let i = 0; i < data.length; i++) {
        const track = data[i];
        let key = track.ns_st_ev.toLowerCase() + track.oce_odt.toLowerCase();
        if (ComscoreMapping[key]) {
            for (const [keyTrack, value] of Object.entries(track)) {
                if ( ComscoreMapping[key][keyTrack]) {
                    console.log(`${ComscoreMapping[key][keyTrack]} riga 21`);
                    let response = ComscoreMapping[key][keyTrack](value)
                    console.log(response, 'che dio ce la mandi buona');
                    if (!response) {
                        let dataModified = value + '<-'; 
                        data[i][keyTrack] = dataModified
                        console.log(data[i][keyTrack], ' valore modificato');
                    }
    
                }
            }
        }else {
            console.log();
        }
       
    }

    return data
}

module.exports = validator
