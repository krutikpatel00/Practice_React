import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import { Link, useNavigate } from 'react-router-dom';

const EmployeeView = () => {
      const Navigation = useNavigate()
      const [dataViews, setDataView] = useState([])

      useEffect(() => {
            const data = JSON.parse(sessionStorage.getItem('Employee'));
            setDataView(data != null ? data : [])
      }, [])

      const DataDelete = (id) => {
            let deleteEmployee = dataViews.filter((data) => {
                  return id !== data.id
            })
            setDataView(deleteEmployee)
            sessionStorage.setItem('Employee', JSON.stringify(deleteEmployee))

      }
      const DataUpdata = (id) => {
            let matchdata = dataViews.filter((data) => {
                  return id === data.id
            })
            Navigation('/updata', { state: { str: matchdata } })
      }
      return (
            <div>
                  <Container>
                        <div className='py-5 text-center'>
                              <h2>Employee data </h2>
                        </div>
                        <Table striped bordered hover>
                              <thead>
                                    <tr>
                                          <th>#</th>
                                          <th>email</th>
                                          <th>password</th>
                                          <th>aciton</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {
                                          dataViews.map((items, pos) => {
                                                return (
                                                      <tr>
                                                            <td>{++pos}</td>
                                                            <td>{items.email}</td>
                                                            <td>{items.password}</td>
                                                            <td>
                                                                  <button onClick={() => DataDelete(items.id)}>Delete </button>
                                                                  <button onClick={() => DataUpdata(items.id)}>Updata</button>
                                                            </td>
                                                      </tr>
                                                )
                                          })
                                    }


                              </tbody>
                        </Table>
                  </Container>
            </div>
      )
}

export default EmployeeView