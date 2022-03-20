import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import Footer from '../components/Footer/Footer';
import AllProjects from '../components/AllProjects/AllProjects';

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll( 0, 0 )
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title='Portfolio'></TopNavigation>
                <PageTop TopPageTitle='Portfolio'></PageTop>
                <AllProjects></AllProjects>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default PortfolioPage;