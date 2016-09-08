/**
 * Created by PY028031 on 8/7/2016.
 */

"use strict";
var React = require("react");
var Link = require("react-router").Link;

var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1> Prashanth Site administration</h1>
                <p> React, React router and flux for ultra - responsive web apps</p>
                <Link to="about" className="btn btn-primary btn-lg"> Learn more </Link>
            </div>
        );
    }
});

module.exports = Home;