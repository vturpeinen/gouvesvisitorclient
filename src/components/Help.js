import React, { Component } from 'react';
import './Styles/Help.css'
import SadDog from './Images/koira.png';
import LogoNega from './Images/gouves-logo-nega.svg';
import Footer from '../Footer';
import SnifferDog from './Images/dog25.jpg';



class Help extends Component {
    render() {
        return (
            <div className="wrapper donationwrapper">
                <div className="row donationrow"> 
                    <div className="col-xs-12 col-sm-4">
                        <img className="super-sad-dog" src={SadDog} alt="Sad dog"/>
                    </div>
                    <div class="col-xs-12 col-sm-8">
                        <div className="donate-box">
                         <h1>Donate to the shelter</h1>
                         <br/><p>Over 300 homeless and abandoned animals each year find a safe place and needed care with us - <br/>can you help us keep going?
                         We do not get any help from the government, or from big organizations, <br/>but depend solely on the donations of individuals.
                         Any donation, big or small, is highly appreciated and there are so many ways you can help, <br/>we are sure you will find one suited for your situation.
                         We take care of more than 200 dogs and 200 cats, which is a huge task for a group of less than 10 volunteers.</p>
                            
                        </div>
                    </div>     
                </div>

                <div className="row donationrow"> 
                    <div className="col-xs-12 col-sm-4">
                        <img className="super-sad-dog" src={SadDog} alt="Sad dog"/>
                    </div>
                    <div class="col-xs-12 col-sm-8">
                        <div className="donate-box">
                         <h2>Here are some of the shelters monthly costs: </h2>
                         <br/><p> &#9737; Over 300 homeless and abandoned animals each year find a safe place and needed care with us - <br/>can you help us keep going?
                         We do not get any help from the government, or from big organizations, <br/>but depend solely on the donations of individuals.
                         Any donation, big or small, is highly appreciated and there are so many ways you can help, <br/>we are sure you will find one suited for your situation.
                         We take care of more than 200 dogs and 200 cats, which is a huge task for a group of less than 10 volunteers.</p>
                            
                        </div>
                    </div>     
                </div>

                <div className="wrapper volunteerswrapper">
                    <div className="row volunteersrow"> 
                        <div className="col-xs-12 col-sm-4">
                            <img className="sniffer-dog" src={SnifferDog} alt="Dog and flower"/>
                        </div>
           
                        <div class="col-xs-12 col-sm-8">
                            <div className="volunteers-box">
                                <h2>Volunteers</h2>
                                <br/><p>The shelter has regular volunteers who try to help as much as possible, but with all the vet trips, emergencies and basic work in the shelter, we are sometimes overwhelmed. Any volunteer work will be much appreciated, whether its taking a dog for a walk or cleaning the shelter, we can all make life better for these dogs. Short term volunteers are always a big help!
                                We are also looking for longer term volunteers. If you are interested to work in a dog shelter, we can help you to find accommodation. Decent apartments near to the shelter would be available for about 200 - 250 euro/month. 
                                For more information please contact us at gouvesshelter@gmail.com
                                
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className="wrapper addresswrapper">
                    <div className="row addressrow">  
                        <div class="col-xs-12 col-sm-8">
                            <div className="address-box">
                                <h2>Any help you can offer will be very gratefully received!</h2>
                                <br/><p>Address for donations to be sent to the shelter: 
                                <br/>GOUVES ANIMAL SHELTER
                                <br/>c/o Niki Manolaki
                                <br/>71500 Kokkini-Hani
                                <br/>CRETE, GREECE<br/>
                                <br/>We do understand that not everyone is able to donate. You can also help by sharing and spreading the word. If you are able to visit us, you can take one of our dogs for a nice walk or help by grooming dogs that need help with their fur.<br/>
                                <br/>Thank you so much in advance for any help you can give,
                                <br/>Gouves Team
                                </p>
                            </div>
                        </div> 
                    </div>
                </div> 
                <div className="row teamrow"> 
                    <div className="col-xs-12 col-sm-4">
                        <img className="logo-nega" src={LogoNega} alt="Gouves Logo"/>
                    </div>
                </div>
                <Footer/>
            </div>
            
        );
    }
}

export default Help;
