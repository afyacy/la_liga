// Display teams
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Teams() {
  const [teams, setTeams] = useState()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}teams`, {
      headers: {
        "X-Auth-Token": `${process.env.REACT_APP_API_TOKEN}`
      }
    })
    .then(res => {
      setTeams(res.data.teams)
    })
  }, [])

  if (!teams) {
    return <p>Loading</p>
  } else {
  return (
    <div>
      {teams.map(team =>
        <li key={team.id}>
          <Link to={`/team/${team.id}`}>{team.name}</Link>
      </li>
      )}
    </div>
  )
  }
  
}
