import React from 'react'

const Gradfather = (props) => {
      return (
            <div>
                  <h2>Gradfather Componets</h2>
                  <ol>
                        <li>{props.fg.Name}</li>
                        <li>{props.fg.age}</li>
                  </ol>
            </div>
      )
}

export default Gradfather