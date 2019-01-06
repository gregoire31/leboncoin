const express = require('express')
const app = express();
const cors = require('cors')
const leboncoin = require('leboncoin-api');
app.use(cors());

const rgbHex = require('rgb-hex');

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


const getColors = require('get-image-colors')
 
//var Promise = require('es6-promise').Promise;



 

 


app.get('/annonces', (req,res,next) => {
    let dataFinal = []
    let longeurTableau = 2
    let couleurImagesTrouvees = []
    let tableauFinal = []

    var get = function(sucess){

    
        for( let i =  0; i < longeurTableau ; i++){
    
            var search = new leboncoin.Search()
            .setPage(i)
            .setQuery("panier")
            .setFilter(leboncoin.FILTERS.PARTICULIER)
            .setCategory("velos")
            .setRegion(" Midi-Pyrénées")
            .setDepartment("haute-garonnes")
            .addSearchExtra("price", {min: 50, max: 150}) 
            
            search.run().then(function (data) {
                const dota = data.results
                let longeurTableauData = dota.length // résults = 35
                let vibrantPalette = []
                //for(let o = 0 ; o < longeurTableauData ; o++){
//
                //    if(dota[o].images !== undefined){
//
                //        getColors(dota[o].images[0],function(err,colors) {
//
                //            colors.map(color => couleurImagesTrouvees.push([o,color.hex()]))
//
                //        })
//
                //    }
                //}
                //console.log(data.page)
                //console.log(couleurImagesTrouvees)
                //couleurImagesTrouvees = []
                if(dota !== []){
                    tableauFinal.push(dota)
                }
                

                if (i === (longeurTableau - 1)){
                    sucess(tableauFinal)
                }

            }, function (err) {
                console.error(err);
            });
        }
    }

    //for(let u = 0 ; u < response[i].length ; u++){
    //                
    //    tableauImages.push(response[i].title)
    //    if(i === (longeur - 1)){
    //        sucess(tableauImages)
    //    }
    //}

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
            //console.log(response.length)
            let tableauPush = []
            //console.log(response[1].title)
            let longeur = response.length
            for(let i = 0 ; i < longeur ; i++){
                if(response[i].images !== undefined){
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
            console.log(response) // Egal à 90 images environs (dépend de la requête leboncoin)
            const longeurImages = response.length 
            console.log(longeurImages)
            let coloris = []  // Stock les palletes de couleurs des images
            for(let i = 0 ; i < longeurImages ; i++){
                //console.log(`IMAGE NUMERO : ${i} = ${response[i]}`)
                 getColors(response[i]).then(colors => {
                    coloris.push(colors);
                    console.log(colors.length)
                    console.log(coloris.length)
                    if(longeurImages === coloris.length){
                        console.log("remplissage finis")
                        success(coloris)
                    }
                });
            }
        })
  
    }

    var getSix = function(){
        getCinq(function(response){
            console.log("fonction finis")
            return res.json({
                data: response
            })
            console.log(response)

        })
    }

    getSix()

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










