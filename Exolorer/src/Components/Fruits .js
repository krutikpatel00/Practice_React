import React from 'react'

const Fruits = ({ fruits }) => {
      return (
            <div className='text-center'>
                  <h2 className='text-4xl'>Fruits</h2>
                  <p>fruits name : {fruits.Name}</p>
                  <p>fruits color : {fruits.Color}</p>
            </div>
      )
}

export default Fruits 