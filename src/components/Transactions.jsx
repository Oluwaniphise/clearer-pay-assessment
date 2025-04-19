// src/components/RecentTransactions.jsx
import React from 'react';
import TransactionItem from './TransactionItem';

export const Transactions = () => {

    const transactions = [
        {
          id: '1',
          type: 'Sent GBP',
          details: 'Sent to John Doe',
          amount: '-£1,000.00',
          date: 'Today, 13:30',
        },
        {
          id: '2',
          type: 'Exchanged GBP -> NGN',
          details: 'Sent to John Doe',
          amount: '-£1,000 / +₦200,000',
          date: 'Today, 13:30',
        },
        {
          id: '3',
          type: 'Receive GBP -> NGN',
          details: 'Sent to John Doe',
          amount: '+₦200,000',
          date: 'Today, 13:30',
        },
        {
          id: '4',
          type: 'Withdraw GBP',
          details: 'Sent to John Doe',
          amount: '-₦200,000',
          date: 'Today, 13:30',
        },
        // ... more transactions
      ];
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
        <button className="text-sm text-blue-600 hover:underline focus:outline-none">See all</button>
      </div>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

