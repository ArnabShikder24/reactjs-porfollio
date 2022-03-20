import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import PrivacySection from '../components/PrivacySection/PrivacySection';
import Footer from '../components/Footer/Footer';

class PrivacyPage extends Component {
    componentDidMount() {
        window.scroll( 0, 0 )
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title='Privacy Policy'></TopNavigation>
                <PageTop TopPageTitle='Privacy Policy'></PageTop>
                <PrivacySection></PrivacySection>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default PrivacyPage;