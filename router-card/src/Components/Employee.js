import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';



const Employee = () => {
      const [EmployeeData, setEmplyeeData] = useState({})
      const navigation = useNavigate()



      const getInputValue = (e) => {
            const name = e.target.name
            const value = e.target.value;
            const id = Math.floor(Math.random() * 10000)
            const data = { ...EmployeeData, [name]: value, id: id }
            setEmplyeeData(data)
      }

      const getDataSubmit = (e) => {
            e.preventDefault()
            let data = sessionStorage.getItem('Employee')
            let str = JSON.parse(data)
            if (data === null) {
                  sessionStorage.setItem('Employee', JSON.stringify([EmployeeData]))
            } else {
                  let setdata = [...str, EmployeeData]
                  sessionStorage.setItem('Employee', JSON.stringify(setdata))
            }
            navigation('/view')
      }
      return (
            <div style={{ backgroundColor: '#323234', color: 'white' }}>
                  <Container>
                        <h2>Employee Details Form</h2>
                        <Row className='justify-content-center align-items-center'>
                              <Col className='col-6'>
                                    <Form onSubmit={(e) => getDataSubmit(e)}>
                                          <Row className="mb-3">
                                                <Form.Group controlId="formGridEmail">
                                                      <Form.Label>Email</Form.Label>
                                                      <Form.Control
                                                            type="email"
                                                            placeholder="Enter email"
                                                            name='email'
                                                            onChange={(e) => getInputValue(e)}
                                                      />
                                                </Form.Group>

                                                <Form.Group controlId="formGridPassword">
                                                      <Form.Label>Password</Form.Label>
                                                      <Form.Control
                                                            type="password"
                                                            placeholder="Password"
                                                            name='password'
                                                            onChange={(e) => getInputValue(e)}
                                                      />
                                                </Form.Group>
                                          </Row>

                                          {/* <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control placeholder="1234 Main St" />
                                          </Form.Group>

                                          <Form.Group className="mb-3" controlId="formGridAddress2">
                                                <Form.Label>Address 2</Form.Label>
                                                <Form.Control placeholder="Apartment, studio, or floor" />
                                          </Form.Group>

                                          <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridCity">
                                                      <Form.Label>City</Form.Label>
                                                      <Form.Control />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridState">
                                                      <Form.Label>State</Form.Label>
                                                      <Form.Select defaultValue="Choose...">
                                                            <option>Choose...</option>
                                                            <option>...</option>
                                                      </Form.Select>
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridZip">
                                                      <Form.Label>Zip</Form.Label>
                                                      <Form.Control />
                                                </Form.Group>
                                          </Row>

                                          <Form.Group className="mb-3" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                          </Form.Group> */}

                                          <Button variant="primary" type="submit">
                                                Submit
                                          </Button>
                                    </Form>
                              </Col>
                        </Row>
                  </Container>
            </div>
      )
}

export default Employee