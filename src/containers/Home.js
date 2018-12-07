import React, { Component } from "react";
import "./Home.css";
import { API } from "aws-amplify";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

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
   return [{}].concat(Content).map(
     (note, i) =>
       i !== 0
         ? <LinkContainer
             key={i}
             to={`/Content/${note.typeid}`}
           >
             <ListGroupItem header={note.content.trim().split("\n")[0]}>
               {"Created: " + new Date(note.createdAt).toLocaleString()}
             </ListGroupItem>
           </LinkContainer>
         : <LinkContainer
             key="new"
             to="/Content/new"
           >
             <ListGroupItem>
               {/* <h4>
                 <b>{"\uFF0B"}</b> Create a new note
               </h4> */}
             </ListGroupItem>
           </LinkContainer>
   );
 }

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
   return (
     <div className="notes">
       <PageHeader>Our Animals to Adopt</PageHeader>
       <ListGroup>
         {!this.state.isLoading && this.renderNotesList(this.state.notes)}
       </ListGroup>
     </div>
   );
 }

 render() {
   return (
     <div className="Home">
        {/* {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}  */}
        {this.renderNotes()}
     </div>
   );
 }
}