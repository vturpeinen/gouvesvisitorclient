import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import Amplify from "aws-amplify";
import config from "./config";
import AWS from "aws-sdk";

/* handleSubmit = async event => {
  event.preventDefault();

  this.setState({ isLoading: true });

  try {
    await Auth.signIn(this.state.email, this.state.password);
    this.props.userHasAuthenticated(true);
    this.props.history.push("/");
  } catch (e) {
    alert(e.message);
    this.setState({ isLoading: false });
  }
}
 */
 AWS.config.region = 'eu-central-1'; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
   userPoolId: 'eu-central-1_ORzUjv9BU',
   IdentityPoolId: 'eu-central-1:7857827a-2901-45ff-a90b-b0a4d90b0b46',
   userPoolWebClientId: '6titoj78hsbu86skl0o9fathhl'

});


/* AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  userPoolId: 'eu-central-1:dc380b0e-f5c0-4959-825b-770e020702c9'
}); */ 
//Tällä hakee:
//private/eu-central-1%3A896cc1b5-d25a-4726-aa3d-f1790e0289a1/1543411273214-22448679_1317390578390702_7919851058885946939_n.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA2D7NYABKLTGUFVFY%2F20181129%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20181129T090236Z&X-Amz-Expires=900&X-Amz-Security-Token=AgoGb3JpZ2luEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSKAAg3a%2Ft4FsKVOdVYyDtTJK6E4h107o9SnnoWkyprhs8SEI0zCtK2jgpnt7sznc9W3KAElwTlaAZZWA0JR0pYSnd8Xdw8Eu9DNIOqsI4wRGsAymCapvmtAhJzA%2F6Lfh8e0QGhxHqcOVtLIa0iO3aAcEsYYOG9YAiYenWIDmPjCg0ImZwQPNvu%2FQO1avYdqR0dLcR71qIxhw7QdQKW4hnieomHXiZX%2F7Ff3g6o9%2BnC8OrwoH3g5TmflyFNypyluynjTmaTG%2B90DZg7E0JUT19swfla22oeNewbRzjhPjEJ24k70JX1BodRYWjMSjY1F1MaP%2FQMlOUHsNZD7fV77vc5B4LsqqQYIQhAAGgw2OTU3NDY0MjkwMTIiDIXe57mA9%2Buc7XXmbiqGBgKgKFi1NwyStUFaJEG%2BqZ3WCbQ2eT9hs4j8b32YWoD%2FNdk4DZ%2Fi7cfsmPXHvtj8cSPVGWvxB%2BHFRkgPAuiFDOnGCqP5rlZsE0%2BkUPS%2F2UMpjWCNWZs0JfZbqmIQArSTiRJKQa46uPIEIifuCC3ndZH%2FMUZsVS9v2bYCDTepvz2emnorf%2FGmAEG0nIyeXAZCdWW7pJ9RKmqwffUnroO7wf3u8RW3mLCum6TgWxMRwAo%2F6VRF1WX7Qu501%2FNqxI%2BXv1E%2FnkzZDvYeNsEOMjtDhz67TGzYGAD5BZ9xzqQ%2F7SnThqvcWkB4H%2FxPC7TUKhbqov6uBsZbI19Q10UTObE87KCSEWovUbwpZ1acdIZPtlrx9%2Fps0yqg6Eaeb8ELVQy1QYLhhFPVGABKeHtHomoKhs7Z34cxV5fJChrLfzFzsK15NpBILSSHk1Ls8KHDDbtpAKFpfhBcWsNQnzFYNjkt8luyntURJD33%2FxB9uB2UczOKX9qiiZ229nLqA6fOgdZ6IJe2Kf6EEi5ZkeE7%2Bdo%2FnTHFZMzWGJF%2Boffp%2BFRTUb7Xbn1Bq8cc2eMNBVmOL1gL3wHnWKSYCmxP2BRRtYxT2xoH0qJoPrKFSFfPKhSG8DcXqPMYTsHP5697k2txnMGiqCUh4%2Fd0WtEVD%2F6yiajsQMkOF%2Fyu2J4PCKilaZEZUd0bhROJFkLg1mO4D5oY9wi1DiWrgoth8ImF2HXiR5P3ZLYN3przJQeZnSkef%2Bbk0gfXdRV064wWidFNWkdnao%2FC%2B7%2BuMtSXm4vUK%2FfdrsLXdwLB%2FJweow5RUZUWM%2BYZ0UxgIX5HbgFFN1jO7x3P2mL7q8Fqka7r5HMk%2F%2BnWyxI3%2BUDv0kUo3ty2Irr7hc8%2FA80JuspyXZSgwHpo8mCgbo4nDc98b7UBUxXXhMxSlkPoZg7KFDlF1GPmbMLfRJZ4xtU3X%2FvFYXIQgwvrh2W2QARfjzzLNIqPLtxFjLvZz94YPsI65wbEDXQ45LQDkuSumOOTg1AAVn2exuBeqpHYc0jWSGgy5qeoLzCp1v7fBQ%3D%3D&X-Amz-Signature=5762539c510e0b0f47db594e8c45f2ef6cc12bc38c9df75664cb515641d70361&X-Amz-SignedHeaders=host
//Tällä pitäisi hakea:
//private/eu-central-1%3Adc380b0e-f5c0-4959-825b-770e020702c9/1543411273214-22448679_1317390578390702_7919851058885946939_n.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA2D7NYABKAVBCNKPQ%2F20181129%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20181129T090316Z&X-Amz-Expires=900&X-Amz-Security-Token=AgoGb3JpZ2luEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSKAAiu5qly%2B3bnnM4VfJ7DDRFHIuOuue5kkz7vK1Nz9fCKfI%2FiiKfVGRiidGBxEIPSzDWcA8BCHKJ7MdXupbaIK45P23MdI5FBhGixJKr4bxDvZn2F95iQs86hlqXsQip9lN5ICr6NHBRjwAEOibmjKM5q%2BvI5YzTr%2FPMC8caRAjFAcaybmMTrSs9JtnhNjw3WaJR40%2B8fcmyJmFqxwHeEUpsZ7MdPqMXvNave6Yzi4GaQ%2BhMt7NGmscgZ07m%2FNTETFiLqhY1sl2W3Fe0r%2BBf%2F9GutG706tuuXrUuegWDoqq90Uy9jQ2%2FD%2B%2FDkyanogBLiGnp6uOUIwuE6gutKA0%2F3Xt1UquAUIQhAAGgw2OTU3NDY0MjkwMTIiDM%2B6V%2Fer52vkEjCptCqVBSzV7sU8GrSN8PCDRJoN4Yxsw7iOFL70p1QkRzPAPnZTvLQ0DlBW0kHx528EHgnkqnLchy1JLRF82wD9A7KSou4FcLZwZTqO%2BWQWmRLJtVEWKWy9RDGljb7nQ2MPSJhtZGi6pt2saIThS7gbR2xQsR4p1PcHWoIA6b6eteqIePEinKwcR%2FLZwCvTlgdUotWoKOqCOiY3lzFys%2Fl67HFO57GyjTCj0B2LAh%2FgyqkJXryPCQISCMZEW53L8%2FUpPgVvE54kAq0UjB%2FsneUEynREFRQTQB8VlMi3eqnY%2F7uSS%2Br278h%2F3tv55Ykx2BdCVnQkAJkld%2BdJ9%2BG0QqJyU%2BuMRGheUnZG99Wh4devuVMi%2FJZpQGfQvW1HvV4dqHMHMbEr%2BP5bEoy5FJmpACyoaR0PamOzQz02PxxhZsB2r4e%2Bj0J1Vof1Yg3CNYuu%2FOEZH%2FASwNW5rbXkg0Sck%2B2hij1SFGQZGbGTotRbaqgkGVOe5j1putQGz3hhbN7LkHlr0jTJ0sU1yI81ZSQaFDmizpKbI26dPOiXc%2F6C2wDG2zi6248hOBh7mZqlExnNKzmXitlRYQRwurfi%2FVXUtWMPT7VmrFVu6h0iCl5YcCNcV0Hhx3dYE%2FFst74jAqBoRlGmzlodRQ%2FHTwPNMIYQ0Cnxz0S5Lyn5Om0nz3JgYo90g%2F1sLh4UoMU7KktnvyXDIL%2FQUfb%2F4Q1ANdunn0oGTTfab4ZzRu9%2FTwHpflXSZayCiEdSUmxHb6grzfvqQjNJsnVisacM6uut4Bkjrr6qRvbk6%2Fw6OLTVVurGJ4mWyRBf2UuODixKUN5ong1WakXWezPDkRnwFwINsVp66Zolt%2BiLfJnZhcl0Eu4lXPHOsIozpDZl2aOws%2BQjEYYwntT%2B3wU%3D&X-Amz-Signature=70237a8af91455d9a289c2273ee26858ff3c16e786451e0c07a3d59ea702b048&X-Amz-SignedHeaders=host

 
Amplify.configure({
    Auth: {
      mandatorySignIn: false,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      identityPoolId: config.cognito.IDENTITY_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    Storage: {
      region: config.s3.REGION,
      bucket: config.s3.BUCKET,
      identityPoolId: config.cognito.IDENTITY_POOL_ID
    },
    API: {
      endpoints: [
        {
          name: "Content",
          endpoint: config.apiGateway.URL,
          region: config.apiGateway.REGION
        },
      ]
    }
  });

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );

serviceWorker.unregister();
