import React, { Component } from 'react';

import './App.css';
import _ from 'lodash';
import { Grid, Image } from 'semantic-ui-react';

const styleImage = {
  width : "500px",
  height : '500px'
}

class App extends Component {


    constructor(props){
      super();
  
      this.state= {

        annonces : [],
        tableauxImagesTriees : []
        
      }
    }
    test() {
      console.log("lancement de la fonction")
      console.log(this.state.annonces)
      // fetch('http://localhost:4000/annonces')
      // .then(response => response.json())
      // //.then(response => console.log(response.data.results))
      // .then(response => this.setState({
      //   annonces : response.data.results
      // }))
      // .catch(err => console.error(err))
    }


    

   componentDidMount() {
       fetch('http://localhost:4000/annonces')
       .then(response => response.json())
       //.then(response => console.log(response.data.results))
        .then(response => this.setState({
          annonces : response.data
        }))
       .catch(err => console.error(err))
     }

   //trieDuTableau(){
   //  const {annonces, tableauxImagesTriees} = this.state
   //  let longeurTableau = annonces.length
   //  for(let i = 0 ; i < longeurTableau ; i++){
   //    if(annonces[i].images !== undefined){
   //      tableauxImagesTriees.push(annonces[i].images)
   //    }
   //  }
   //}
      
  
    
  
  render() {

     let {annonces} = this.state
     let tableauImages = []
     let columns = ''
     console.log(annonces)
     if(annonces !== undefined){
       console.log(annonces)
      for(let u = 0 ; u < annonces.length ; u++){
      
        for(let i = 0 ; i < annonces[u].results.length ; i++){
          //console.log(annonces[i].images)
          if(annonces[u].results[i].images !== undefined){

          //if(annonces[u].results[i].location.department_id === "31"){
            //if(annonces[u].results[i].description.includes("panier") || annonces[u].results[i].title.includes("panier")){
              //if(annonces[u].results[i].description.includes("ville") || annonces[u].results[i].title.includes("ville")){
                tableauImages.push([annonces[u].results[i].id , annonces[u].results[i].images, annonces[u].results[i].title,annonces[u].results[i].link,annonces[u].results[i].price, annonces[u].results[i].date])

              //}

            //} 
          //} 
        }
            
            //console.log(tableauImagesTampon)
          }
          //(tableauImagesTampon)
          //tableauImagesTampon  = []
        }
      }
  
       console.log(tableauImages.length)
        columns = tableauImages.map((tableau)=> {
         return(
         <Grid.Column key={tableau[0]}>
         <h1>{tableau[2]} PRICE : {tableau[4]}</h1>
         <p>{tableau[3]}</p>
          <span>{tableau[5]}</span>

         {tableau[1].map(tableauimage=>(
       
          <Image key={tableauimage.split('/')[4].split('.')[0]} style={styleImage} src={tableauimage}/>
       
        ))}
         </Grid.Column>
       )})
     
    






    // const options = categories.map((categorie) => (
    //   { key: categorie._id,text: categorie.name, value: [categorie.name] }
    // ))



    // const columns = _.times(videosBDD.length, i => (
    
    //   <Grid.Column key={videosBDD[i]._id}>
    //     <Image onClick={()=>{this.selectIdVideo(videosBDD[i]._id);}} src={videosBDD[i].image} />
    //   </Grid.Column>
    // ))

  

    return (
      <div className="App">
      <Grid columns={6} >{columns}</Grid>
      <h1 onClick = {() => this.test()}> COUCOU DE LA CHINE CHINOISE</h1>

      </div>
    );
  }
}

export default App;
