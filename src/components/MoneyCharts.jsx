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
    const data = [
        { day: 1, moneyIn: 1000000, moneyOut: null },
        { day: 8, moneyIn: 20000000, moneyOut: 10000000 },
        { day: 15, moneyIn: 30000000, moneyOut: 45000000 },
        { day: 22, moneyIn: 45000000, moneyOut: 50000000 },
        { day: 31, moneyIn: 30000000, moneyOut: 20000000 },
    ];

    const formatAmount = (value) => {
        if (value >= 1000000) return `₦${value / 1000000}m`;
        if (value >= 1000) return `₦${value / 1000}k`;
        return `₦${value}`;
    };


    return (
        <div className="h-[240px] w-full ">
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
                        domain={[1, 31]}
                        ticks={[1, 8, 15, 22, 31]}
                    />

                    <YAxis
                        orientation="right"
                        domain={[1000000, 50000000]}
                        ticks={[1000000, 10000000, 20000000, 30000000, 40000000, 50000000]}
                        interval="preserveStartEnd"
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
                        type="natural"
                        dataKey="moneyIn"
                        stroke="#F59E0B"
                        fillOpacity={1}
                        fill="url(#colorMoneyIn)"
                        strokeWidth={2}
                    />
                    <Area
                        type="natural"
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
