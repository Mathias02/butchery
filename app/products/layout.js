
import React from 'react'
import Icon from './_components/Icon'

const layout = ({children}) => {
  return (
    <div className='flex flex-col gap-4'>  
      <div className='max-w-screen-3xl'>
         <Icon />
      </div>
      <div>
         {children}
      </div>    
    </div>
  )
}

export default layout