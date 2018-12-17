import React, { Component } from "react";
import "./Home.css";
import { API } from "aws-amplify";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
//import note from "./Notes";

export default class Home extends Component {

  
 constructor(props) {
   super(props);


   this.state = {
     isLoading: true,
     Content: []
   };
 }
 async componentDidMount() {
     // if (!this.props.isAuthenticated) {
     //   return;
     // }

   try {
     const notes = await this.notes();
     this.setState({ notes });
   } catch (e) {
     alert(e);
   }

   this.setState({ isLoading: false });
 }

 notes() {
   return API.get("Content", "/Content");
 }

 renderNotesList(Content) {
   return [{}].concat(Content).map((note, i) =>{
        if (Object.keys(note).length === 0) return
        if (Object.keys(note))
        return (
        <LinkContainer 
             key={i}
             to={`/Content/${note.typeid}`}
           >
           <div className="ListOneItem" float="left">
           <h4 className="Text" align="center"><b> {note.name.trim().split('\n')[0]} </b></h4>
             <img className="Animal" src={"https://gouves-lataukset.s3.eu-central-1.amazonaws.com/public/" + note.attachment} alt="" />
             <div className="container">
               <p className="gender"><b>{note.gender.trim().split('\n')[0]}</b></p>
               <p className="age"><b> {note.age.trim().split('\n')[0]}</b></p>  
             </div>
           </div>
        </LinkContainer>
   )});
 }


  /* <div className="card" className="ListOneItem" float="left">
             <p>{note.name.trim().split('\n')[0]}</p>  
             <img className="Animal" src={"https://gouves-lataukset.s3.eu-central-1.amazonaws.com/public/" + note.attachment} alt="" />
             <div className="container">
             <p> {note.gender.trim().split('\n')[0]}</p>
             <p> {note.age.trim().split('\n')[0]}</p>  
             </div>   
             </div> */

 

//  malesList(notes){
//   var malesList = [];
//   if (notes) { // automaattinen tarkastus onko undefined.
//     console.log("If lause:", notes)
//     for (var i = 0; i <notes.length; ++i) {
//       if (notes[i].gender ==="Male" || notes[i].gender ==="male")  {
//         malesList[i] = notes[i]
//         console.log(this.state.malesList)
//         console.log("LISTA!!!", malesList)
//       }
      
//     }
//     return (
//       <div>
//       TOINEN LISTA {malesList[0].name}</div>

//   );
    
//   }
  
//  }

//  femalesList(notes){
//   var femalesList = [];
//   if (notes) { // automaattinen tarkastus onko undefined.
//     console.log("If lause:", notes)
//     for (var i = 0; i <notes.length; ++i) {
//       if (notes[i].gender !=="Male" || notes[i].gender !=="male")  {
//         femalesList[i] = notes[i]
//         console.log(this.state.femalesList)
//         console.log("LISTA!!!", femalesList)
//       }
      
//     }
//     return (
//       <div>
//       TOINEN LISTA {femalesList[0].name}</div>

//   );
    
//   }
  
//  }






//  malesList(note) {
//    function checkIfMale(gender) {
//      return gender = "Male";
//    }

//  }

//  renderMaleList(renderNotesList) {  
//    return [{}].concat(renderNotesList).map((note, i) => {
//      if this.renderNotesList.filter(this.malesList)
//      return(
//        <LinkContainer
//        key={i}
//        to={`/Content/${note.typeid}`}>
//        <ListGroupItem float="left" header={note.name.trim().split("\n")[0]}>
//        <img className="Animal" src={"https://gouves-lataukset.s3.eu-central-1.amazonaws.com/public/" + note.attachment} alt="" />
//        </ListGroupItem>
//        </LinkContainer>
//      )
//    })
//  }

 renderLander() {
   return (
     <div className="lander">
       <h1>Gouves Animal Shelter</h1>
       <p>Adopt an orphan animal =)</p>
     </div>
   );
 }

 renderNotes() {
   console.log("RenderNotes.state", this.state);
   console.log("down")
   console.log(this.state.notes)
   return (
     <div className="notes">
       <PageHeader>Our Animals to Adopt</PageHeader>
       <ListGroup>
         {!this.state.isLoading && this.renderNotesList(this.state.notes)}
         {console.log("down! MALES:")}
        {console.log(this.malesList)}
       </ListGroup>
     </div>
   );
 }

 render() {
   return (
     <div className="Home">
        {/* {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}  */}
        {this.renderNotes()}
        {console.log("GENDER", this.state.notes)}
        {/* {this.malesList(this.state.notes)} */}
        {/* {this.femalesList(this.state.notes)} */}

     </div>
   );
 }
}