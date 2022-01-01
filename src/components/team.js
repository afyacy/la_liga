// For listing players in a team
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Team() {
  // Assign states and constants
  const {id} = useParams()
  const [squad, setSquad] = useState()
  const [name, setName] = useState()

  // Get players and team name from API
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}teams/${id}`, {
      headers: {
        "X-Auth-Token": `${process.env.REACT_APP_API_TOKEN}`
      }
    })
    .then(res => {
      setName(res.name)
      setSquad(res.data.squad);
    })
  }, [id])

  // Output age when given date of birth
  const calculateAge = dateOfBirth => {
    const birthDate = new Date(dateOfBirth); 
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);
    return Math.abs(age.getUTCFullYear() - 1970);
  }
  
  // Display loading while getting players
  if (!squad) {
    return <p className="m-auto">Loading</p>
  } else {
  // Display players
    return (
      <div>
        <h1>{name}</h1>
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
          {squad.map(player =>
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.nationality}</td>
              <td>{player.position}</td>
              <td>{calculateAge(player.dateOfBirth)}</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    )
  }
  
}
