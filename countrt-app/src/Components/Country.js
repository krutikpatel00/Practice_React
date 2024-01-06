import React from 'react'

const Country = (props) => {
      return (
            <div>
                  {props.country.map((item, i) => {
                        return (
                              <p key={i}>{++i} - {item}</p>
                        )
                  })}
            </div>
      )
}

export default Country;