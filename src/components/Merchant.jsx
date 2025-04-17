import React from 'react'

export const Merchant = ({merchant}) => {
  return (
    <div className="flex flex-col items-center mx-2">
    <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-2">
      <span className="text-gray-800 font-medium">{merchant.initials}</span>
    </div>
    <span className="text-xs text-gray-600 truncate w-24 text-center">{merchant.name}</span>
  </div>
  )
}
