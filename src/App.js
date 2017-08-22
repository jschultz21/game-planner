import React, { Component } from 'react';
import './App.css';
import schedule from './schedule.json';
import teams from './teams.json';
import Game from './game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeam: ""
    };
  }

  render() {
    const allGames = schedule.games;

    let teamNames = [];
    teams.map(team => teamNames.push(team.teamName));
    let options = [];
    for (var name in teamNames) {
      options.push(
        <option value={teamNames[name]}>{teamNames[name]}</option>
      )
    }

    let thisTeamsGames = [];
    allGames.map(game => {
      const selectedTeamPlaying = ((game.home.name === this.state.selectedTeam) || (game.away.name === this.state.selectedTeam) )
      if (selectedTeamPlaying) {
        thisTeamsGames.push(game);
      }
    });

    const games = thisTeamsGames.map(game => {
      console.log(game);
      return (
        <Game
          home={game.home}
          away={game.away}
          scheduledFor={game.scheduled}
          />
        )
    });

    return (
      <div className="App">
        <select name="teams"
          value={this.state.selectedTeam}
          onChange={ e => this.setState({ selectedTeam: e.target.value })}
        >
          {options}
        </select>
        {games}
      </div>
    );
  }
}

export default App;
