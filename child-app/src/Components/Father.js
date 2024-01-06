import React from 'react'
import Gradfather from './Gradfather'

const Father = (props) => {
      return (
            <>
                  <h2>Father Componets</h2>
                  <ol>
                        <li>{props.cf.Name}</li>
                        <li>{props.cf.age}</li>
                  </ol>
                  <Gradfather fg={props.cg}/>
            </>
      )
}

export default Father