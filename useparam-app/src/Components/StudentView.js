import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const StudentView = () => {
      const [AllStudent, setAllStudent] = useState([]);

      useEffect(() => {
            getdata()

      }, [setAllStudent])

      const getdata = () => {
            let data = JSON.parse(localStorage.getItem('StuData'))

            if (data == null) {
                  setAllStudent([])
            } else {

                  setAllStudent(data)
            }
      }
      console.log(AllStudent);
      const StudentDataDelete = (id) => {
            let data = AllStudent.filter((data) => data.id !== id)
            localStorage.setItem('StuData', JSON.stringify(data))
            getdata()
      }
      return (
            <div>
                  <Container>
                        <Row>
                              <Col>
                                    <Table striped bordered hover variant="dark">
                                          <thead key={'123'}>
                                                <tr>
                                                      <th>#</th>
                                                      <th>username</th>
                                                      <th>email</th>
                                                      <th>action</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                {
                                                      AllStudent.map((item, pos) => {
                                                            return (
                                                                  <tr>
                                                                        <th>{pos + 1}</th>
                                                                        <th>{item.username}</th>
                                                                        <th>{item.email}</th>
                                                                        <th>
                                                                              <button className='py-2 text-black px-3 mx-2 bg-body rounded-3 border-0 fw-bold' onClick={() => StudentDataDelete(item.id)}>update</button>
                                                                              <Link className='text-decoration-none py-2 text-black px-3 mx-2 bg-body rounded-3' to={'/updata/' + item.id}>update</Link>
                                                                        </th>
                                                                  </tr>

                                                            )
                                                      })
                                                }
                                          </tbody>
                                    </Table>
                              </Col>
                        </Row>
                  </Container>
            </div>
      )
}

export default StudentView