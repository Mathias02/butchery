
import React from 'react'
import Icon from './_components/Icon'
import Sidebar from './_components/Sidebar'

const layout = ({children}) => {
  return (
    <div className='flex flex-col gap-4'>  
      <div className='max-w-screen-3xl'>
         <Icon />
      </div>
      <div className='grid grid-cols-4'>
        <div>
            <Sidebar />
        </div>
        <div className='col-span-3 border'>
          {children}
        </div> 
      </div>
        
    </div>
  )
}

export default layout