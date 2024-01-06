import React from 'react'
import Father from './Father'

const Child = (props) => {
      return (
            <div>
                  <h2>Child Componets </h2>
                  <ol>
                        <li>{props.cc.Name}</li>
                        <li>{props.cc.age}</li>
                  </ol>
                  <Father cf={props.ff} cg={props.gg} />
            </div>

      )
}

export default Child