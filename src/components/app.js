/**
 * Created by PY028031 on 8/14/2016.
 */

/*eslint-disable strict */ //Disabling check because we cant run strict mode. Need global vars
var Header = require("./common/header");
var RouteHandler = require("react-router").RouteHandler;
$ = JQuery = require("jquery");
var React = require("react");
var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <RouteHandler> </RouteHandler>
                </div>
            </div>
        );
    }
});

module.exports = App;