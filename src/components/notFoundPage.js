"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFound = React.createClass({
    render: function () {
        return (
                <div className="container-fluid">
                        <h1>Page Not Found</h1>
                        <p>Sorry, seems there is nothing to see...</p>
                        <p><Link to="app">Back to Home</Link></p>
                </div>
        );
    }
});

module.exports = NotFound;