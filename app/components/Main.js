import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../main.css'

const Main = React.createClass({
  propTypes : {
    children: PropTypes.node,
    location: PropTypes.object
  },
  render () {
    return (
      <div className="main-container">
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500} >
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Main;
