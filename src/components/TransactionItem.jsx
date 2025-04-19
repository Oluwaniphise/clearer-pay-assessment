// src/components/TransactionItem.jsx
import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeftRight, Minus } from 'lucide-react';

const TransactionItem = ({ transaction }) => {
  const getIconAndColor = (type) => {
    switch (type) {
      case 'Sent GBP':
        return { icon: <ArrowUp size={16} />, color: 'text-red-500' };
      case 'Exchanged GBP -> NGN':
        return { icon: <ArrowLeftRight size={16} />, color: 'text-gray-500' };
      case 'Receive GBP -> NGN':
        return { icon: <ArrowDown size={16} />, color: 'text-green-500' };
      case 'Withdraw GBP':
        return { icon: <Minus size={16} />, color: 'text-red-500' };
      default:
        return { /* You might want a default icon here, e.g., <QuestionMark size={16} /> */ icon: null, color: 'text-gray-500' };
    }
  };

  const { icon, color } = getIconAndColor(transaction.type);
  const amountColorClass = transaction.amount.startsWith('-') ? 'text-red-500' : 'text-green-500';

  return (
    <li className="py-2 border-b last:border-b-0 flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <div className="flex items-center space-x-2 mb-2 sm:mb-0">
        <div className={`rounded-full bg-gray-100 p-2 ${color}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">{transaction.type}</p>
          <p className="text-xs text-gray-500">{transaction.details}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-sm font-semibold ${amountColorClass}`}>{transaction.amount}</p>
        <p className="text-xs text-gray-500">{transaction.date}</p>
      </div>
    </li>
  );
};

export default TransactionItem;