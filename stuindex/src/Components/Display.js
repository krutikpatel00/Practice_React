import React from 'react'
import StduntDate from './StduntDate'

const Display = ({ dataStu, upDatevalue, deleteData }) => {

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
                              <StduntDate dataStu={dataStu} upDatevalue={upDatevalue} deleteData={deleteData} />
                        </tbody>
                  </table>
            </>
      )
}

export default Display