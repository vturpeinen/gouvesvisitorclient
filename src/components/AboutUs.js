import React, { Component } from 'react';
import EaryDog from './Images/dog17.jpg';


class AboutUs extends Component {
    render() {
        return (
            <div>   
                <img className="floppy-ear-dog" src={EaryDog} alt="Eary dog"/>
            <div className="container-fluid"> {/* <!-- tällä saa containerista responsiivisen --> */}
            <div className="row">
                <div className="mission-values-area">
                {/* <img className="floppy-ear-dog" src={EaryDog} alt="Eary dog"/> */}
                    <div className="mission-and-values-box">
                         <h1>Our Mission and Values</h1>
                            <p>Our long term mission is to shut down the shelter, when there is no need for it. To live in a society, where animals are treated well and there is no abandoned or neglected pets or strays. But until that goal is reached we will continue to help in any way we can and as most people know, it will take years and a lot of effort even for the smallest thing to change. So for now, these are the things we concentrate on:

​

1. Making the stray population smaller

By neutering and educating, we hope to manage the problem better. We are constantly negotiating with the local authorities to get neutering programs and talking with local schools, to get the new generation informed. 

​

2. Making sure the animals that really need it, get help

We cant afford to take in any stray, but only the ones who really need it. All of our animals are young, old or injured or could not cope on the streets. They might be living in dangerous areas, where people shoot and poison dogs daily. These are the ones that need our help most. 

​

3. Help one dog at a time

Every dog and cat in our shelter is family to us. We know their personalities and quirks. We love them unconditionally and we never put down a dog, unless its badly injured, sick, suffering, and cant make it. Even after getting better, we do not release them back to the streets, but make sure they find forever homes. We are a not a kill shelter, so we wont put down dogs that are healthy and have the possibility to be rehomed.
                            </p>
                    </div>
                </div>     
            </div>
            <section>
                <div className="organization-area">
                  
                        <div className="organization-box">
                        <h3>GREEK REGISTERED ANIMAL WELFARE ORGANIZATION, NON PROFIT </h3>
                        <p>Gouves Animal Shelter provides protection for stray and injured animals in Crete. The shelter was founded 2008 and since then we have had the privilege of helping thousands of dogs. Our aim is to give the dogs a second chance, by providing food, shelter and medical care. During our first decade, we found homes for more than 4 000 dogs and have helped many more!

 

The organization doesn't get any financial help from the government, so we rely heavily on kind-hearted people. We have a constant need for vaccinations and worming tablets and in many cases we find dogs that need immediate medical attention or surgery. We have about 200 dogs and 200 cats to feed and take care of every month.

 

By making a donation, even a small one, you can save a life. One euro can mean so much to them, so if its in any way possible, please consider helping these animals. Donations can be made to help an individual dog or to a bigger cause, like medical bills. Please visit Guardian Angels needed and Donations page for more information.

 

We always welcome any donations of food, medicine or other things: collars, leashes, blankets - everything is needed constantly and even cleaning supplies are more than welcome! 

 

If you're in the neighborhood, living here or maybe on holiday, please do come and visit us. It means so much to the dogs to get some one on one attention, or even a walk! We are situated right next to a beach, so it´s the ideal place for a walk by the sea. It might be a small thing for you but it will be a huge treat for the dog! 

 

If you are interested in volunteer work, we can help to arrange affordable accommodation and transportation. We always have a need for an extra pair of hands at the shelter! 

 

We understand that not everyone is able to help financially or to come and spend time with the dogs, but there is something that anyone can do: please share our story with your friends and family. You never know how far the message will go, and how big an influence it can have on our furry friends. </p>
                            
                            
                           
                        </div>
                    
                </div>
            </section>
            <section>
                        <div className="team-area">
                        {/* <img className="mr-manolis" src={MrManolis} alt="Mr Manolis"/>  TÄNNE KUVA*/}
                                <div className="team-box">
                                <h3>The Team</h3>
                                <p>picture of Mr. Manolis</p>

                                <p>Gouves Animal Shelter was originally created by Mr. Manolis, who is still very much a part of our shelter, in daily life as well as in spirit. He is the heart and soul of the shelter, who dedicated 10 years of his life to this place. Mr. Manolis used to spend every hour he could in the shelter, while working a full time job at nights and later while in retirement. For 10 years this man was there every day, sick or healthy, holiday or not, hot or cold. And he is one of the reasons, why the shelter has become a refuge place not only to the animals, but to so many people around the world. 

​

With age comes limitations and unfortunately Mr. Manolis fell ill and needed surgery to make his condition better. During this time the volunteers made efforts to create better and easier environment for him and the dogs, so the future would be a bit brighter. At the moment we have:

​

2 full time workers at the shelter

1 full time volunteer, Niki, who is taking the responsibility of leading the shelter to a new age. 

6 local volunteers, who take photos, maintain FB, try to help out at the shelter when possible and participate in rescue missions and vet runs. 

4 volunteers living across EU, helping the shelter maintain the FB, raising funds and trying to find homes. 

​

All of our volunteers work full time jobs at the same time as helping the shelter, so we apologize for any delays. We always try to reply all messages as soon as possible, but sometimes there can be rescues going on and our efforts are needed elsewhere!

​</p> <p><br/></p>
                                    <h4>Donate via Paypal</h4>
                                    {/* <PaypalApp/> */}
                                    <p>Thank you for so much in advance for any help you can give, <br/> Gouves Team</p>
                                </div>
                            {/* </div> */}
                        </div>
                    </section>
            <section>
        <div className="footer">
            <p>Contact Us: Tel 123-456-7890 , Fax 123-456-7890</p>
            <p>email: <a href="email:gouvesshelter@gmail.com">
            gouvesshelter@gmail.com</a></p>
        </div>
        </section>
    
    </div>  
    </div>

        );

    }
}

export default AboutUs;