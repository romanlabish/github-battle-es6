import React, { PropTypes } from 'react'
import { space }  from '../styles'
import UserDetails from '../components/UserDetails'
import UserDetailsWrapper from '../components/UserDetailsWrapper'
import { Link } from 'react-router'
import MainContaier from '../components/MainContainer'
import Loading from'../components/Loading'

function StartOver() {
  return (
    <div className="col-sm-12" style={space}>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  );
}

function Tie() {
  return (
    <MainContaier>
      <h1>It's a tie</h1>
      <StartOver />
    </MainContaier>
  );
}

function Results({isLoading, scores, playersInfo}) {
  if(isLoading === true) {
    return (
      <Loading />
    );
  }

  if(scores[0] === scores[1]) {
    return (
      <Tie scores={scores} playersInfo={playersInfo}/>
    );
  }

  const winningIndex = scores[0] > scores[1] ? 0 : 1;
  const losingIndex = (winningIndex + 1) % 2;
  return (
    <MainContaier>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={scores[winningIndex]} info={playersInfo[winningIndex]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={scores[losingIndex]} info={playersInfo[losingIndex]}/>
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContaier>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

export default Results
