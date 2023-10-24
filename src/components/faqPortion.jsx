import React, { useState } from 'react'
import { FaTimes, FaPlus } from 'react-icons/fa'
const FaqPortion = ({no,question,answer}) => {

    const [isShown, setIsShown] = useState(false)

  return (
      <div onClick={() => setIsShown(!isShown)} className=' w-[100%] flex justify-between items-start border-b-2 py-8'>
          <div className='flex space-x-6 xs:space-x-10 w-full'>
              <p className='text-purple text-[20px] xs:text-2xl font-medium'>{no}</p>
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
