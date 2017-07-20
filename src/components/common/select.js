"use strict";

var React = require('react');

var Select = React.createClass({    
   
    propTypes: {
        authors: React.PropTypes.array.isRequired,
        onElementChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    }, 

    createAuthorOptionItem: function(author){
        return <option key={author.id} value={author.id}> {author.firstName} - {author.lastName} </option>;
    },

    render: function(){

        var wrapperClass = 'form-group ';

        if(this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-error';
        }

        return (
            <div className={wrapperClass}>
                <label htmlFor = {this.props.name}>{this.props.label}</label>
                <div className='field'>
                    <select onChange={this.props.onElementChange} value={this.props.value}>
                            {this.props.authors.map(this.createAuthorOptionItem, this)}
                    </select>
                    <div className='input'>{this.props.error}</div>
                </div>
            </div>
        );
    }
});

module.exports = Select;