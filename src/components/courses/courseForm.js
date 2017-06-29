"use strict";

var React = require('react');
var Input = require('../common/textInput');

var CourseForm = React.createClass({

    propTypes: {
        course: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function () {
        return (
                <form>
                    <h1>Manage Course</h1>

                    {/*id: "", title: "", watchHref: "", author: { id: "", name: "" }, length: "", category: "" */}
                    <Input 
                        name="title"
                        label="Title"
                        value={this.props.course.title}
                        onChange={this.props.onChange}
                        error= {this.props.errors.title} />

                    <Input 
                        name="watchHref"
                        label="Watch HRef"
                        value={this.props.course.watchHref}
                        onChange={this.props.onChange}
                        error= {this.props.errors.watchHref} />

                    {/*<option value={this.props.author.id} onChange={this.props.onChange} error= {this.props.errors.author}>{this.props.author.name} </option>*/}

                    <Input 
                        name="length"
                        label="Length"
                        value={this.props.course.length}
                        onChange={this.props.onChange}
                        error= {this.props.errors.length} />

                    <Input 
                        name="category"
                        label="Category"
                        value={this.props.course.category}
                        onChange={this.props.onChange}
                        error= {this.props.errors.category} />

                    <input type="submit" className="btn btn-default" value="Save" onClick={this.props.onSave}/>
                </form >
        );
    }
});

module.exports = CourseForm;