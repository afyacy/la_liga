// Render Table
import React, { useState, useEffect } from 'react'

export default function Table({data}) {
  const [sortType, setSortType] = useState("1")
  const [visible, setVisible] = useState(3)

  const calculateAge = dateOfBirth => {
    const birthDate = new Date(dateOfBirth); 
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder === -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
  }

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue +3)
  }

  useEffect(() => {
    switch (sortType) {
      case "1":
        data.sort(dynamicSort("name"))
        break
      case "2":
        data.sort(dynamicSort("-name"))
        break
      default:
        break
    }
  }, [data, sortType])

  return (
    <>
    <table className="w-full text-left font-avenir">
      <thead>
        <tr className="text-gray-300 uppercase">
          <th className="flex py-6 font-thin">
            Name
            <button className="px-1" onClick={() => setSortType('2')}>
              <img src="https://i.postimg.cc/18XMBq9g/increasing-symbol-3x.png" alt="asc" className="h-2.5"/>
            </button>
            <button className="fill-gray-400" onClick={() => setSortType('1')}>
              <img src="https://i.postimg.cc/KRG4d73Y/decreasing-symbol-3x.png" alt="desc" className="h-2.5"/>
            </button>
          </th>
          <th className="font-thin">Nationality</th>
          <th className="font-thin">Position</th>
          <th className="font-thin">Age</th>
        </tr>
      </thead>
      <tbody>
        {
          data.slice(0,visible).map((item) => (
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
    <button className="flex m-auto text-gray-400 pb-6" onClick={showMoreItems}>SEE MORE</button>
    </>
  )
}

 