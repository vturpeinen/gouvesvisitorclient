import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
                <div className="footerwrapper">
                <div className="row footerrow"> 
                    <div className="col-sm-6 col-sm-6">
                    <div className="info-box" backgroud-color="yellow">
                    <p>Contact Us: Tel 123-456-7890 , Fax 123-456-7890</p>
                    <p>email: <a href="email:gouvesshelter@gmail.com">
                    gouvesshelter@gmail.com</a></p>
                    </div>
                    </div>
                    <div classname="footerwrapper" class="col-sm-6 col-sm-6" backgroud-color="yellow">
                    <div className="paypal-box">
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="P745DPDAMZQ5Q" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_GR/i/scr/pixel.gif" width="1" height="1" />
                </form>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Footer;