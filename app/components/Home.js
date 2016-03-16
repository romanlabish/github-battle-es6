var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContaier = require('../components/MainContainer');

var Home = React.createClass({
  render: function() {
    return (
      <MainContaier>
        <h1>Github battle </h1>
        <p className="lead">Some fancy motto</p>
        <Link to="/playerOne">
          <button type="button" className="btn btn-large btn-success">Get started!</button>
        </Link>
      </MainContaier>
    );
  }
});

module.exports = Home;
