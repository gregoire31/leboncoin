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
     let tableauTamponCouleur = []
     
     //console.log(annonces)
     if(annonces !== undefined){
       //console.log(annonces)
      for(let u = 0 ; u < annonces.length ; u++){
        console.log(annonces)
        for(let i = 0 ; i < annonces[u][0].length ; i++){
          //console.log(annonces[u][0][i].location)
          if(annonces[u][0][i].location.department_id !== "1"){

          //console.log(annonces[i].images)
          if(annonces[u][0][i].images !== undefined){
            let longeurCouleurImages = annonces[u][1].length
            for(let f = 0 ; f < longeurCouleurImages ; f++){
              //console.log(annonces[u][1][f][0])
              if(annonces[u][1][f][0] === i ){
                //console.log(annonces[u][1][f][1])
                tableauTamponCouleur.push(annonces[u][1][f][1])
              //}
            }
          }
        }

          //if(annonces[u].results[i].location.department_id === "31"){
            //if(annonces[u].results[i].description.includes("panier") || annonces[u].results[i].title.includes("panier")){
              //if(annonces[u].results[i].description.includes("ville") || annonces[u].results[i].title.includes("ville")){
                tableauImages.push([annonces[u][0][i].id , [annonces[u][0][i].images,tableauTamponCouleur], annonces[u][0][i].title,annonces[u][0][i].link,annonces[u][0][i].price, annonces[u][0][i].date])
                tableauTamponCouleur = []
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
       <p>{tableau[3]} <span>{tableau[5]}</span> </p>
       
       {tableau[1][1].map(coloration=>(
         <p style={{height: '100px', width: '290px',display:'inline-block', backgroundColor: `${coloration}`}}>*</p>
       ))}

       {tableau[1][0].map(tableauimage=>(
     
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
