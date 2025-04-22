import React from 'react'

export const Button = ({label, icon}) => {
  return (
    <button className='bg-gray-100 hover:bg-gray-200 px-9 xl:px-12 leading-none py-0  rounded-lg flex items-center gap-x-1'>
        {icon && <span>{icon}</span>}
        <span className='text-gray-900'>{label}</span>
    </button>
  )
}
