
import Routes from "./Routes";
import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
    
  }
  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

    state = {
      sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => { /*passing a function to setState is a way to access a prevState(which is passed into the function by react).  And and the bad way: this.setState({sideDrawerOpen: !this.state.sideDrawerOpen}); */
      return {sideDrawerOpen: !prevState.sideDrawerOpen}; /* returning an object that updates the state */
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
  
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} /> /* passing a click prop and pointing to a backdropClickHandler */
    }
    return (
     
     
      /* !this.state.isAuthenticating && */
      <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> {/* https://www.youtube.com/watch?v=l6nmysZKHFU 36.35 not executing just passing a prop to a Toolbar which holds the button*/}
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {sideDrawer}
      {backdrop} 
      <main style={{marginTop: '64px'}}></main>

      <div className="App container-fluid">
        
        {/* <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.state.isAuthenticated
                ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                : <Fragment>
                    <LinkContainer to="/signup">
                      <NavItem>Signup</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                  </Fragment>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
        <Routes childProps={childProps} />
      </div>
      </div>
    );
  }
  }

  export default withRouter(App);