const express = require('express')
const app = express();
const cors = require('cors')
const leboncoin = require('leboncoin-api');
app.use(cors());

const rgbHex = require('rgb-hex');

// var colors = {
//     pink: '#ffb6c1',
//     WHITE :	'#FFFFFF',
//     SILVER:	'#C0C0C0',
//     GRAY:	'#808080',
//     BLACK:	'#000000',
//     RED :	'#FF0000',
//     MAROON:	'#800000',
//     YELLOW:	'#FFFF00',
//     OLIVE:	'#808000',
//     LIME:	'#00FF00',
//     GREEN:	'#008000',
//     AQUA:	'#00FFFF',
//     TEAL:	'#008080',
//     BLUE:	'#0000FF',
//     NAVY:	'#000080',
//     FUCHSIA: '#FF00FF',
//     PURPLE:	'#800080'
// };


const colors = {

alice_blue:	'#F0F8FF',
antique_white:	'#FAEBD7',
aqua:	'#00FFFF',
aquamarine	:'#7FFFD4',
azure:	'#F0FFFF',
beige:	'#F5F5DC',
bisque:	'#FFE4C4',
black	:'#000000',
blanched_almond:	'#FFEBCD',
blue:	'#0000FF',
blue_violet	:'#8A2BE2',
brown:	'#A52A2A',
burlywood:	'#DEB887',
cadet_blue:	'#5F9EA0',
chartreuse:	'#7FFF00',
chocolate:	'#D2691E',
coral:	'#FF7F50',
cornflower:	'#6495ED',
cornsilk:	'#FFF8DC',
crimson	:'#DC143C',
cyan:	'#00FFFF',
dark_blue:	'#00008B',
dark_cyan:	'#008B8B',
dark_goldenrod:	'#B8860B',
dark_gray:	'#A9A9A9',
dark_grey:	'#A9A9A9',
dark_green:	'#006400',
dark_khaki:	'#BDB76B',
dark_magenta:	'#8B008B',
dark_olive_green:	'#556B2F',
dark_orange:	'#FF8C00',
dark_orchid	:'#9932CC',
dark_red:	'#8B0000',
dark_salmon:	'#E9967A',
dark_sea_green:	'#8FBC8F',
dark_slate_blue:	'#483D8B',
dark_slate_gray	:'#2F4F4F',
dark_slate_grey	:'#2F4F4F',
dark_turquoise:	'#00CED1',
dark_violet	:'#9400D3',
deep_pink:	'#FF1493',
deep_sky_blue	:'#00BFFF',
dim_gray:	'#696969',
dim_grey:	'#696969',
dodger_blue	:'#1E90FF',
firebrick:	'#B22222',
floral_white:	'#FFFAF0',
forest_green:	'#228B22',
fuchsia:	'#FF00FF',
gainsboro:	'#DCDCDC',
ghost_white:	'#F8F8FF',
gold:	'#FFD700',
goldenrod:	'#DAA520',
gray:	'#7F7F7F',
grey:	'#7F7F7F',
green:	'#007F00',
green_yellow:	'#ADFF2F',
gray:	'#808080',
honeydew:	'#F0FFF0',
hot_pink:	'#FF69B4',
indian_red:	'#CD5C5C',
indigo:	'#4B0082',
ivory	:'#FFFFF0',
khaki:	'#F0E68C',
lavender:	'#E6E6FA',
lavender_blush:	'#FFF0F5',
lawn_green:	'#7CFC00',
lemon_chiffon	:'#FFFACD',
light_blue:	'#ADD8E6',
light_coral	:'#F08080',
light_cyan:	'#E0FFFF',
light_goldenrod	:'#FAFAD2',
light_gray:	'#D3D3D3',
light_green	:'#90EE90',
light_gray:	'#D3D3D3',
light_grey:	'#D3D3D3',
light_pink:	'#FFB6C1',
light_salmon:	'#FFA07A',
light_sea_green	:'#20B2AA',
light_sky_blue:	'#87CEFA',
light_slate_gray:	'#778899',
light_slate_grey	:'#778899',
light_steel_blue	:'#B0C4DE',
light_yellow	:'#FFFFE0',
lime:	'#00FF00',
lime_green:	'#32CD32',
linen:	'#FAF0E6',
magenta	:'#FF00FF',
maroon:	'#7F0000',
medium_aquamarine:	'#66CDAA',
medium_blue:	'#0000CD',
medium_orchid	:'#BA55D3',
medium_purple:	'#9370DB',
medium_sea_green:	'#3CB371',
medium_slate_blue:	'#7B68EE',
medium_spring_green:	'#00FA9A',
medium_turquoise:	'#48D1CC',
medium_violet_red:	'#C71585',
midnight_blue:	'#191970',
mint_cream:	'#F5FFFA',
misty_rose:	'#FFE4E1',
moccasin:	'#FFE4B5',
navajo_white:	'#FFDEAD',
navy:	'#000080',
old_lace:	'#FDF5E6',
olive:	'#808000',
olive_drab:	'#6B8E23',
orange:	'#FFA500',
orange_red	:'#FF4500',
orchid:	'#DA70D6',
pale_goldenrod	:'#EEE8AA',
pale_green:	'#98FB98',
pale_turquoise:	'#AFEEEE',
pale_violet_red:	'#DB7093',
papaya_whip:	'#FFEFD5',
peach_puff:	'#FFDAB9',
peru:	'#CD853F',
pink	:'#FFC0CB',
plum:	'#DDA0DD',
powder_blue:	'#B0E0E6',
purple:	'#7F007F',
red	:'#FF0000',
rosy_brown	:'#BC8F8F',
royal_blue:	'#4169E1',
saddle_brown:	'#8B4513',
salmon:	'#FA8072',
sandy_brown:	'#F4A460',
//sea_green:'	#2E8B57',
seashell:	'#FFF5EE',
sienna:	'#A0522D',
silver:	'#C0C0C0',
sky_blue:	'#87CEEB',
slate_blue:	'#6A5ACD',
//slate_grey:'	#708090',
snow:	'#FFFAFA',
spring_green:	'#00FF7F',
steel_blue:	'#4682B4',
tan:	'#D2B48C',
teal:	'#008080',
thistle:	'#D8BFD8',
tomato:	'#FF6347',
turquoise	:'#40E0D0',
violet:	'#EE82EE',
wheat	:'#F5DEB3',
white:	'#FFFFFF',
white_smoke	:'#F5F5F5',
yellow:	'#FFFF00',
yellow_green:	'#9ACD32'

}

const getColors = require('get-image-colors')

var palette = require('image-palette')
//var pixels = require('image-pixels')
var nearestColor = require('nearest-color').from(colors);
 
//nearestColor('#800');
 

 




app.get('/annonces', (req,res,next) => {
    let dataFinal = []
    let longeurTableau = 2
    let couleurImagesTrouvees = []


        for( let i =  0; i < longeurTableau ; i++){
    
            var search = new leboncoin.Search()
            .setPage(i)
            .setQuery("rouge")
            .setFilter(leboncoin.FILTERS.PARTICULIER)
            .setCategory("velos")
            .setRegion(" Midi-Pyrénées")
            .setDepartment("haute-garonnes")
            //   .setLocation([
            //                {"city": "Toulouse"}
            //                ])
            .addSearchExtra("price", {min: 50, max: 150}) // will add a range of price
            //.addSearchExtra('furnished', ["1", "Non meublé"]); // will add enums for Meublé and Non meublé
         
            // Please check into categories & sub categories constants to know which are the sub categories to add into "addSearchExtra"
         
            search.run().then(function (data) {
                let dota = data.results
                let longeurTableauData = dota.length
                
                for(let i = 0 ; i < longeurTableauData ; i++){
                    if(dota[i].images !== undefined){

                    
                        //console.log(dota[i].images)
                        //let longeurTableau = dota[i].images.length
                        //for(let u = 0 ; u < 1; u++){

                            //var {ids, colors} = palette(await pixels(dota[i].images[u]))
                            var {ids, colors, amount} = palette(dota[i].images[0], count=10)
                            let longeurArrayCouleur = (colors.length)
                            //console.log(colors.map(color => color.hex()))
                            //colors.map(color => console.log(color))
                            //console.log(colors)
                            console.log(dota[i].images[0])
                            //getColors(dota[i].images[0]).then(colors => {
                            //    // `colors` is an array of color objects
                            //    console.log(dota[i].images[0])
                            for(let x = 0 ; x <longeurArrayCouleur  ; x++){
                                //console.log(nearestColor(colors[x].hex()))

                                let colorTrouvee = rgbHex(colors[x][0],colors[x][1],colors[x][2])
                                //console.log(colors[x][3])
                                console.log(colorTrouvee)
                                couleurImagesTrouvees.push([i,colorTrouvee])
                            }


                            //}

                            //getColors(dota[i].images[u]).then(colors => {
                            //    console.log(colors.map(color => nearestColor(color.hex())))
                            //    //console.log(colors.map(color => color))
                            //    console.log(dota[i].images[u])
                            //  })

                    }
                }


                console.log(data.page)
                // console.log(data.page); // the current page
                // console.log(data.pages); // the number of pages
                // console.log(data.nbResult); // the number of results for this search
                // console.log(data.results); // the array of results
                // data.results[0].getDetails().then(function (details) {
                //     console.log(details); // the item 0 with more data such as description, all images, author, ...
                // }, function (err) {
                //     console.error(err);
                // });
                // data.results[0].getPhoneNumber().then(function (phoneNumer) {
                //     console.log(phoneNumer); // the phone number of the author if available
                // }, function (err) {
                //     console.error(err); // if the phone number is not available or not parsable (image -> string) 
                // });
                dataFinal.push([dota,couleurImagesTrouvees])
                

            }, function (err) {
                console.error(err);
            });
        
        }

        setTimeout(function(){return res.json({
            data: dataFinal
        })},6000)
        //setTimeout(function(){console.log(dataFinal)},4000)
        //console.log(dataFinal)
        //return dataFinal
    }

  

    //  f().then(function(result){
    //      console.log("result")
    //          console.log(result)
    //          return res.json({
    //              data: result
    //          })
        
    //  })

     //setTimeout(function(){ console.log(dataFinal) }, 5000);


    //f()
    //console.log(dataFinal)
    //setTimeout(function(dataFinal){ console.log(dataFinal) }, 5000);
    //if(dataFinal.length === longeurTableau){
    //    return res.json({
    //         data: result
    //     })
    //}
    //else{
//
    //}


    
    
    
)



app.listen(4000, () => {
    console.log("Listenning on port 4000")
})




