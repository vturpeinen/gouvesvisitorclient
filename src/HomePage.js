import React, { Component } from 'react';
import './HomePage.css';
import Doggie from './components/Images/koira1.jpg';
import Piggie from './components/Images/pig.svg';
import Flowerpuppy from './components/Images/dog19.jpg';     
import Footer from './components/Footer/Footer';
import facelogo from './components/Images/icons8-facebook.svg';
import insta from './components/Images/instagram.svg';



export default class HomePage extends Component {
    render() {
            return (
                <div id="HomePage">    
                    <div className="wrapper">
                        <div className="row welcome">
                            <div className="col-xs-12 col-md-10">
                                <img className="dog" src={Doggie} alt="Doggie with flowers"/>
                            </div>
                        
                            <div className="col-xs-12 col-md-4 welcome-box"><h1 id="Header">Welcome</h1><p id="Header-p">protection and adoption of stray animals</p></div>
                    
                        </div>     
                    
                        <div className="row we">
                            <div className="col-xs-12 col-sm-6">
                                <div className="we-are-box">
                                    <h1 id="Header-2">Who we are</h1>
                                        <p id="we-p">Gouves Animal Shelter is Greek non-profit organisation, located in the lovely island of Crete.
                                        We take care of more than 200 dogs and 200 cats every single month, dedicating our time to make sure these animals have a new chance in life. We have neutering and educational programmes to help change the animal welfare laws and attitudes of the people.
                                        Our dogs find homes all over Europe and even US, so please feel free to check our dogs and cats waiting for homes! 
                                        If you wish to support us, by donating, or maybe volunteering, we welcome the help! We don´t get any help from the government, so our volunteer work is financed by individuals like you!</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <img className="columnimage puppy" src={Flowerpuppy} alt="Puppy with flowers"/>   
                            </div>
                        </div>
                
                        <div className="row battle-pig">
                            <div className="col-xs-12 col-sm-4">
                                <img className="columnimage piggy" src={Piggie} alt="Piggy bank"/>
                            </div>
                            <div className="col-xs-12 col-sm-8">
                                <div className="quote-box" >
                                    <h2 id="quote-header">You may feel like <br/> a drop in the bucket.</h2> <h3 id="quote-p">But every drop counts! <br/>Make a Donation!</h3>
                                </div>
                            </div>
                        </div> 

                        <div className="row social-media">
                            <div className="col-xs-12 col-md-4" >
                                <div className="youtube-box"> 
                                    <iframe id="youtube-iframe" /* valittaa, että pitäisi olla unique title property, mutta tässähän on?! */
                                        src="https://www.youtube.com/embed/YvhvCBGthE0"
                                        frameBorder="120" 
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-8 so-me-buttons">
                                <div className="col-xs-6" >
                                    <a className="social-media-favicon float-right" href="https://www.facebook.com/gouvesanimalshelter/">
                                        <span>Follow us on Facebook</span><br></br>
                                        <img src={facelogo} className="fb-img" alt="fb"/>
                                    </a>
                                </div>
                                <div className="col-xs-6" >
                                    <a className="social-media-favicon" href="https://www.instagram.com/thegouvesshelter/?hl=en">
                                        <span>Follow us on Instagram</span><br></br>
                                        <img src={insta} className="ig-img" alt="insta"/>
                                    </a>     
                                </div>   
                            </div> 
                        </div>
                    </div>
                    <Footer/>
                </div>                    
            );
        }
    }
    
    