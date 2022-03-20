import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import RefundSection from '../components/RefundSection/RefundSection';
import Footer from '../components/Footer/Footer';

class RefundPage extends Component {
    componentDidMount() {
        window.scroll( 0, 0 )
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title='Refund Policy'></TopNavigation>
                <PageTop TopPageTitle='Refund Policy'></PageTop>
                <RefundSection></RefundSection>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default RefundPage;