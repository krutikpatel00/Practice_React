import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDelete } from "react-icons/md";

const Comment = () => {
      const [star, setstar] = useState([1, 2, 3, 4, 5])
      const [Rating, setRating] = useState(0)
      const [ReviewData, setReviewData] = useState({})
      const [AllReviewData, setAllReviewData] = useState([])
      const [DeleteOption, setDeleteOption] = useState(false)
      const [index, setindex] = useState(null)
      const [Screen, setScreen] = useState({ top: 0, left: 0 })
      useEffect(() => {
            const data = localStorage.getItem('Review');
            setAllReviewData(data ? JSON.parse(data) : [])
      }, [])

      const starHover = (i) => {
            setRating(star[i])
            const data = { ...ReviewData, 'rating': star[i] }
            setReviewData(data)
      }
      const getInputValue = (e) => {
            const name = e.target.name
            const value = e.target.value
            const data = { ...ReviewData, [name]: value }
            setReviewData(data)

      }
      const CommentSubmit = (e) => {
            e.preventDefault()
            if (ReviewData.rating === undefined) {
                  toast.error('rating is required')
            } else if (ReviewData.message === undefined) {
                  toast.error('message is required')
            } else {
                  const data = [...AllReviewData, ReviewData]
                  setAllReviewData(data)
                  localStorage.setItem('Review', JSON.stringify(data))
                  setReviewData({})
                  setRating(0)
            }

      }
      const DeleteComment = (i, e) => {

            setScreen({ top: e.clientY, left: e.clientX });

            setDeleteOption(!DeleteOption)
            setindex(i)
      }
      const DeleteBtn = (e) => {

            AllReviewData.splice(index, 1)
            setAllReviewData([...AllReviewData])
            localStorage.setItem('Review', JSON.stringify(AllReviewData))
            setDeleteOption(false)
      }
      console.log(Screen);
      return (
            <div>
                  <form method='post' className='my-12' onSubmit={(e) => CommentSubmit(e)}>
                        <div className='w-[500px]'>
                              <div className='flex px-12'>
                                    {star.map((v, i) => {
                                          return (
                                                <FaStar className='mx-2 text-6xl' key={v} color={Rating > i ? 'ffec19' : 'black'} onMouseEnter={() => starHover(i)} onClick={() => setRating(0)}></FaStar>
                                          )
                                    })}
                              </div>
                              <div>
                                    <label>message</label>
                                    <textarea name="message" value={ReviewData.message ? ReviewData.message : ''} className='border-2 border-black w-full' onChange={(e) => getInputValue(e)} id="" rows="5"></textarea>
                              </div>
                              <div>
                                    <button className='text-white bg-blue-600 py-1 px-6 rounded-md'>comment</button>
                              </div>

                        </div>
                        <ToastContainer />
                  </form >

                  <div className={`w-[500px] rating-items shadow-2xl rounded-md `}>
                        {
                              AllReviewData.map((v, i) => {
                                    return (
                                          <div key={i * 3} className={`flex justify-between transition-all items-center text-2xl my-2 p-4 ${index === i && DeleteOption === true ? 'bg-red-300' : ''} bg-gray-300`} onClick={(e) => DeleteComment(i, e)}>
                                                <h2 className='capitalize'>{v.message}</h2>
                                                <div className='flex'>
                                                      {star.map((_, i) => {
                                                            return (
                                                                  <FaStar key={i * 2} color={v.rating > i ? '#ffec19' : 'black'} />
                                                            )
                                                      })}
                                                </div>
                                          </div>
                                    )
                              })
                        }
                        <button className={` ${DeleteOption === false ? 'hidden' : 'block'} animate-scaling transition-all  absolute px-4 py-1 bg-black text-white  `} style={{ top: Screen.top, left: Screen.left }} onClick={(e) => DeleteBtn(e)}><MdDelete className='text-2xl' /></button>
                  </div>
            </div >
      )
}

export default Comment