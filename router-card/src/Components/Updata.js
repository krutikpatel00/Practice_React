import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
const Updata = () => {

      let dataId = useLocation();
      console.log({ dataId });
      let Navgiation = useNavigate()
      const [dataUpadta, setDataUpadata] = useState({});
      const [dataSetUpdata, setdataSetUpadata] = useState([])
      useEffect(() => {
            const data = JSON.parse(sessionStorage.getItem('Employee'));
            setdataSetUpadata(data != null ? data : [])
            setDataUpadata({ ...dataUpadta, email: dataId.state.str[0].email, password: dataId.state.str[0].password })
      }, []);


      const getInputValue = (e) => {

            let name = e.target.name
            let value = e.target.value

            setDataUpadata((prevData) => ({ ...prevData, [name]: value, id: dataId.state.str[0].id }));
      };
      const handleFormSubmit = (e) => {
            e.preventDefault();

            let pos = dataSetUpdata.findIndex((data) => data.id === dataId.state.str[0].id)
            console.log(pos);
            dataSetUpdata[pos] = dataUpadta;
            setdataSetUpadata([...dataSetUpdata])
            sessionStorage.setItem('Employee', JSON.stringify(dataSetUpdata))
            Navgiation('/view')
      };
      console.log(dataSetUpdata);
      console.log(dataUpadta);
      return (
            <div >
                  <Container>
                        <h2>Employee Details Form</h2>
                        <Row className='justify-content-center align-items-center'>
                              <Col className='col-6'>
                                    <Form onSubmit={(e) => handleFormSubmit(e)}>
                                          <Row className="mb-3">
                                                <Form.Group controlId="formGridEmail">
                                                      <Form.Label>Email</Form.Label>
                                                      <Form.Control
                                                            type="email"
                                                            placeholder="Enter email"
                                                            name='email'
                                                            onChange={(e) => getInputValue(e)}
                                                            value={dataUpadta.email}
                                                      />
                                                </Form.Group>

                                                <Form.Group controlId="formGridPassword">
                                                      <Form.Label>Password</Form.Label>
                                                      <Form.Control
                                                            type="password"
                                                            placeholder="Password"
                                                            name='password'
                                                            onChange={(e) => getInputValue(e)}
                                                            value={dataUpadta.password}
                                                      />
                                                </Form.Group>
                                          </Row>

                                          <Button variant="primary" type="submit">
                                                updata
                                          </Button>
                                    </Form>
                              </Col>
                        </Row>
                  </Container>
            </div>
      )
}

export default Updata