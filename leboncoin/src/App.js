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
    console.log(annonces)
     let columns = ''


     columns = annonces.map((tableau)=> {
      
     return(
     <Grid.Column>
     {tableau[1].map(coloration=>(
       <p style={{height: '100px', width: '290px',display:'inline-block', backgroundColor: `${coloration}`}}>*</p>
     ))}

   
      <Image  src={tableau[0]}/>

     </Grid.Column>
   )})
   
     
     

  

    return (
      <div className="App">
      <Grid columns={6} >{columns}</Grid>
      <h1 onClick = {() => this.test()}> COUCOU</h1>

      </div>
    );
  }
}

export default App;
