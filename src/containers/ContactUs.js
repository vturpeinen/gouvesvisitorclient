import React, {Component} from 'react';
import Map2 from "../Map2";
import './ContactUs.css';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import SnoutDog from '../components/Images/dog29.jpg';




class ContactUs extends Component {
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
                <div>
                    <div className="container-fluid contact-us-area">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 contact-form" >
                                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                    <div className="form-group">
                                        <label for="name"><h4>Name</h4></label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1"><h4>Email address</h4></label>
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <label for="message"><h4>Message</h4></label>
                                        <textarea className="form-control" input="true" rows="8" id="message"></textarea>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                            <div className="col-xs-12 col-sm-4" >
                                <div className="map">
                                    <Map2/>
                                </div>
                            </div>
                       
                            <div className="col-xs-12 col-sm-4" >
                                <div className="address">
                                    <h4>Address</h4><p>Ex American Military Base 70015 Goúrnes, <br/> Iraklion, Greece </p>
                                    <h4>Phone</h4><p>+306979347428 </p>
                                    <h4>E-mail</h4><p>gouvesshelter@gmail.com </p>
                                </div>
                            </div>
                        </div>
                        <div className="row white">
                        <div className="col-xs-12 col-sm-12">
                    <div className="col-xs-12 col-sm-4 empty1"></div>
                        <div className="col-xs-12 col-sm-3">
                            <img className="animal-here" alt="Mr Manolis" src={SnoutDog}/>
                        </div>
                    <div className="col-xs-12 col-sm-3 empty2"></div>
                </div>
                <div className="row white">
                  <div className="col-xs-12 col-sm-12">
                    <div className="col-xs-12 col-sm-4 empty1"></div>
                      <div className="col-xs-12 col-sm-6 carousel-center" >
                        <div className="address-box">
                            <h2>Any help you can offer will be very gratefully received!</h2>
                            <br/><p>Address for donations to be sent to the shelter: <br/>
                            <br/>GOUVES ANIMAL SHELTER
                            <br/>c/o Niki Manolaki
                            <br/>71500 Kokkini-Hani
                            <br/>CRETE, GREECE<br/>
                            <br/>Thank you so much in advance for any help you can give,<br/>
                            Gouves Team
                            </p>
                        </div>
                    </div>
                </div>
                    <div className="col-xs-12 col-sm-3 empty2"></div>
                </div>
                
                
                        </div>
                    </div>
                <Footer/>  
            </div>
             
        
        )
    }
}
export default ContactUs;