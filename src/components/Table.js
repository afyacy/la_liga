import React from 'react'

export default function Table({data}) {
  
  const calculateAge = dateOfBirth => {
    const birthDate = new Date(dateOfBirth); 
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  function ascByName(data) {
    return data.sort()
  }

  function descByName(data) {
    console.log('desc')
  }

  return (
    <table className="w-full text-left font-avenir">
      <thead>
        <tr className="text-gray-300">
          <th className="flex py-6 font-thin">
            Name
            <button className="fill-gray-400" onClick={() => ascByName(data)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M19.707 14.707A1 1 0 0 0 19 13h-7v2h4.586l-4.293 4.293A1 1 0 0 0 13 21h7v-2h-4.586l4.293-4.293zM7 3.99H5v12H2l4 4 4-4H7zM17 3h-2c-.417 0-.79.259-.937.649l-2.75 7.333h2.137L14.193 9h3.613l.743 1.981h2.137l-2.75-7.333A1 1 0 0 0 17 3zm-2.057 4 .75-2h.613l.75 2h-2.113z"></path></svg>
            </button>
            <button className="fill-gray-400" onClick={() => descByName(data)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 24 24"><path d="M19.707 14.707A1 1 0 0 0 19 13h-7v2h4.586l-4.293 4.293A1 1 0 0 0 13 21h7v-2h-4.586l4.293-4.293zM7 3.99H5v12H2l4 4 4-4H7zM17 3h-2c-.417 0-.79.259-.937.649l-2.75 7.333h2.137L14.193 9h3.613l.743 1.981h2.137l-2.75-7.333A1 1 0 0 0 17 3zm-2.057 4 .75-2h.613l.75 2h-2.113z"></path></svg>
            </button>
          </th>
          <th className="font-thin">Nationality</th>
          <th className="font-thin">Position</th>
          <th className="font-thin">Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="text-gray-600 font-bold py-6">{item.name}</td>
            <td className="text-gray-400">{item.nationality}</td>
            <td className="text-gray-400">{item.position}</td>
            <td className="text-gray-400">{calculateAge(item.dateOfBirth)}</td>
          </tr>
        ))   
        }
      </tbody>
    </table>
  )
}

 