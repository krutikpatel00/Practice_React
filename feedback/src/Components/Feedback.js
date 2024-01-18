import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsEmojiGrinFill } from "react-icons/bs";



const Feedback = () => {
      const [FormData, setFormData] = useState({});
      const [AllFormData, setAllFormData] = useState([]);

      const [emoji, setEmoji] = useState([1, 2, 3, 4, 5])
      const [emojiRating, setEmojiRating] = useState(0)

      const handleChange = (e) => {
            const name = e.target.name
            const value = e.target.value
            const id = Math.floor(Math.random() * 100000)
            let data = { ...FormData, [name]: value, id }
            setFormData(data)
      }
      const setClickEmoji = (e) => {

            let data = { ...FormData, 'rating': 0 }
            setFormData(data)
            setEmojiRating(0)
      }
      console.log(emojiRating);
      const setEmojiRatingData = (index) => {
            console.log(index);


            setEmojiRating(emoji[index])
            let data = { ...FormData, 'rating': emoji[index] }
            setFormData(data)
            console.log(data);
      }
      console.log(FormData);
      const handleSubmit = (e) => {
            e.preventDefault()
            if (FormData.name === undefined) {
                  toast.error('Name is Requrired')
            } else if (FormData.email === undefined) {
                  toast.error('Email is Requrired')
            } else if (FormData.phone === undefined) {
                  toast.error('Phone is Requrired')
            } else if (FormData.message === undefined) {
                  toast.error('message is Requrired')
            } else {
                  const data = [...AllFormData, FormData]
                  setAllFormData(data)
                  localStorage.setItem('feedback', JSON.stringify(data))
                  setEmojiRating(0)
            }

      }

      return (
            <section>
                  <div className='w-[500px] mx-auto pt-12'>
                        <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col' method='post'>
                              <div>
                                    <label>Name:</label>
                                    <input type="text" className='border-2 w-full border-black' name="name" onChange={(e) => { handleChange(e) }} />
                              </div>
                              <div>
                                    <label>Email:</label>
                                    <input type="text" className='border-2 w-full border-black' name="email" onChange={(e) => { handleChange(e) }} />
                              </div>
                              <div>
                                    <label>Phone:</label>
                                    <input type="text" className='border-2 w-full border-black' name="phone" onChange={(e) => { handleChange(e) }} />
                              </div>
                              <div>
                                    <label>Message:</label>
                                    <textarea name="message" className='border-2 w-full border-black' onChange={(e) => { handleChange(e) }}></textarea>
                              </div>
                              <div className={` py-4 pe-4 flex`}>
                                    {
                                          emoji.map((v, i) => {
                                                return (
                                                      <BsEmojiGrinFill
                                                            className={`mx-2 text-2xl ${emojiRating > i ? 'text-yellow-400' : 'text-black'}`}
                                                            onMouseEnter={() => setEmojiRatingData(i)} onClick={() => setClickEmoji()} />
                                                )
                                          })
                                    }
                              </div>
                              <button type="submit" className='py-1 px-6 bg-gray-700 text-white'>Submit</button>
                        </form>
                  </div>

                  <div className='pt-20'>
                        <table className='mx-auto'>
                              <thead>
                                    <tr key='1'>
                                          <th className='inline-block px-4 capitalize'>name</th>
                                          <th className='inline-block px-4 capitalize'>email</th>
                                          <th className='inline-block px-4 capitalize'>phone</th>
                                          <th className='inline-block px-4 capitalize'>message</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {AllFormData.map((item, i) => {
                                          return (
                                                <tr key={i * 2}>
                                                      <th className='inline-block px-4 capitalize'>{item.name}</th>
                                                      <th className='inline-block px-4 capitalize'>{item.email}</th>
                                                      <th className='inline-block px-4 capitalize'>{item.phone}</th>
                                                      <th className='inline-block px-4 capitalize'>{item.message}</th>
                                                      <th className='inline-block px-4 capitalize'>
                                                            <div className='flex'>
                                                                  {emoji.map((v, index) => {
                                                                        return (
                                                                              <BsEmojiGrinFill
                                                                                    className={`mx-2 text-2xl ${item.rating > index ? 'text-yellow-400' : 'text-black'}`} />
                                                                        )
                                                                  })}
                                                            </div>
                                                      </th>
                                                </tr>
                                          )
                                    })}
                              </tbody>
                        </table>
                  </div>
                  <ToastContainer />
            </section>


      )
}

export default Feedback