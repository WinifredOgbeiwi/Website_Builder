import React, { useState } from 'react'
import { FaTimes, FaPlus } from 'react-icons/fa'
const FaqPortion = ({no,question,answer}) => {

    const [isShown, setIsShown] = useState(false)

  return (
      <div onClick={() => setIsShown(!isShown)} className=' w-[100%] flex justify-between items-start border-b-2 py-8'>
          <div className='flex space-x-6 sm:space-x-10 w-full'>
              <h4 className='text-h4urple text-[20px] sm:text-2xl font-medium'>{no}</h4>
              <div>
                  <h4 className='text-[20px] md:text-2xl font-medium '>{question}</h4>
                  {isShown &&  <p className='mt-4 text-md md:text-xl'>{answer}</p>}
              </div>
          </div>
          <div>{isShown ? <FaTimes/> : <FaPlus/>}</div>
        </div>
    
  )
}

export default FaqPortion
