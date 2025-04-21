import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeftRight, Minus, EllipsisVertical } from 'lucide-react';

const TransactionItem = ({ transaction }) => {
  const getIconAndColor = (type) => {
    switch (type) {
      case 'Sent GBP':
        return { icon: <ArrowUp size={16} />, color: 'text-red-500', bgColor: 'bg-red-100' };
      case 'Exchanged GBP -> NGN':
        return { icon: <ArrowLeftRight size={16} />, color: 'text-yellow-500', bgColor: 'bg-yellow-100' };
      case 'Receive GBP -> NGN':
        return { icon: <ArrowDown size={16} />, color: 'text-green-500', bgColor: 'bg-green-100' };
      case 'Withdraw GBP':
        return { icon: <Minus size={16} />, color: 'text-gray-500', bgColor: 'bg-gray-100' };
      default:
        return { icon: null, color: 'text-gray-500', bgColor: 'bg-gray-100' };
    }
  };

  const { icon, color, bgColor } = getIconAndColor(transaction.type);
  const amountColorClass = transaction.amount.startsWith('-') ? 'text-red-500' : 'text-black';

  return (
    <li className="py-3.5 border-b last:border-b-0 flex flex-row items-center justify-between gap-5 xl:gap-0">
    <div className="flex items-center gap-2 xl:gap-4 w-[200px] min-w-[200px] xl:w-[320px] xl:min-w-[320px]">
      <div className={`rounded-xl ${bgColor} p-3 ${color}`}>
        {icon}
      </div>
      <p className="text-xs xl:text-sm font-medium text-gray-800">{transaction.type}</p>
    </div>
  
    <div className="flex-1 flex flex-col xl:flex-row items-center text-centder xl:gap-3.5">
      <p className="text-[10px] md:text-xs text-gray-500">{transaction.details}</p>
      <p className="hidden xl:block text-gray-400 text-xs">·</p>
      <p className="text-gray-400 hidden xl:block text-xs">Today, 13:30</p>
    </div>
  
    <div className="flex items-center gap-6 justify-end min-w-32 text-right">
      <p className={`text-sm font-semibold ${amountColorClass}`}>{transaction.amount}</p>
      <button className="cursor-pointer">
        <EllipsisVertical className="w-4 h-4" />
      </button>
    </div>
  </li>
  );
};

export default TransactionItem;