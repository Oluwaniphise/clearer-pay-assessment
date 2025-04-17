import React from 'react'

export const Button = ({label, icon}) => {
  return (
    <button className='bg-gray-100  px-10 py-2 rounded-lg inline-flex items-center gap-1'>
        {icon && <span>{icon}</span>}
        <span className='text-gray-900'>{label}</span>
    </button>
  )
}
