import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams } from 'react-router-dom';





const StudentUpDate = () => {
      const { eid } = useParams()
      const navigation = useNavigate()
      const [student, setStudent] = useState({})
      console.log(eid);

      useEffect(() => {
            let data = JSON.parse(localStorage.getItem('StuData'))
            if (data == null) {
                  setStudent({})
            } else {
                  const index = data.findIndex((data) => data.id == eid)
                  console.log(index);
                  setStudent(data[index])
            }
      }, [])

      const getInputValue = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setStudent({ ...student, [name]: value })
      }
      const DataSubmitUpData = (e) => {
            e.preventDefault()
            let data = JSON.parse(localStorage.getItem('StuData'))
            if (data == null) {
                  setStudent({})
            } else {
                  const index = data.findIndex((data) => data.id == eid)
                  data[index] = student
                  localStorage.setItem('StuData', JSON.stringify(data))
            }
            navigation('/view')

      }
      return (
            <Container>
                  <div className='text-center py-4 '>
                        <h2>STUDEND DATA EDIT </h2>
                  </div>
                  <Row>
                        <Col >
                              <Form method='post' onSubmit={(e) => DataSubmitUpData(e)}>
                                    <Row className="mb-3">
                                          <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                      type="text"
                                                      name='username'
                                                      placeholder="Enter username"
                                                      onChange={(e) => getInputValue(e)}
                                                      value={student.username}
                                                />
                                          </Form.Group>

                                          <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                      type="text"
                                                      name='email'
                                                      placeholder="Enter email"
                                                      onChange={(e) => getInputValue(e)}
                                                      value={student.email}
                                                />
                                          </Form.Group>
                                    </Row>
                                    <Button variant="primary" type="submit">
                                          Submit
                                    </Button>
                              </Form>
                        </Col>
                  </Row>
            </Container>
      )
}

export default StudentUpDate