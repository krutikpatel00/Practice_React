import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';



const Student = () => {

      const [student, setStudent] = useState({})
      const navigation = useNavigate()

      const getInputValue = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            const id = Math.floor(Math.random() * 10000)
            let data = { ...student, [name]: value, id: id }
            setStudent(data)
      }

      const DataSubmit = (e) => {
            e.preventDefault()
            let data = JSON.parse(localStorage.getItem('StuData'));
            if (data === null) {
                  localStorage.setItem("StuData", JSON.stringify([student]))
            } else {
                  // data.push(student)
                  let allData = [...data, student]
                  localStorage.setItem('StuData', JSON.stringify(allData))
            }
            navigation('view')
      }
      return (
            <Container>
                  <Row>
                        <Col >
                              <Form method='post' onSubmit={(e) => DataSubmit(e)}>
                                    <Row className="mb-3">
                                          <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                      type="text"
                                                      name='username'
                                                      placeholder="Enter username"
                                                      onChange={(e) => getInputValue(e)}
                                                />
                                          </Form.Group>

                                          <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                      type="text"
                                                      name='email'
                                                      placeholder="Enter email"
                                                      onChange={(e) => getInputValue(e)}
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

export default Student