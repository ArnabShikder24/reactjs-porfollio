import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';

class ContactPage extends Component {
    componentDidMount() {
        window.scroll( 0, 0 )
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title='Contact'></TopNavigation>
                <PageTop TopPageTitle='Contact Me'></PageTop>
                <ContactSection></ContactSection>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default ContactPage;