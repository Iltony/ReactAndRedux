"use strict";

var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>The First React Components.</h1>
                <p>This is a test done to have the React component in the main page</p>
            </div>
        );
    }
});

module.exports = Home;