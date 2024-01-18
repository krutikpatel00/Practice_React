import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Student = () => {

      const [student, setStudent] = useState({})
      const [studentsData, setStudentsData] = useState([])
      const [id, setId] = useState(0);
      const [Hobbies, setHobbies] = useState([])

      useEffect(() => {
            const studentDataGet = localStorage.getItem('student');
            setStudentsData(studentDataGet ? JSON.parse(studentDataGet) : [])
      }, [])

      const studentValue = (e) => {
            const name = e.target.name
            const value = e.target.value
            const id = Math.floor(Math.random() * 10000)
            const data = { ...student, [name]: value, id: id }
            setStudent(data)
            if (name === 'hobbies') {
                  if (e.target.checked) {
                        let data = [...Hobbies, value]
                        setHobbies(data)
                        let obj = { ...student, 'hobbies': data }
                        setStudent(obj)

                        console.log(data);
                        console.log(e.target.checked);
                  } else {
                        let index = Hobbies.findIndex((v, i) => {
                              return v === value
                        })
                        Hobbies.splice(index, 1)
                        setHobbies([...Hobbies,])

                        setStudent({ ...student, 'hobbies': Hobbies })

                        console.log(index);
                        console.log(Hobbies);
                        console.log(e.target.checked);
                  }
            }
      }

      const dataSubmite = (e) => {
            e.preventDefault()
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

            if (id !== 0) {
                  const index = studentsData.findIndex((v) => v.id === id);
                  studentsData[index].name = e.target.name.value
                  studentsData[index].age = e.target.age.value
                  studentsData[index].id = id;
                  localStorage.setItem('student', JSON.stringify(studentsData))
                  setId(0)

            } else {
                  if (student.name === undefined) {
                        toast.error('name is required')
                  } else if (student.age === undefined) {
                        toast.error('age is required')
                  } else if (student.email === undefined) {
                        toast.error('email is required')
                  } else if (student.password === undefined) {
                        toast.error('password is required')
                  } else if (student.city === undefined) {
                        toast.error('city is required')
                  } else if (student.gender === undefined) {
                        toast.error('gender is required')
                  } else if (student.hobbies === undefined) {
                        toast.error('hobbies is required')
                  }
                  else {
                        if (student.name.length < 3) {
                              toast.error('more then 3 character add')
                        }
                        else if (isNaN(student.age)) {
                              toast.error('only number')
                        }
                        else if (student.age.length > 2) {
                              toast.error('only 2 number add')
                        }
                        else if (student.age < 18) {
                              toast.error('age is not 18+')
                        }
                        else if (!(student.email.match(mailformat))) {
                              toast.error('check email')
                        }
                        else if (!(student.password.match(decimal))) {
                              toast.error('8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character ')
                        }
                        else if (student.hobbies.length === 0) {
                              toast.error('')
                        }
                        else {
                              const data = [...studentsData, student]
                              setStudentsData(data)
                              localStorage.setItem('student', JSON.stringify(data))
                        }
                  }


            }
            setStudent({})
      }

      const deleteStudentData = (itemId) => {
            const index = studentsData.findIndex((v) => v.id === itemId);
            console.log(index);
            studentsData.splice(index, 1);
            setStudentsData([...studentsData]);
            localStorage.setItem('student', JSON.stringify(studentsData))
      }

      const updataStudentData = (itemId) => {
            const index = studentsData.findIndex((v) => v.id === itemId);
            setStudent({ name: studentsData[index].name, age: studentsData[index].age })
            setId(itemId)
      }
      console.log(student);
      return (
            <>
                  <div>
                        <form method='post' onSubmit={(e) => dataSubmite(e)}>
                              <table border={1}>
                                    <thead>
                                          <tr key={1}>
                                                <th>name</th>
                                                <th><input type="text" name='name' value={student.name ? student.name : ''} onChange={(e) => studentValue(e)} /></th>
                                          </tr>
                                          <tr key={2}>
                                                <th>age</th>
                                                <th><input type="text" name='age' value={student.age ? student.age : ''} onChange={(e) => studentValue(e)} /></th>
                                          </tr>

                                          <tr key={4}>
                                                <th>email</th>
                                                <th><input type="text" name='email' value={student.email ? student.email : ''} onChange={(e) => studentValue(e)} /></th>
                                          </tr>
                                          <tr key={3}>
                                                <th>password</th>
                                                <th><input type="text" name='password' value={student.password ? student.password : ''} onChange={(e) => studentValue(e)} /></th>
                                          </tr>
                                          <tr key={5}>
                                                <th>city</th>
                                                <th>
                                                      <select name="city" id="" onChange={(e) => studentValue(e)} value={student.city ? student.city : ''} >
                                                            <option value="surat">surat</option>
                                                            <option value="amreli">amreli</option>
                                                            <option value="rajkot">rajkot</option>
                                                      </select>
                                                </th>
                                          </tr>
                                          <tr key={6}>
                                                <th>gender</th>
                                                <th>
                                                      <input type="radio" name='gender' value='male' checked={student.gender === 'male'} onChange={(e) => studentValue(e)} />
                                                      <label >male</label>
                                                      <input type="radio" name='gender' value='female' checked={student.gender === 'female'} onChange={(e) => studentValue(e)} />
                                                      <label >female</label>
                                                </th>
                                          </tr>
                                          <tr key={7}>
                                                <th>hobbies</th>
                                                <th>
                                                      <input type="checkbox" name='hobbies' value='dance' checked={student.hobbies && student.hobbies.includes('dance')} onChange={(e) => studentValue(e)} />
                                                      <label>Dance</label>
                                                      <input type="checkbox" name='hobbies' value='writitng' checked={student.hobbies && student.hobbies.includes('writitng')} onChange={(e) => studentValue(e)} />
                                                      <label>Writing</label>
                                                      <input type="checkbox" name='hobbies' value='learning' checked={student.hobbies && student.hobbies.includes('learning')} onChange={(e) => studentValue(e)} />
                                                      <label>Learning</label>
                                                </th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          <tr key={3}>
                                                <th>
                                                      <input type="submit" value={id === 0 ? 'submit' : 'updata'} />
                                                </th>
                                          </tr>
                                    </tbody>
                              </table>
                        </form>
                  </div>
                  <div>
                        <table border={1}>
                              <thead>
                                    <tr key={4}>
                                          <th>name</th>
                                          <th>age</th>
                                          <th>password</th>
                                          <th>email</th>
                                          <th>city</th>
                                          <th>gender</th>
                                          <th>hobbies</th>
                                    </tr>
                              </thead>
                              <tbody >
                                    {
                                          studentsData.map((item, i) => {
                                                return (
                                                      <tr key={i}>
                                                            <th>{item.name}</th>
                                                            <th>{item.age}</th>
                                                            <th>{item.password}</th>
                                                            <th>{item.email}</th>
                                                            <th>{item.city}</th>
                                                            <th>{item.gender}</th>
                                                            <th>{item.hobbies === undefined ? item.hobbies : item.hobbies.join()}</th>
                                                            <th>
                                                                  <button onClick={() => deleteStudentData(item.id)}>delete</button>
                                                            </th>
                                                            <th>
                                                                  <button onClick={() => updataStudentData(item.id)}>updata</button>
                                                            </th>
                                                      </tr>
                                                )
                                          })
                                    }
                              </tbody>
                        </table>
                        <ToastContainer />
                  </div>
            </>
      )
}

export default Student