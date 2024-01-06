import React, { useEffect, useState } from 'react'

const Student = () => {

      const [student, setStudent] = useState({})
      const [studentsData, setStudentsData] = useState([])
      const [id, setId] = useState(0);

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
      }

      const dataSubmite = (e) => {
            e.preventDefault()
            if (id !== 0) {
                  const index = studentsData.findIndex((v) => v.id === id);
                  studentsData[index].name = e.target.name.value
                  studentsData[index].age = e.target.age.value
                  studentsData[index].id = id;
                  localStorage.setItem('student', JSON.stringify(studentsData))
                  setId(0)

            } else {
                  const data = [...studentsData, student]
                  setStudentsData(data)
                  localStorage.setItem('student', JSON.stringify(data))

            }
            setStudent({})
      }

      const deleteStudentData = (itemId) => {
            const index = studentsData.findIndex((v) => v.id === itemId);
            console.log(index);
            studentsData.splice(index, 1);
            setStudentsData([...studentsData]);
      }

      const updataStudentData = (itemId) => {
            const index = studentsData.findIndex((v) => v.id === itemId);
            setStudent({ name: studentsData[index].name, age: studentsData[index].age })
            setId(itemId)
      }
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
                                    </tr>
                              </thead>
                              <tbody >
                                    {
                                          studentsData.map((item, i) => {
                                                return (
                                                      <tr key={i}>
                                                            <th>{item.name}</th>
                                                            <th>{item.age}</th>
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
                  </div>
            </>
      )
}

export default Student