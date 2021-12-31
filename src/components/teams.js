// Display teams
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Teams extends Component {
  state = {
    teams: []
  }

  componentDidMount() {
    axios.get(`https://api.football-data.org/v2/teams`, {
      headers: {
        "X-Auth-Token": '5f3ece105a1142af826ed06aa1872c0c'
      }
    })
    .then(res => {
        const teams = res.data.teams;
        this.setState({ teams });
    })
  }

  render() {
    return (
      <div>
        { 
          this.state.teams.map(team => 
          <li key={team.id}>
            <Link to={`/team/${team.id}`}>{team.name}</Link>
          </li>
        )}
      </div>
    )
  }
}

