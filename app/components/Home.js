import React from 'react'
import { Link } from 'react-router'
import MainContaier from '../components/MainContainer'

const Home = React.createClass({
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

export default Home
