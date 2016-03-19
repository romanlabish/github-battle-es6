import React, { PropTypes } from 'react'

function UserDetailsWrapper({header, children}) {
  return (
    <div className="col-sm-6">
      <p className="lead">{header}</p>
      {children}
    </div>
  );
}

UserDetailsWrapper.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node
}

export default UserDetailsWrapper
