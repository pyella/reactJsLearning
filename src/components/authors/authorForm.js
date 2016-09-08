/**
 * Created by PY028031 on 8/21/2016.
 */
"use strict";
var React = require("react");
var Input = require("../common/textInput");
var authorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    render: function () {
        return (
            <form>
                <h1> Manage Author </h1>
                <Input
                    name="firstName"
                    label="firstName"
                    placeholder="Enter First Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName}/>
                <Input
                    name="lastName"
                    label="lastName"
                    placeholder="Enter Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName}/>
                <input
                    type="submit"
                    value="Save"
                    className="btn btn-default"
                    onClick={this.props.onSave}
                />
            </form>
        );
    }
});

module.exports = authorForm;
