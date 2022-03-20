import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import TermsAndCondition from '../components/TermsAndCondition/TermsAndCondition';
import Footer from '../components/Footer/Footer';

class TermsAndConditionPage extends Component {
    componentDidMount() {
        window.scroll( 0, 0 )
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title='Terms And Condition'></TopNavigation>
                <PageTop TopPageTitle='Terms Of Use'></PageTop>
                <TermsAndCondition></TermsAndCondition>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default TermsAndConditionPage;