

import Logine from './Components/Logine'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (

    <UserContextProvider>
      <Logine />
      <Profile />
    </UserContextProvider>

  )
}

export default App