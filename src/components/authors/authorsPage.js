"use strict";

var React = require("react");

var Router = require("react-router");
var Link = Router.Link;

// var AuthorApi = require('../../api/authorApi');
 var AuthorActions = require('../../actions/authorActions');
 var AuthorStore = require('../../stores/authorStore');
 var AuthorList = require("./authorList");

 var Authors = React.createClass({

    getInitialState: function() {
        return { authors: AuthorStore.getAllAuthors() };
    },

    _onChange: function() {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    },

    // componentDidMount: function() {
    //     if (this.isMounted()){
    //         this.setState({ authors: AuthorApi.getAllAuthors() });
    //     }
    // },

    componentWillMount: function(){
        AuthorStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        AuthorStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    <td> <a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td> { author.firstName } {author.lastName} </td>
                </tr>
            );
        };

        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});
 
module.exports = Authors;
