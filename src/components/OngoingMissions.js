import React, { Component } from 'react';
import './Styles/Ongoing.css'
import StarryDog from './Images/dog6.jpg';
import PitifulDog from './Images/dog5.jpg';
import Dog36 from './Images/dog36.jpg';

/* import SadDog from './images/koira.png'; */
import Footer from './Footer/Footer';


class OngoingMissions extends Component {
    render() {
        return (
                <div className="wrapper ongoingwrapper">
                    <div className="row white">
                        <div className="col-xs-12 col-sm-12 no-border">
                            <div className="col-xs-12 col-sm-4">
                                <img className="animal-here" src={StarryDog} alt="Dog with star scarf"/>
                            </div>
                            <div className="col-xs-12 col-sm-1 empty1"></div>
                            <div className="col-xs-12 col-sm-6 content-inside-short-text">
                                <h1>Ongoing Missions</h1>
                                <br/><p>Gouves Animal Shelter has many ongoing missions, since our purpose is not to only make the shelter better, but help the overall situation of unwanted animals in the island. At times this can feel like an overwhelming struggle, with no end, but giving up is not an option. To make the journey bearable, we have both long and short term targets, that we hope to achieve with the help of our followers, supporters and co-operation partners, as well as with the government. <br/>
                                <br/>You can read all about our ongoing missions, as well as past missions, and follow how close or far we are from achieving those targets. If you wish to help us achieve any of our goals, please donate, share our story or help in any way you can - any help is always much appreciated. <br/>
                                <br/>We might not change everything in a month, or in a year, but we can change so many lives and in long term, help make the whole island better place for the animals that have no voice.
                                </p>
                                <br/>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-1 empty1"></div>
                    </div>   

                    <div className="row linear-gradient-light-grey">
                        <div className="col-xs-12 col-sm-12 no-border">
                            <div className="col-xs-12 col-sm-1 empty1"></div>
                            <div className="col-xs-12 col-sm-6 content-inside">
                                <h2>Neutering Strays</h2>
                                <br/><p>The stray problem at the island has many reasons and unlike in many countries, the biggest problem is not strays multiplying at the streets. 
                                There are more and more puppies born in households and dumped to the streets every day, because of poor financial situations and because of lack of education. 
                                These all need to be considered, when we try to find solutions to prevent the rising number of strays as well as trying to get better animal welfare laws.<br/> 
                                <br/>Ideally we could combine few elements, which would make all the difference:<br/>
                                <br/><h3>1. Neutering the strays</h3> 
                                Neutering every stray would prevent unwanted puppies being born to the streets, where most of them die in horrible ways. 
                                We can only help few because of our limited recourses and the numbers grow especially during summer, when there is more food available.
                                Stray puppies don't have any protection from diseases, which usually leads to epidemics of Parvo and Canine Distemper - both deadly diseases. 
                                When we can prevent these puppies from being born, we can reduce the numbers. Same goes for cats too, though with different diseases!<br/>
                                <br/><h3>2. Helping families to neuter their dogs</h3>
                                Puppies of strays dogs are only a part of the problem, since most puppies are dumped to the streets by people, who can not afford to have them, or don't care about them. 
                                The financial situation remains poor in Greece and most families don't have funds to neuter their pets. If we would have the funds, 
                                we could help more families to neuter their pets and make sure unwanted puppies would not be born in households and dumped to the streets.<br/>
                                <br/><h3>3. Educating the public</h3>
                                Culture plays a huge role when it comes to the animal welfare and that can be only influenced through education. By providing up to date information and education to the public, 
                                we can slowly make a long lasting change, that will benefit the animals. This is not a short project, but a long term one, that will take years. 
                                It is still extremely important and we hope that our projects, like co-operating with local schools and having groups of locals coming in for education, will help the locals to understand why every life should be valued.<br/>
                                <br id="Educational"/><h3>4. Governments role</h3>
                                There is no doubt that the government should help more and only with their help can the country truly become a good place for animals. 
                                This will take time, since the public opinions need to be onboard too. We are constantly talking with the local municipality and other authorities, to make neutering programs and to reinforce the laws, which are already in place when it comes to the wellbeing of animals.<br/>
                                </p>
                            </div>
                            <div className="col-xs-12 col-sm-1 empty1"></div>
                                <div className="col-xs-12 col-sm-4">
                                    <img className="animal-here-tall" alt="dog without home" src={PitifulDog}/>
                                </div>
                            </div> 
                        </div> 
                        <div className="row linear-gradient-light-grey-to-top">
                            <div className="col-xs-12 col-sm-12 no-border">
                            <div className="col-xs-12 col-sm-3 just-text">
                            <h2>Emergency Fund</h2>
                            <br/><p>All the shelters in the island are full most of the time, 
                            with a waiting list as long as a year. 
                            We try to concentrate on the animals, that cant make it outside, 
                            the ones who are sick, young, old, injured or in danger of being killed. 
                            And because of that, we also come across gross neglect often. A dog
                            can have one leg hanging from a shred of skin, a cat can have 
                            half of its face melted, or the animal might look like a target wall, 
                            with bullet wounds all over.  <br/> 
                            <br />We can never say no to an animal like this, 
                            but too often we lack the funds to help. Even though we have vets 
                            co-operating with us, and we get some payment time for the emergencies,
                            we already owe them thousands and thousands. This is why we try to collect 
                            an emergency fund, that will be used when ever there is an animal, 
                            that needs an urgent surgery or medical care. 
                            </p>
                        </div> 
                        <div className="col-xs-12 col-sm-1 empty1"></div>
                        <div className="col-xs-12 col-sm-3" >
                            <img className="animal-here" alt="Dog with plaided plaid" src={Dog36}/>
                        </div>
                        <div className="col-xs-12 col-sm-1 empty1"></div>
                        <div class="col-xs-12 col-sm-3" >
                            <h2>Building new shelter</h2>
                            <br/><p>At the moment the shelter is under enormous pressure to relocate. The government wants us to move from our old place and since we don't own the land, they have no legal restrictions for evicting us. 
                            This leaves us with the reality, that if we don't find a new land, we will have almost 200 dogs without a place. <br/> 
                            <br/>We are trying to find anohter suitable place and once we have all the options figured out, we will start the bigger task of fundraising for the new shelter. 
                            This might be the perfect opportunity to get free range shelter, with no chains and suitable place for sick and injured animals.<br/>
                            </p>
                            <br/>
                        </div>
                    </div>
                </div>



                <Footer/>
            </div>              
        );
    }
}

export default OngoingMissions;





/*                              MUISTA TÄMÄ 
                                
                            <img className="pitiful-dog" src={PitifulDog} alt="Pitiful dog with adopt me face"/>
                            </div>
                            <div class="col-xs-12 col-sm-8">
                            <br/>
                            </div> 
                            </div>

                                    <h2>Want to help neuter the strays?</h2>
                                    <div className="Paypal">
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                    <input type="hidden" name="hosted_button_id" value="TZHRPTUS39YNS" />
                                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                    <img alt="" border="0" src="https://www.paypal.com/en_GR/i/scr/pixel.gif" width="1" height="1" />
                                    </form>
                                    </div>
                                    <p>100 € will neuter a female dog</p> 
                                    <p>50 € will neuter a male dog  </p>
                                    <p>75€ will neuter a female car</p>
                                    <p>30€ will neuter a male cat</p>
                                    </div>
                                </div>
                     
                        <div className="row ongoingrow"> 
                            <div className="col-xs-12 col-sm-4">
                                <img className="starry-dog" src={StarryDog} alt="Dog with star scarf"/>
                             </div>
                        <div class="col-xs-12 col-sm-8">
                            <h1>Educational Program</h1>
                            <br/><p>The Gouves Animal Shelter believes that educating the public and 
                            especially the new generation, is they key to achieve better animal welfare situation. 
                            One way we accomplish this, is by making connections to schools, where we go and 
                            speak about our work. We educate the younger generation about 
                            proper care of animals and welcome school groups to our shelter.<br/>
                            <br/>We already have one connection school, that has been a huge help. This school has a special club for animal welfare and students come often to the shelter to cuddle with the dogs and to take them out for walks. This is the kind of work that can change things and really make this island a proper place for everyone.  <br/>
                            <br id="Emergency"/>Right now our target is to have field days at the shelter for students, where we can give them basic knowledge of animal care as well as speak about the importance of neutering their pets, stopping the purchasing of puppies from pet stores and showing what life long relationship with animal can give.
                            </p>
                            <br/>
                        </div>     
                    </div>
                     */
                    







 {/* CAN'T TOUCH THIS
             <div className="linksToText">
            <ul>
            <li><a href="#Ongoing" align="center">Ongoing Missions</a></li>
            <li><a href="#NewShelter">Building new shelter</a></li>
            <li><a href="#Neutering">Neutering Strays</a></li>
            <li><a href="#Educational">Educational Program</a></li>
            <li id="Ongoing"><a href="#Emergency">Emergency Fund</a></li>
                </ul>
                </div> 
                CAN'T TOUCH THIS */}