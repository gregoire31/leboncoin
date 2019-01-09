const express = require('express')
const app = express();
const cors = require('cors')
const leboncoin = require('leboncoin-api');
app.use(cors());



  var colors = {
      pink: '#ffb6c1',
      WHITE :	'#FFFFFF',
      SILVER:	'#C0C0C0',
      GRAY:	'#808080',
      BLACK:	'#000000',
      RED :	'#FF0000',
      MAROON:	'#800000',
      YELLOW:	'#FFFF00',
      OLIVE:	'#808000',
      LIME:	'#00FF00',
      GREEN:	'#008000',
      AQUA:	'#00FFFF',
      TEAL:	'#008080',
      BLUE:	'#0000FF',
      NAVY:	'#000080',
      FUCHSIA: '#FF00FF',
      PURPLE:	'#800080'
  };

// const colors = {

// alice_blue:	'#F0F8FF',
// antique_white:	'#FAEBD7',
// aqua:	'#00FFFF',
// aquamarine	:'#7FFFD4',
// azure:	'#F0FFFF',
// beige:	'#F5F5DC',
// bisque:	'#FFE4C4',
// black	:'#000000',
// blanched_almond:	'#FFEBCD',
// blue:	'#0000FF',
// blue_violet	:'#8A2BE2',
// brown:	'#A52A2A',
// burlywood:	'#DEB887',
// cadet_blue:	'#5F9EA0',
// chartreuse:	'#7FFF00',
// chocolate:	'#D2691E',
// coral:	'#FF7F50',
// cornflower:	'#6495ED',
// cornsilk:	'#FFF8DC',
// crimson	:'#DC143C',
// cyan:	'#00FFFF',
// dark_blue:	'#00008B',
// dark_cyan:	'#008B8B',
// dark_goldenrod:	'#B8860B',
// dark_gray:	'#A9A9A9',
// dark_grey:	'#A9A9A9',
// dark_green:	'#006400',
// dark_khaki:	'#BDB76B',
// dark_magenta:	'#8B008B',
// dark_olive_green:	'#556B2F',
// dark_orange:	'#FF8C00',
// dark_orchid	:'#9932CC',
// dark_red:	'#8B0000',
// dark_salmon:	'#E9967A',
// dark_sea_green:	'#8FBC8F',
// dark_slate_blue:	'#483D8B',
// dark_slate_gray	:'#2F4F4F',
// dark_slate_grey	:'#2F4F4F',
// dark_turquoise:	'#00CED1',
// dark_violet	:'#9400D3',
// deep_pink:	'#FF1493',
// deep_sky_blue	:'#00BFFF',
// dim_gray:	'#696969',
// dim_grey:	'#696969',
// dodger_blue	:'#1E90FF',
// firebrick:	'#B22222',
// floral_white:	'#FFFAF0',
// forest_green:	'#228B22',
// fuchsia:	'#FF00FF',
// gainsboro:	'#DCDCDC',
// ghost_white:	'#F8F8FF',
// gold:	'#FFD700',
// goldenrod:	'#DAA520',
// gray:	'#7F7F7F',
// grey:	'#7F7F7F',
// green:	'#007F00',
// green_yellow:	'#ADFF2F',
// gray:	'#808080',
// honeydew:	'#F0FFF0',
// hot_pink:	'#FF69B4',
// indian_red:	'#CD5C5C',
// indigo:	'#4B0082',
// ivory	:'#FFFFF0',
// khaki:	'#F0E68C',
// lavender:	'#E6E6FA',
// lavender_blush:	'#FFF0F5',
// lawn_green:	'#7CFC00',
// lemon_chiffon	:'#FFFACD',
// light_blue:	'#ADD8E6',
// light_coral	:'#F08080',
// light_cyan:	'#E0FFFF',
// light_goldenrod	:'#FAFAD2',
// light_gray:	'#D3D3D3',
// light_green	:'#90EE90',
// light_gray:	'#D3D3D3',
// light_grey:	'#D3D3D3',
// light_pink:	'#FFB6C1',
// light_salmon:	'#FFA07A',
// light_sea_green	:'#20B2AA',
// light_sky_blue:	'#87CEFA',
// light_slate_gray:	'#778899',
// light_slate_grey	:'#778899',
// light_steel_blue	:'#B0C4DE',
// light_yellow	:'#FFFFE0',
// lime:	'#00FF00',
// lime_green:	'#32CD32',
// linen:	'#FAF0E6',
// magenta	:'#FF00FF',
// maroon:	'#7F0000',
// medium_aquamarine:	'#66CDAA',
// medium_blue:	'#0000CD',
// medium_orchid	:'#BA55D3',
// medium_purple:	'#9370DB',
// medium_sea_green:	'#3CB371',
// medium_slate_blue:	'#7B68EE',
// medium_spring_green:	'#00FA9A',
// medium_turquoise:	'#48D1CC',
// medium_violet_red:	'#C71585',
// midnight_blue:	'#191970',
// mint_cream:	'#F5FFFA',
// misty_rose:	'#FFE4E1',
// moccasin:	'#FFE4B5',
// navajo_white:	'#FFDEAD',
// navy:	'#000080',
// old_lace:	'#FDF5E6',
// olive:	'#808000',
// olive_drab:	'#6B8E23',
// orange:	'#FFA500',
// orange_red	:'#FF4500',
// orchid:	'#DA70D6',
// pale_goldenrod	:'#EEE8AA',
// pale_green:	'#98FB98',
// pale_turquoise:	'#AFEEEE',
// pale_violet_red:	'#DB7093',
// papaya_whip:	'#FFEFD5',
// peach_puff:	'#FFDAB9',
// peru:	'#CD853F',
// pink	:'#FFC0CB',
// plum:	'#DDA0DD',
// powder_blue:	'#B0E0E6',
// purple:	'#7F007F',
// red	:'#FF0000',
// rosy_brown	:'#BC8F8F',
// royal_blue:	'#4169E1',
// saddle_brown:	'#8B4513',
// salmon:	'#FA8072',
// sandy_brown:	'#F4A460',
// //sea_green:'	#2E8B57',
// seashell:	'#FFF5EE',
// sienna:	'#A0522D',
// silver:	'#C0C0C0',
// sky_blue:	'#87CEEB',
// slate_blue:	'#6A5ACD',
// //slate_grey:'	#708090',
// snow:	'#FFFAFA',
// spring_green:	'#00FF7F',
// steel_blue:	'#4682B4',
// tan:	'#D2B48C',
// teal:	'#008080',
// thistle:	'#D8BFD8',
// tomato:	'#FF6347',
// turquoise	:'#40E0D0',
// violet:	'#EE82EE',
// wheat	:'#F5DEB3',
// white:	'#FFFFFF',
// white_smoke	:'#F5F5F5',
// yellow:	'#FFFF00',
// yellow_green:	'#9ACD32'
// }


const getColors = require('get-image-colors')
var nearestColor = require('nearest-color').from(colors);
 
//var Promise = require('es6-promise').Promise;



 

 


app.get('/annonces', (req,res,next) => {
    let dataFinal = []
    let longeurTableau = 2
    let couleurImagesTrouvees = []
    let tableauFinal = []


    var got = function(success){

        var search = new leboncoin.Search()
        .setPage(1)
        .setQuery("velos")
        .setFilter(leboncoin.FILTERS.PARTICULIER)
        .setCategory("velos")
        //.setRegion("Midi-Pyrénées")
        //.setDepartment("Haute-Garonne")
         .setLocation([
             {"city": "Toulouse"},
             //{"zipcode": "31000"},
             ])
         .addSearchExtra("price", {min: 40, max: 150}) 
 
// Please check into categories & sub categories constants to know which are the sub categories to add into "addSearchExtra"
 
search.run().then(function (data) {

    success(data.pages); // the number of pages

}, function (err) {
    console.error(err);
});
    }

    var get = function(sucess){
        got(function(response){
            let nombrePages = ''
            if(response > 10){
                nombrePages = 10
            }
            else{
                nombrePages = response
            }
            for( let i =  0; i < nombrePages ; i++){
                console.log(nombrePages)
        
                var search = new leboncoin.Search()
                .setPage(i)
                .setQuery("velos")
                .setFilter(leboncoin.FILTERS.PARTICULIER)
                .setCategory("velos")
                //.setRegion("Midi-Pyrénées")
                //.setDepartment("Haute-Garonne")
                 .setLocation([
                     {"city": "Toulouse"},
                     //{"zipcode": "31000"},
                     ])
                 .addSearchExtra("price", {min: 40, max: 150}) 
                
                search.run().then(function (data) {
                    console.log(data.pages); // the number of pages

                    const dota = data.results
    
                    if(dota !== []){
                        tableauFinal.push(dota)
                    }
                    
                    if (i === (longeurTableau - 1)){
                        //console.log(tableauFinal)
                        sucess(tableauFinal)
                    }
    
                }, function (err) {
                    console.error(err);
                });
            }
        })

    }

    var getDeux = function(success){
        get(function(response){
            //console.log(response[1])
            let tableauPush = []
            let concatTab = []
            let longeur = response.length
            //console.log(longeur)
            for(let i = 0 ; i < longeur ; i++){
                if(response[i] !== undefined){
                    tableauPush.push(...response[i])
                    //console.log(response[i])
                    if(i === longeur - 1){
                        success(tableauPush)
                    }
                }
            }
            
        })
    }

    var getTrois = function(success) {
        getDeux(function(response){
            
            let tableauPush = []
            //console.log(response[1])
            let longeur = response.length
            for(let i = 0 ; i < longeur ; i++){
                let department = response[i].location.department_id
                console.log(department)
                if(response[i].images !== undefined){
                    //console.log(response[i].images)
                    tableauPush.push(response[i].images)
                    //console.log(response[i])
                    if(i === longeur - 1){
                        success(tableauPush)
                    }
                }
            }
        })
    }

    var getQuatre = function(success){
        getTrois(function(response){
            //console.log(response.length)
            let tableauPush = []
            //console.log(response[1].title)
            const longeur = response.length
            for(let i = 0 ; i < longeur ; i++){
                let longeurTableauImage = response[i].length
                for(let u = 0 ; u < longeurTableauImage ; u++){
                    //console.log(response[i][u])
                    tableauPush.push(response[i][u])
                    //console.log(response[i])
                    if(i === longeur - 1 && u === longeurTableauImage - 1){
                        success(tableauPush)
                    }
                
                }
            }
        })
    }

    var getCinq = function(success){
        getQuatre(function(response){
            //console.log(response) // Egal à 90 images environs (dépend de la requête leboncoin)
            const longeurImages = response.length 
            //console.log(longeurImages)
            let couleurHex = []
            let coloris = []  // Stock les palletes de couleurs des images
            for(let i = 0 ; i < longeurImages ; i++){
                //console.log(`IMAGE NUMERO : ${i} = ${response[i]}`)
                 getColors(response[i]).then(colors => {
                    colors.map(color => couleurHex.push(color.hex()))
                    //console.log(couleurHex)
                    coloris.push([response[i],couleurHex]);
                    couleurHex = []
                    if(longeurImages === coloris.length){
                        console.log("remplissage finis")
                        success(coloris)
                    }
                });
            }
        })
    }

    var getSix = function(success){
        getCinq(function(response){
            let longeurResponse = response.length
            let color = ''
            let colorModifie = ''
            let newUpdateColor = ''
            let longeurColors = []
            let colorModifieTampon = []
            for(let i = 0 ; i < longeurResponse ; i++){
                longeurColors = response[i][1].length
                for(let u = 0 ; u < longeurColors ; u++){
                    color = response[i][1][u]
                    colorModifie = nearestColor(color)
                    newUpdateColor = colorModifie.value
                    console.log(newUpdateColor)
                    colorModifieTampon.push(newUpdateColor)
                }
                response[i][1] = colorModifieTampon
                colorModifieTampon = []
                if(i === longeurResponse - 1 ){
                    success(response)
                }
            }
        })
    }

    var getSept = function(){
        getSix(function(response){
            //console.log(response)
            return res.json({
                data: response
            })
        })
    }

    getSept()

})

app.listen(4000, () => {
    console.log("Listenning on port 4000")
})

// let tableauTampon = []
//             let tableauPush = []
//             let longeur = response.length
//             let continueRemplissage = true
//             //console.log(longeur)
//             //for(let i = 0 ; i < longeur ; i++){
//                 //console.log(response[i]) // correspond à une image

//                 let colors = [];               //couleurs
//                 let gettingColors = []; //promesses
                
//                 // admettons que j'ai 3 images
//                 for(let i=0; i<3; i++) {
//                   // considere que le parametre "null" du callback est mon "image[i]"
//                   // ajoute les promesses (retour de getColors) au tableau de promesses
//                   gettingColors.push( getColors(response[i], function(err, color) {
//                     // ajout de la couleur obtenue par getColor au tableau de couleurs à l' interieur du callback
//                     colors.push(color);
//                     })
//                   );
//                 }
                
//                 // Traitement de l'ensemble du tableau de promesses
//                 Promise.all(gettingColors)
//                   .then( function(){
//                     // ici ton tableau de couleurs devrait etre remplis des resultas s' il n' y a pas eu d' erreurs
//                     console.log(colors)
//                   })
//                 ;
                
//                 // juste pour simuler la fonction getColor

                
//                 //getColors(response[i],function(err,colors) {
//                 //    colors.map(color => tableauTampon.push(color.hex()))
//                 //    tableauPush.push([response[i],tableauTampon])
//                 //    tableauTampon = []
//                 //    if(i === longeur - 1){
//                 //        for (let x = 1 ; x < 50 ; x++){
//                 //            console.log(longeur)
//                 //            console.log(tableauPush.length)
//                 //            if(tableauPush.length !== longeur){
//                 //                setTimeout(function() { x --}, 1000)
//                 //            }
//                 //            else{
//                 //                console.log(dataPush)
//                 //                success(tableauPush)
//                 //                x = 3
//                 //            }
//                 //        }                    
//                 //        
//                 //    }
//                 //}) // j'extrais l'index ainsi que la palette de couleur
                

//             //}










