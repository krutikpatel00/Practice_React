import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Validation = () => {
      let [InputValue, setInputValue] = useState({})
      let [AllData, setAllData] = useState([])
      let [InputValueError, setInputValueError] = useState({})
      let [Hobbies, setHobbies] = useState([])

      console.log(Hobbies);
      const ValueInputData = (e) => {
            let name = e.target.name;
            let value = e.target.value;
            let id = Math.floor(Math.random() * 10000)
            let data = { ...InputValue, [name]: value, id }
            setInputValue(data)
            if (name === 'hobbies') {
                  if (e.target.checked) {

                        let data = [...Hobbies, value]
                        setHobbies(data)
                        setInputValue((prevInputValue) => {
                              return { ...prevInputValue, 'hobbies': data };
                        });

                  } else {
                        let pos = Hobbies.findIndex((v, i) => v === e.target.value)
                        Hobbies.splice(pos, 1)
                        setHobbies([...Hobbies])
                        setInputValue((prevInputValue) => {
                              return { ...prevInputValue, 'hobbies': Hobbies };
                        });
                  }
            }

      }
      var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      console.log(InputValue);
      const SubmitData = (e) => {
            e.preventDefault();

            if (InputValue.name === undefined) {
                  toast.error('name is required !')

            } else if (InputValue.age === undefined) {
                  toast.error('age is requrired !')
            } else if (InputValue.email === undefined) {
                  toast.error('email is requrired !')
            } else if (InputValue.password === undefined) {
                  toast.error('password is requrired !')
            } else if (InputValue.gender === undefined) {
                  toast.error('gender is requrired !')
            } else if (InputValue.hobbies === undefined) {
                  toast.error('hobbies is requrired !')

            }
            else {
                  if (InputValue.name.length < 2) {
                        toast.error(' 2 letter !')
                  } else if (InputValue.age.length > 2) {
                        toast.error(' minimum 2 number !')
                  } else if (isNaN(InputValue.age)) {
                        toast.error(' only number all !')
                  } else if (!(InputValue.email.match(mailformat))) {
                        toast.error('email is note carect')
                  } else if (!(InputValue.password.match(decimal))) {
                        toast.error(' [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]')
                  } else if (Hobbies.length === 0) {
                        toast.error('hobbies is requrired !')
                  }
                  else {
                        toast.success('Data is success !')
                        let data = [...AllData, InputValue]
                        setAllData(data)
                  }

            }




      }
      console.log(AllData);
      return (
            <div>
                  <form className='' method='post' onSubmit={(e) => SubmitData(e)}>
                        <div>
                              <label>name : </label>
                              <input type="text" className='border-2 border-black' placeholder='name' name='name' value={InputValue.name ? InputValue.name : ''} onChange={(e) => ValueInputData(e)} />
                              <span>{InputValueError.nameError ? InputValueError.nameError : ''}</span>
                        </div>
                        <div>
                              <label>age : </label>
                              <input type="text" className='border-2 border-black' placeholder='age' name='age' onChange={(e) => ValueInputData(e)} value={InputValue.age ? InputValue.age : ''} />
                              <span>{InputValueError.ageError ? InputValueError.ageError : ''}</span>
                        </div>
                        <div>
                              <label>email : </label>
                              <input type="text" className='border-2 border-black' placeholder='email' name='email' onChange={(e) => ValueInputData(e)} value={InputValue.email ? InputValue.email : ''} />
                        </div>
                        <div>
                              <label>password : </label>
                              <input type="text" className='border-2 border-black' placeholder='password' name='password' onChange={(e) => ValueInputData(e)} value={InputValue.password ? InputValue.password : ''} />
                              <span>{InputValueError.passwordError ? InputValueError.passwordError : ''}</span>
                        </div>
                        {/* <div>
                              <label>city : </label>
                              <select name="city" className='border-2 border-black' onChange={(e) => ValueInputData(e)} value={InputValue.name ? InputValue.name : ''}>
                                    <option value="surat">surat</option>
                                    <option value="amgi">amgi</option>
                                    <option value="amrli">amrli</option>
                              </select>
                        </div> */}
                        <div>
                              <label>male</label>
                              <input type="radio" name='gender' value='male' onChange={(e) => ValueInputData(e)} />
                              <label>female</label>
                              <input type="radio" name='gender' value='female' onChange={(e) => ValueInputData(e)} />
                              <label>other</label>
                              <input type="radio" name='gender' value='other' onChange={(e) => ValueInputData(e)} />
                        </div>
                        <div>
                              <input type="checkbox" name='hobbies' value='one' onChange={(e) => ValueInputData(e)} />
                              <label htmlFor="">one</label>
                              <input type="checkbox" name='hobbies' value='two' onChange={(e) => ValueInputData(e)} />
                              <label htmlFor="">one</label>
                              <input type="checkbox" name='hobbies' value='three' onChange={(e) => ValueInputData(e)} />
                              <label htmlFor="">one</label>
                        </div>

                        <div>
                              <input type="submit" value={'submit'} className='border bg-black text-white py-2 px-6 rounded-md mt-4' />
                              <span>{InputValueError.Submiterror}</span>
                        </div>
                  </form>


                  <div>
                        <table>
                              <thead>
                                    <tr key={'123'}>
                                          <th>name</th>
                                          <th>age</th>
                                          <th>email</th>
                                          <th>possword</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {
                                          AllData.map((item, i) => {
                                                return (
                                                      <tr key={i + 1}>
                                                            <th>{item.name}</th>
                                                            <th>{item.age}</th>
                                                            <th>{item.email}</th>
                                                            <th>{item.password}</th>
                                                            <th>{item.gender}</th>
                                                            <th>{item.hobbies}</th>
                                                      </tr>
                                                )
                                          })
                                    }
                              </tbody>
                        </table>

                  </div>
                  <ToastContainer />
            </div>
      )
}

export default Validation