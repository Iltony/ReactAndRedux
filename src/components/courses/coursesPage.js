"use strict";

var React = require("react");

var Router = require("react-router");
var Link = Router.Link;

 var CourseActions = require('../../actions/courseActions');
 var CourseStore = require('../../stores/courseStore');
 var CourseList = require("./courseList");

 var Courses = React.createClass({

    getInitialState: function() {
        return { courses: CourseStore.getAllCourses() };
    },

    _onChange: function() {
        this.setState({ courses: CourseStore.getAllCourses() });
    },

    componentWillMount: function(){
        CourseStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        CourseStore.removeChangeListener(this._onChange);
    },

    render: function() {
        // var createCourseRow = function(course) {
        //     return (
        //         <tr key={course.id}>
        //             <td> <a href={"/#courses/" + course.id}>{course.id}</a></td>
        //             <td> { course.title } </td>
        //             <td> { course.watchHref } </td>
        //             <td> { course.author.name } </td>
        //             <td> { course.length } </td>
        //             <td> { course.category } </td>
        //         </tr>
        //     );
        // };

        return (
            <div>
                <h1>Courses</h1>
                <Link to="addCourse" className="btn btn-default">Add Course</Link>
                <CourseList courses={this.state.courses}/>
            </div>
        );
    }
});
 
module.exports = Courses;
