import React, { useState } from 'react'

const Car = () => {
      const carName = ["Toyota Camry", "Honda Accord", "Ford Mustang", "Chevrolet Malibu", "Tesla Model S", "BMW 3 Series", "Mercedes-Benz C-Class", "Audi A4", "Nissan Altima", "Hyundai Sonata", "Kia Optima", "Volkswagen Passat", "Subaru Outback", "Mazda3", "Lexus ES", "Cadillac CT5", "Volvo S60", "Jaguar XF", "Land Rover Range Rover", "Porsche 911"]

      const [count, setcount] = useState(0)

      const ChangeCarName = () => {
            setcount(count + 1)

      }
      if (count === carName.length) {
            setcount(0)
      }
      return (
            <div>

                  <div className='text-center mt-12'>
                        <h2 className='text-4xl'>Car</h2>
                        <p className='py-4 text-2xl'>Car Name : {carName[count]}</p>
                        <button onClick={() => ChangeCarName()} className='py-2 px-6 rounded-lg bg-black text-white'>Change</button>
                  </div>
            </div>
      )
}

export default Car