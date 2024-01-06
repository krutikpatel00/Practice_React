import React, { useEffect, useState } from 'react'
import '../../index.css'

export const GItHub = () => {
      const [gitdata, setGitdata] = useState({})
      const [git, setgit] = useState({})
      useEffect(() => {
            fetch(`https://api.github.com/users/krutikpatel00`)
                  .then((res) => res.json())
                  .then((data) => {
                       

                        return setGitdata(data)
                  })
      }, [gitdata])
   
      return (
            <div>
                  <p> krutikpatel00 youser Follower this : {gitdata.following}</p>
                  <img src={gitdata.avatar_url} alt="" className='w-60 rounded-full' />

            </div>
      )
}
