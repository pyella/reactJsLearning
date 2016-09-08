/**
 * Created by PY028031 on 8/7/2016.
 */
"use strict";
var React = require("react");
var About = React.createClass({
    statics: {
        willTransitionTo: function transitionTo (transition, params, query, callback) {
            if(!confirm("Are you sure you want to read a page that\'s this boring?")) {
                transition.abort();
            }
            else {
                callback();
            }
        },
        willTransitionFrom: function transitionFrom (transition, component) {
            if(!confirm("Are you sure you want to leave a page that\'s this exciting?")) {
                transition.abort();
            }
        }
    },
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses following technologies
                    <ul>
                        <li>NodeJs </li>
                        <li>Gulp</li>
                        <li>BootStrap</li>
                        <li>Browserify</li>
                        <li>react</li>
                        <li>react router</li>
                        <li>Flux</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;
