import React, { Component } from 'react';

import './App.css';
import _ from 'lodash';
import { Grid, Image } from 'semantic-ui-react';

const styleImage = {
  width : "500px",
  height : '500px',
  position : "center",
  display : "inline-block"
}
const styleGrid = {
  display : "inline-block"
}

class App extends Component {


    constructor(props){
      super();
  
      this.state= {

        annonces : [],
        tableauxImagesTriees : [],
        annoncesTries : [],
        tableauxCouleurs : [
          ["pink" , '#ffb6c1'],
          ["WHITE"  , '#FFFFFF'],
          ["SILVER" , '#C0C0C0'],
          ["GRAY", 	'#808080'],
          ["BLACK" , '#000000'],
          ["RED" , '#FF0000'],
          ["MAROON" , '#800000'],
          ["YELLOW" ,	'#FFFF00'],
          ["OLIVE" ,	'#808000'],
          ["LIME" ,	'#00FF00'],
          ["GREEN" ,	'#008000'],
          ["AQUA" ,	'#00FFFF'],
          ["TEAL" ,	'#008080'],
          ["BLUE" ,	'#0000FF'],
          ["NAVY",	'#000080'],
          ["FUCHSIA" , '#FF00FF'],
          ["PURPLE ",	'#800080']
        ]
      }

    }
    colorFilter(couleur) {
      console.log("c'est parti ! ")
      const { annonces } = this.state
      let tailleAnnonces = annonces.length
      let tailleCouleursDansAnnonces = []
      let tableauxCouleurTampons = []
      for (let i = 0 ; i < tailleAnnonces ; i++){
        tailleCouleursDansAnnonces = annonces[i][1].length
        for(let u = 0 ; u < tailleCouleursDansAnnonces ; u++){
          //console.log(annonces[i][1][u])
          if(annonces[i][1][u] === couleur){
            u = tailleCouleursDansAnnonces
            //console.log(annonces[i][0])
            tableauxCouleurTampons.push(annonces[i][0])
          }
        }
        if (i === tailleAnnonces - 1){
          this.setState({
            annoncesTries : [tableauxCouleurTampons]
          })
        }
      } 

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

     let { tableauxCouleurs, annoncesTries} = this.state
     let longeurAnnoncesencours = annoncesTries.length
    if(annoncesTries[0] === undefined){
      //annoncesTries = ["https://cdn.pixabay.com/photo/2014/03/25/15/19/cross-296507_960_720.png"]
      annoncesTries[0]= ["https://cdn.pixabay.com/photo/2014/03/25/15/19/cross-296507_960_720.png"]
    }

    //console.log(annoncesTries)

    //console.log(annonces)
     let columns = ''

     let colors = tableauxCouleurs.map((couleur)=>{
       return(
      <p onClick={() =>  this.colorFilter(couleur[1]) } style={{height: '100px', width: '290px',display:'inline-block', backgroundColor: `${couleur[1]}`}}>{couleur[0]}</p>
     )})
     

     columns = annoncesTries.map(tableau=> {

      console.log(tableau)
      return(
      <Grid.Column style={styleGrid}>

       <Image style = {styleImage} src={tableau}/>
 
      </Grid.Column>
    )})


    return (
      <div className="App">
      <div> {colors}</div>

      <Grid columns={6} >{columns}</Grid>

      </div>
    );
  }
}

export default App;
