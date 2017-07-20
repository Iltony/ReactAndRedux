"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var AuthorStore = require('../../stores/authorStore');
var _ = require('lodash');
var toastr = require('toastr');

var ManageCourses = React.createClass({

    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function (transition, component) {
            if (component.state.dirty && !confirm('Leave without saving')) {
                transition.abort();
            }
        }
    },

    getInitialState: function () {
        return {
            course: { id: "", title: "", watchHref: "", author: { id: "", name: "" }, length: "", category: "" },
            authors: [],
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function () {
        var courseId = this.props.params.id; // from the path '/course:id'
        var allAuthors = AuthorStore.getAllAuthors();

        if (courseId) {
            this.setState({ course: CourseStore.getCourseById(courseId), authors: allAuthors });
        }
    },

    setCourseState: function (event) {
        this.setState({ dirty: true });
        var field = event.target.name;
        var value = event.target.value;

        this.state.course[field] = value;
        return this.setState({ course: this.state.course });
    },
    
    setAuthorToCourse: function (event) {
        this.setState({ dirty: true });

        var author = AuthorStore.getAuthorById(event.target.value);

        this.state.course.author = {
            id: author.id,
            name: author.firstName + ' ' + author.lastName
        };

        return this.setState({ course: this.state.course });
    },

    courseFormIsValid: function () {
        var formIsValid = true;

        this.state.errors = {}; //Clears any previous errors

        if (this.state.course.title.length < 3) {
            this.state.errors.title = 'First name must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.course.watchHref.length < 3) {
            this.state.errors.watchHref = 'WatchHRef must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.course.author.id <= 0) {
            this.state.errors.author = 'Must select an author';
            formIsValid = false;
        }

        if (this.state.course.length.length < 3) {
            this.state.errors.length = 'Length must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.course.category.length < 3) {
            this.state.errors.category = 'Category must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({ errors: this.state.errors });

        return formIsValid;
    },

    saveCourse: function () {
        event.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        if (this.state.course.id) {
            CourseActions.updateCourse(this.state.course);
        } else {
            CourseActions.createCourse(this.state.course);
        }

        this.setState({ dirty: false });
        toastr.success('Course saved.');
        this.transitionTo('courses');
    },

    render: function () {
        return (
            <CourseForm
                authors={this.state.authors}
                course={this.state.course}
                onChange={this.setCourseState}
                onChangeAuthor={this.setAuthorToCourse}
                onSave={this.saveCourse}
                errors={this.state.errors} />
        );
    }
});

module.exports = ManageCourses;
