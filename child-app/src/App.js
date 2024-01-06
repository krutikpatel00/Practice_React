import React from 'react'
import Child from './Components/Child'

const App = () => {
  let child = { Name: "mohit", age: 23 }
  let father = { Name: "suresh", age: 44 }
  let gradfather = { Name: "kanu", age: 86 }


  return (
    <div>
      <Child cc={child} ff={father} gg={gradfather} />
    </div>
  )
}

export default App
