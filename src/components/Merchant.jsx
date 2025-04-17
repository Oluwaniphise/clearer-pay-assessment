import React from 'react'

export const Merchant = ({merchant}) => {
 const getInitials = () => {
    const names = merchant.name.split(' ');
    if (names.length > 1) {
      return names[0][0] + names[1][0];
    }
    return names[0][0];
  }
  return (
    <div key={merchant.id} className="flex flex-col items-center mx-2">
    <div className="bg-gray-100 rounded-full w-14 h-14 flex items-center justify-center mb-2">
      <span className="text-gray-800 font-medium">{getInitials()}</span>
    </div>
    <span className="text-xs bg-gray-100 p-2 rounded-full text-gray-600 truncate w-24 text-center">{merchant.name}</span>
  </div>
  )
}
