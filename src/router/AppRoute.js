import React, { Component, Fragment } from 'react';
import { Route, Switch} from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import CoursesPage from '../pages/CoursesPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import RefundPage from '../pages/RefundPage';
import ServicesPage from '../pages/ServicesPage';
import TermsAndConditionPage from '../pages/TermsAndConditionPage';
class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path='/' component={HomePage}></Route>
                    <Route exact path='/services' component={ServicesPage}></Route>
                    <Route exact path='/courses' component={CoursesPage}></Route>
                    <Route exact path='/portfolio' component={PortfolioPage}></Route>
                    <Route exact path='/contact' component={ContactPage}></Route>
                    <Route exact path='/about' component={AboutPage}></Route>
                    <Route exact path='/Refund' component={RefundPage}></Route>
                    <Route exact path='/Terms' component={TermsAndConditionPage}></Route>
                    <Route exact path='/Privacy' component={PrivacyPage}></Route>
                    <Route exact path='/ProjectDetails' component={ProjectDetailsPage}></Route>
                    <Route exact path='/CourseDetails' component={CourseDetailsPage}></Route>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;