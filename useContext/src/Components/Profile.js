import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

      const { user } = useContext(UserContext)
      const { setabc } = useContext(UserContext)
      return (
            <div>
                  {!user ? <h4>plsece logine</h4> : <h4>welcome {user.userName}</h4>}
                  {setabc('king')}
            </div>
      )
}

export default Profile