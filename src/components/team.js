// Display players
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Team() {
  const {id} = useParams()
  const [players, setPlayers] = useState()
  const [team, SetTeam] = useState()

  useEffect(() => {
    axios.get(`https://api.football-data.org/v2/teams/${id}`, {
      headers: {
        "X-Auth-Token": '5f3ece105a1142af826ed06aa1872c0c'
      }
    })
    .then(res => {
      SetTeam(res.name)
      setPlayers(res.data.squad);
    })
  }, [id])

  const calculate_age = dob => {
    const birthDate = new Date(dob); 
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);
  
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  if (!players) {
    return <p>Loading</p>
  } else {
    return (
      <div>
        <h1>{team}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Nationality</th>
            <th>Position</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player =>
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.nationality}</td>
              <td>{player.position}</td>
              <td>{calculate_age(player.dateOfBirth)}</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    )
  }
  
}
