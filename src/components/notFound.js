/**
 * Created by PY028031 on 8/14/2016.
 */

"use strict";
var React = require("react");
var Link = require("react-router").Link;

var notFound = React.createClass({
    render: function () {
        return (
            <div>
                <h1> Page not found </h1>
                <p> Whoops! Sorry, there is nothing to see here.</p>
                <p> <Link to="app"> Back to home</Link> </p>
            </div>
        );
    }
});

module.exports = notFound;
