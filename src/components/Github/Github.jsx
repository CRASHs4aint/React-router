
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const Data = useLoaderData()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    fetch('https://api.github.com/users/CRASHs4aint')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUserData(data)
      })
  }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {userData.followers}
      <br />
      <img src={userData.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github


// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/CRASH4saint')
//     return response.json()
// }
