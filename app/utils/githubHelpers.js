import axios from 'axios'

const id = "YOUR_CLIENT_ID";
const secret = "YOUR_SECRET_ID";
const param = `?client_id=${id}&client_secret=${secret}`;

function getUserInfo(username = 'romanlabish') {
  return axios.get(`https://api.github.com/users/${username + param}`);
}

function getRepos(username = 'romanlabish') {
  return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100'`);
}

function getTotalStars(repos) {
  return repos.data.reduce((prev, current) => prev + current.stargazers_count, 0);
}

async function getPlayersData({login, followers}) {
  try {
    const repos = await getRepos(login);
    const totalStars = await getTotalStars(repos);
    return {
      followers,
      totalStars
    };
  } catch (error) {
    console.warn('Error in githubHelpers', error);
  }

}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ];
}

export async function getPlayersInfo(players) {
  try {
    const info = await Promise.all(players.map((username) => getUserInfo(username)));
    return info.map((user) => user.data);
  } catch (error) {
    console.warn('Error in getPlayersInfo: ', error);
  }
}
export async function battle(players) {
  try {
    const data = await Promise.all(players.map((player) => getPlayersData(player)));
    return await calculateScores(data);
  } catch (error) {
    console.warn('Error in battle', error);
  }

}
