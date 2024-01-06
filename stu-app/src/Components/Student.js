import React, { useState } from 'react'
import Form from './Form'
import Display from './Display'

const Student = () => {

      let [student, setStudent] = useState({})
      let [dataStu, setDatastu] = useState([])

      let studentValue = (e) => {
            let name = e.target.name
            let age = e.target.value
            let data = { ...student, [name]: age, }
            console.log(data);
            setStudent(data)
      }
      let dataSend = (e) => {
            e.preventDefault();
            let data = [...dataStu, student]
            setDatastu(data)
            setStudent({})
      }
      let deleteData = (pos) => {
            dataStu.splice(pos, 1)
            console.log(dataStu);
            setDatastu([...dataStu],)
      }
      let upDatevalue = (pos) => {
            setStudent({ name: dataStu[pos].name, age: dataStu[pos].age, });

      }
      console.log(dataStu);
      return (
            <div>
                  <Form studentValue={studentValue} dataSend={dataSend} student={student} />
                  <Display dataStu={dataStu} deleteData={deleteData} upDatevalue={upDatevalue}/>
            </div>
      )
}

export default Student