"use strict";

var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>The First React Components.</h1>
                <p>This is a test done to have the React component in the main page</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more...</Link>
            </div>
        );
    }
});

module.exports = Home;