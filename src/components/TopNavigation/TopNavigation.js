import React, { Component, Fragment } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom'
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import whiteLogo from '../../asset/image/navlogo.png';
import blueLogo from '../../asset/image/navlogoscroll.png';
class TopNavigation extends Component {

    constructor(props){
        super()
        this.state = {
            navBarLogoText: 'navLogoText',
            navBarLogo: [whiteLogo],
            navBackground: 'navBackground',
            navVariant: 'dark',
            navBarItem: 'navItem',
            pageTitle: props.title
        }
    }

    onScroll=()=> {
        if(window.scrollY > 100) {
            this.setState({navBarLogoText: 'navLogoTextScroll', navBarLogo: [blueLogo], navBackground: 'navBackgroundScroll', navBarItem: 'navItemScroll', navVariant: 'light'})
        }
        else if(window.scrollY < 100) {
            this.setState({navBarLogoText: 'navLogoText',  navBarLogo: [whiteLogo], navBackground: 'navBackground', navBarItem: 'navItem', navVariant: 'dark'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBackground} fixed='top' collapseOnSelect expand="lg">
                    <Link to='/'><Navbar.Brand className={this.state.navBarLogoText}><img className='navLogo' src={this.state.navBarLogo}/>AR~NAB</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ml-auto'>
                        <Nav.Link><NavLink exact activeStyle={{color: '#17A2B8'}} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color: '#17A2B8'}} className={this.state.navBarItem} to="/services">SERVICES</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color: '#17A2B8'}} className={this.state.navBarItem} to="/courses">COURSES</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color: '#17A2B8'}} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color: '#17A2B8'}} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color: '#17A2B8'}}  className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;