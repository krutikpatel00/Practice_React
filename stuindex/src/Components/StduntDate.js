import React from 'react'

const StduntDate = ({ dataStu, deleteData, upDatevalue }) => {

      return (
            <>
                  {dataStu.map((v, i) => {
                        return (

                              <tr key={i}>
                                    <td>{++i}</td>
                                    <td>{v.name}</td>
                                    <td>{v.age}</td>
                                    <td><button onClick={() => deleteData(--i)}>delete</button></td>
                                    <td><button onClick={() => upDatevalue(--i)}>update</button></td>
                              </tr>

                        )
                  })}
            </>
      )
}

export default StduntDate