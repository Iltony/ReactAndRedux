"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')} >
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="authors" handler={require('./components/authors/authorsPage')} />
        <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
        <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')} />

        <Route name="courses" handler={require('./components/courses/coursesPage')} />
        <Route name="addCourse" path="course" handler={require('./components/courses/manageCoursePage')} />
        <Route name="manageCourse" path="courses/:id" handler={require('./components/courses/manageCoursePage')} />

        <Route name="about" handler={require('./components/about/aboutPage')} />
        <NotFoundRoute handler={require('./components/notFoundPage')} />
        <Redirect from="about-us" to="about"/>
        <Redirect from="awthors" to="authors"/>
        <Redirect from="about/*" to="about"/>
    </Route>
);

module.exports = routes;