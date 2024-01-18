import React, { useEffect, useState } from 'react'

const PasswordChecker = () => {

      const [passValue, setPassValue] = useState('password');
      const showPassword = () => {
            setPassValue((prevValue) => (prevValue === 'password' ? 'text' : 'password'));
      };

      return (
            <div className='flex h-screen justify-center items-center'>
                  <div>
                        <div>
                              <h2 className='text-xl capitalize'>mouse down up</h2>
                              <input type="password"
                                    className='border border-gray-600 my-2 rounded-md outline-none py-2 px-4 w-96'
                                    onChange={(e) => e.target.value}
                                    onMouseDown={(e) => e.target.type = 'text'}
                                    onMouseUp={(e) => e.target.type = 'password'}
                              />
                        </div>
                        <h2 className='text-xl capitalize'>mouse move levave</h2>
                        <div>
                              <input
                                    type='password'
                                    className='border border-gray-600 my-2 rounded-md outline-none py-2 px-4 w-96'
                                    onChange={(e) => e.target.value}
                                    onMouseMove={(e) => e.target.type = 'text'}
                                    onMouseLeave={(e) => e.target.type = 'password'}
                              />
                        </div>
                        <h2 className='text-xl capitalize'>3 key down up</h2>
                        <div>
                              <input
                                    type="password"
                                    className='border border-gray-600 my-2 rounded-md outline-none py-2 px-4 w-96'
                                    onChange={(e) => e.target.value}
                                    onKeyDown={(e) => e.target.type = 'text'}
                                    onKeyUp={(e) => e.target.type = 'password'}
                              />
                        </div>
                        <h2 className='text-xl capitalize'>click eye par</h2>
                        <div className='relative'>
                              <input
                                    type={passValue}
                                    className='border border-gray-600 my-2 rounded-md outline-none py-2 px-4 w-96'
                                    onChange={(e) => e.target.value}

                              />
                              <button className='absolute top-1/2 right-4 -translate-y-1/2' onClick={(e) => showPassword(e)}>
                                    <i className={passValue === 'password' ? "ri-eye-off-line" : "ri-eye-line"}></i>
                              </button>
                        </div>
                  </div>
            </div>
      )
}

export default PasswordChecker