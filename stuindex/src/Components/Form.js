import React from 'react'
import Input from './Input'

const Form = ({ studentValue, dataSend, student, count }) => {

      return (
            <div>
                  <form method='get' onSubmit={(e) => dataSend(e)}>
                        {/* <input type="text" name='name' value={student.name ? student.name : ''} onChange={(e) => studentValue(e)} /> */}
                        {/* <input type="text" name='age' onChange={(e) => studentValue(e)} /> */}
                        <Input name={'name'} value={student.name ? student.name : ''} onChange={(e) => studentValue(e)} />
                        <Input name={'age'} value={student.age ? student.age : ''} onChange={(e) => studentValue(e)} />
                        <input type="submit" name='submit' value={count !== undefined ? 'updata' : 'submit'} />
                  </form>
            </div>
      )
}

export default Form;