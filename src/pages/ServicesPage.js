import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import Services from '../components/Services/Services'
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';

class ServicesPage extends Component {
    componentDidMount() {
        window.scroll( 0, 0 )
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title='Services'></TopNavigation>
                <PageTop TopPageTitle='Get My Service'></PageTop>
                <Services></Services>
                <ContactSection></ContactSection>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default ServicesPage;