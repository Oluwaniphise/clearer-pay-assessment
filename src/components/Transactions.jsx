import React from 'react';
import TransactionItem from './TransactionItem';
import { CardComponent } from './CardComponent';
import { ArrowRight } from 'lucide-react';

export const Transactions = () => {

  const transactions = [
    {
      id: '1',
      type: 'Sent GBP',
      rawType: 'Sent GBP',
      details: 'Sent to John Doe',
      amount: '-₦1,000,000',
      date: 'Today, 13:30',
    },
    {
      id: '2',
      rawType: 'Exchanged GBP -> NGN',
      type: (
        <span className="flex items-center gap-1">
          Exchanged GBP <ArrowRight className="w-4 h-4" /> NGN
        </span>
      ),
      details: 'Sent to John Doe',
      amount: '-£1,000 / +₦200,000',
      date: 'Today, 13:30',
    },
    {
      id: '3',
      rawType: 'Receive GBP -> NGN',
      type: (
        <span className="flex items-center gap-1">
          Received GBP <ArrowRight className="w-4 h-4" /> NGN
        </span>
      ),
      details: 'Sent to John Doe',
      amount: '+₦200,000',
      date: 'Today, 13:30',
    },
    {
      id: '4',
      rawType: 'Withdraw GBP',
      type: 'Withdraw GBP',
      details: 'Sent to John Doe',
      amount: '+₦200,000',
      date: 'Today, 13:30',
    },
  ];
  return (
    <CardComponent>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-900 text-xl">Recent Transactions</h2>
        <button className="text-gray-400 cursor-pointer">See all</button>
      </div>
      <ul className='flex flex-col overflow-x-auto'>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </CardComponent>
  );
};

