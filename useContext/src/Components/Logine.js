import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


const Logine = () => {
      const [userName, setUserName] = useState('')
      const [Password, setPassword] = useState('')

      const { setUser } = useContext(UserContext)
      const { abc } = useContext(UserContext)
      const headlaSubmite = (e) => {
            e.preventDefault()
            setUser({ userName, Password })
      }
      return (
            <div>
                  <input
                        type="text"
                        placeholder='username'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                  />
                  <input
                        type="text"
                        placeholder='Password'
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                  />
                  <button onClick={(e) => headlaSubmite(e)}>click</button>
                  <p>{abc}</p>
            </div>
      )
}

export default Logine