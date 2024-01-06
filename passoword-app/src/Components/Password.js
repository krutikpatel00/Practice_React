import React, { useCallback, useRef, useEffect, useState } from 'react'

const Password = () => {
      const [Length, getLength] = useState(4)
      const [Nubmer, setNubmer] = useState(false)
      const [Charecter, setCharecter] = useState(false)
      const [Password, setPassword] = useState()

      const passwordGenrater = useCallback(() => {
            let pass = '';
            let str = 'ABCDEFGHIGJKLMNOPQURSTIUVWXYZabcdefghigjklmnopqurstiuvwxyz'

            if (Nubmer) str += '123456789'
            if (Charecter) str += '!@#$%^&*(){}:?/'
            for (let index = 0; index < Length; index++) {
                  let num = Math.floor(Math.random() * str.length + 1)
                  pass += str.charAt(num)
            }
            setPassword(pass)

      }, [Length, Nubmer, Charecter, setPassword])
      const passref = useRef(null)
      useEffect(() => {
            passwordGenrater();
      }, [Length, Nubmer, Charecter, passwordGenrater])

      const copytext = useCallback(() => {
            window.navigator.clipboard.writeText(Password)
            passref.current?.select();
      }, [Password])
      return (
            <>
                  <div>
                        <input type="text" value={Password} readOnly ref={passref} />
                        <button onClick={() => copytext()} >copy</button>
                        <div>
                              <input type="range" name="range" max={99} value={Length} onChange={(e) => getLength(e.target.value)} />
                              <label htmlFor="">{Length}</label>
                        </div>

                        <div>
                              <input type="checkbox" defaultChecked={Charecter} onChange={() => setNubmer((pre) => !pre)} />
                              <label >nubemr</label>
                        </div>
                        <div>
                              <input type="checkbox" defaultChecked={Nubmer} onChange={() => setCharecter((pre) => !pre)} />
                              <label >crecter</label>
                        </div>
                  </div >

            </>
      )
}

export default Password