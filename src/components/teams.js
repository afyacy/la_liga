// For listing teams

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Teams() {
  // setup state of teams
  const [teams, setTeams] = useState()

  // Get teams from API
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

  // Display loading while getting teams
  if (!teams) {
    return <p className="m-auto">Loading</p>
  } else {
  // Display teams
  return (
      <div className="mb-10 font-avenir text-liga-gray">
        <h2 className="font-bold text-xl text-center py-4">Select a team to see its roster</h2>
        <div className="grid grid-cols-4 gap-4 font-semibold">
        {teams.map(team =>
          <div key={team.id} className="hover:font-bold hover:text-blue-800">
            <Link to={`/team/${team.id}`}>{team.name}</Link>
        </div>
        )}
        </div>
      </div>
    )
  }
  
}
