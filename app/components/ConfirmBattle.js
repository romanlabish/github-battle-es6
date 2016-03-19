import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { space } from '../styles'
import UserDetails from '../components/UserDetails'
import UserDetailsWrapper from '../components/UserDetailsWrapper'
import MainContaier from '../components/MainContainer'
import Loading from '../components/Loading'

function ConfirmBattle({isLoading, playersInfo, onInitiateBattle}) {
  return (
    isLoading === true
    ? <Loading text="Waiting" speed={500}/>
    : <MainContaier>
      <h1>Confirm Players</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Player One">
          <UserDetails info={playersInfo[0]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Player Two">
          <UserDetails info={playersInfo[1]}/>
        </UserDetailsWrapper>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12" style={space}>
          <button type="button" className="btn btn-lg btn-success" onClick={onInitiateBattle} >
          Initiate Battle!
          </button>
        </div>
        <div className="col-sm-12" style={space}>
          <Link to="/playerOne">
              <button type="button" className="btn btn-lg btn-danger">Reselect Players</button>
            </Link>
          </div>
        </div>
      </MainContaier>
  );
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
};

export default ConfirmBattle
