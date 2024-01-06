import React from 'react'
import Country from './Components/Country';

const App = () => {

  var countryArray = ["United States", "Canada", "United Kingdom", "Germany", "France", "Japan", "China", "India", "Brazil", "Australia"
  ];

  return (
    <div>
      <Country country={countryArray} />
    </div>
  )
}

export default App
