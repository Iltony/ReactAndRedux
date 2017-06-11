//"use strict"; 
// because we have to define some global variables like jquery we do not use 'use strict' directive.
$ = jQuery = require('jquery');

var React = require("react");
var Home = require("./components/homePage");
var About = require("./components/about/aboutPage");
var Authors = require("./components/authors/authorsPage");
var Header = require("./components/common/header");

(function(win){

    //this function expression allow us to define the global variables (such jquery) in the global space and all inside the function 
    // still being validate strict

    "use strict"; 

    var App = React.createClass({
    render: function(){
        var Child;

        switch(this.props.route){
            case 'about':
                Child = About;
                break;
            case 'authors':
                Child = Authors;
                break;
            default:
                Child = Home;
                break;
        }

        return (
            <div>
                <Header />
                <Child />
            </div>
        );
    }
});

function render() {
    // takes the value from the route
    var route = win.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
}


// attach to the event hash change, 
win.addEventListener('hashchange', render);
render();

})(window);
