const qs = require("qs")
const data = require("./arrayData.js")

const array = data.arrayData


let outArray = array.map(track => {
    return qs.parse(track.split("?")[1]);
})

let eventi_player = []
let eventi_pagina = []
let eventi_cta = []
let eventi_altro_tipo = []
let eventi_media = []

for (const elem of outArray) {
    if (elem.hasOwnProperty('mk')) {
        eventi_player.push(elem);
    } else if (elem.hasOwnProperty('cg1')) {
        eventi_pagina.push(elem)
    } else if (elem.hasOwnProperty('mg1')) {
        eventi_media.push(elem)
    } else if(elem.hasOwnProperty('ct')){
        eventi_cta.push(elem)
    } else {
        eventi_altro_tipo.push(elem)
        console.log("Something going wrong with insert of this element: ", elem);
        console.log("See 'Eventi Altro Tipo' page for uncatalogued events ");
    }
}



/* fs.writeFileSync("eventi_player.csv", new Parser().parse(eventi_player.length > 0 ? eventi_player : [{ empty: "empty" }]));
fs.writeFileSync("eventi_pagina.csv", new Parser().parse(eventi_pagina.length > 0 ? eventi_pagina : [{ empty: "empty" }]));
fs.writeFileSync("eventi_media.csv", new Parser().parse(eventi_media.length > 0 ? eventi_media : [{ empty: "empty" }])); */

require("./excel_printer")("WT", {
    eventi_player,
    eventi_pagina,
    eventi_media,
    eventi_cta,
    eventi_altro_tipo
}, true)



