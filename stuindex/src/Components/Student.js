import React, { useEffect, useState } from 'react'
import Form from './Form'
import Display from './Display'

const Student = () => {
      const [student, setStudent] = useState({})
      const [dataStu, setDatastu] = useState([])
      const [count, setcount] = useState()

      useEffect(() => {
            let studentString = localStorage.getItem("student")
            if (studentString !== null) {
                  setDatastu(JSON.parse(studentString))
            } else {
                  setDatastu([])
            }
      }, []);

      const studentValue = (e) => {
            let name = e.target.name;
            let val = e.target.value
            let data = { ...student, [name]: val, }
            setStudent(data)
      }

      const dataSend = (e) => {
            e.preventDefault();
            if (dataStu[count]) {
                  dataStu[count].name = e.target.name.value;
                  dataStu[count].age = e.target.age.value;
                  setcount();
                  localStorage.setItem('student', JSON.stringify(dataStu))

            } else {
                  let data = [...dataStu, student]
                  setDatastu(data)
                  localStorage.setItem('student', JSON.stringify(data))
            }

            setStudent({})
      }

      const deleteData = (pos) => {
            let indexToDelete = dataStu.findIndex((element, index) => index === pos);
            if (indexToDelete !== -1) {
                  dataStu.splice(indexToDelete, 1)
                  setDatastu([...dataStu])
            }
      }
      const upDatevalue = (pos) => {
            let dd = { name: dataStu[pos].name, age: dataStu[pos].age }
            setStudent(dd);
            setcount(pos)
      }

      return (
            <div>
                  <Form student={student} studentValue={studentValue} dataSend={dataSend} count={count} />
                  <Display dataStu={dataStu} upDatevalue={upDatevalue} deleteData={deleteData} />
            </div>
      )
}

export default Student