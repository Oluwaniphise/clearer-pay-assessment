import React from 'react'

export const CardComponent = ({className, children}) => {
  return (
    <div className={`w-full bg-white px-6 py-5 rounded-md hover:shadow-sm ${className}`}>
        {children}
    </div>
  )
}
