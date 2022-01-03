// For listing players in a team
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Table from './Table'

export default function Team() {
  // Assign states and constants
  const {id} = useParams()
  const [squad, setSquad] = useState([])
  const [name, setName] = useState()
  const [query, setQuery] = useState("")
  const [filteredResults, setFilteredResults] = useState([]);


  // Get players and team name from API
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}teams/${id}`, {
      headers: {
        "X-Auth-Token": `${process.env.REACT_APP_API_TOKEN}`
      }
    })
    .then(res => {
      setName(res.data.name)
      setSquad(res.data.squad);
    })
  }, [])

  function search(query) {
    if(query !== '') {
      const filteredData = squad.filter(row => row.name.toLowerCase().indexOf(query) > -1)
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(squad)
    }
  }


  // Display loading while getting players
  if (!squad) {
    return <p className="m-auto">Loading</p>
  } else {
  // Display players
    return (
      <div className="w-full">
        <div className="flex">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 mt-4"
              width="24" height="24"
              viewBox="0 0 24 24">    <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path></svg>
            </span>
            <input className="placeholder:italic placeholder:text-gray-400 block bg-gray-100 w-full border border-gray-300 rounded-full py-2 pl-9 pr-3 mt-2 shadow-sm focus:outline-none focus:border-blue-800 focus:ring-blue-800 focus:ring-1 sm:text-sm" placeholder="Search" type="text" name="search" value={query} onChange={(e) => {
              setQuery(e.target.value)
              search(e.target.value)}}/>
          </label>
          <h1 className="py-4 px-40 font-avenir font-bold text-liga-gray text-xl">{name}</h1>
        </div>
        {query.length > 1 ? (
          <Table
            data={filteredResults}
          />
        ) : (
          <Table
            data={squad}
          />
        )}
        <button className="flex m-auto text-gray-400 pb-6">SEE MORE</button>
      </div>
    )
  }
  
}
