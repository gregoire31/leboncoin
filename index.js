const express = require('express')
const app = express();
const cors = require('cors')
const leboncoin = require('leboncoin-api');
app.use(cors());

const getColors = require('get-image-colors')
 




app.get('/annonces', (req,res,next) => {
    let dataFinal = []
    let longeurTableau = 2


        for( let i =  0; i < longeurTableau ; i++){
    
            var search = new leboncoin.Search()
            .setPage(i)
            .setQuery("panier")
            .setFilter(leboncoin.FILTERS.PARTICULIER)
            .setCategory("velos")
            .setRegion(" Midi-Pyrénées")
            .setDepartment("haute-garonnes")
            //   .setLocation([
            //                {"city": "Toulouse"}
            //                ])
            .addSearchExtra("price", {min: 70, max: 90}) // will add a range of price
            //.addSearchExtra('furnished', ["1", "Non meublé"]); // will add enums for Meublé and Non meublé
         
            // Please check into categories & sub categories constants to know which are the sub categories to add into "addSearchExtra"
         
            search.run().then(function (data) {
                let dota = data.results
                let longeurTableauData = dota.length
                for(let i = 0 ; i < longeurTableauData ; i++){
                    console.log(dota[i].images)
                    let longeurTableau = dota[i].images.length
                    for(let u = 0 ; u < 1; u++){
                        console.log(dota[i].images[u])
                        getColors(dota[i].images[u]).then(colors => {
                            
                            console.log(colors.map(color => color.hex()))
                            console.log(dota[i].images[u])
                          })
                        
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
                dataFinal.push(data)
                

            }, function (err) {
                console.error(err);
            });
        
        }

        setTimeout(function(){return res.json({
            data: dataFinal
        })},6000)
        setTimeout(function(){console.log(dataFinal)},4000)
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

