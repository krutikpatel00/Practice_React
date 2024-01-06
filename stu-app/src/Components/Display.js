import React from 'react'
import StduntDate from './StduntDate'

const Display = ({ dataStu, deleteData, upDatevalue }) => {
      return (
            <>
                  <table>
                        <thead>
                              <tr>
                                    <th>no</th>
                                    <th>name</th>
                                    <th>age</th>
                                    <th>delet</th>
                                    <th>update</th>
                              </tr>
                        </thead>
                        <tbody>
                              <StduntDate dataStu={dataStu} deleteData={deleteData} upDatevalue={upDatevalue} />
                        </tbody>
                  </table>
            </>
      )
}

export default Display