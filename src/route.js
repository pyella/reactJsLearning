/**
 * Created by PY028031 on 8/14/2016.
 */

"use strict";

var React = require("react");
var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require("./components/app")}>
        <DefaultRoute handler={require("./components/homePage")}/>
        <Route name="authors" handler={require("./components/authors/authorPage")}> </Route>
        <Route name="addAuthor" path="author" handler={require("./components/authors/manageAuthorPage")}> </Route>
        <Route name="manageAuthor" path="author/:id" handler={require("./components/authors/manageAuthorPage")}> </Route>
        <Route name="about" handler={require("./components/about/aboutPage")}> </Route>
        <NotFoundRoute handler={require("./components/notFound")} />
        <Redirect from="about-us" to="about"> </Redirect>
        <Redirect from="awthurs" to="authors"> </Redirect>
        <Redirect from="about/*" to="about"></Redirect>
    </Route>
);

module.exports = routes;
