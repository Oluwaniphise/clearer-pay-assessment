import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export const MoneyFlowChart = () => {
  // Sample data - you'd replace this with your actual data
  const data = [
    { day: 1, moneyIn: 100000, moneyOut: 120000 },
    { day: 8, moneyIn: 250000, moneyOut: 170000 },
    { day: 15, moneyIn: 350000, moneyOut: 450000 },
    { day: 22, moneyIn: 200000, moneyOut: 350000 },
    { day: 31, moneyIn: 300000, moneyOut: 200000 },
  ];

  const formatAmount = (value) => {
    if (value >= 1000000) return `₦${value / 1000000}m`;
    if (value >= 100000) return `₦${value / 100000}k`;
    return `₦${value}`;
  };

  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorMoneyIn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFD580" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFD580" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorMoneyOut" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF8080" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF8080" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#9CA3AF' }}
          />
          <YAxis 
            tickFormatter={formatAmount} 
            axisLine={false} 
            tickLine={false}
            tick={{ fontSize: 12, fill: '#9CA3AF' }}
            width={60}
          />
          <Tooltip 
            formatter={(value) => [`${formatAmount(value)}`, '']}
            contentStyle={{ 
              borderRadius: '8px', 
              border: 'none', 
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)' 
            }}
          />
          <Area 
            type="monotone" 
            dataKey="moneyIn" 
            stroke="#F59E0B" 
            fillOpacity={1} 
            fill="url(#colorMoneyIn)" 
            strokeWidth={2}
          />
          <Area 
            type="monotone" 
            dataKey="moneyOut" 
            stroke="#EF4444" 
            fillOpacity={1} 
            fill="url(#colorMoneyOut)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

