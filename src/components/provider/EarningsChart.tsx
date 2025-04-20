
import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', earnings: 220 },
  { day: 'Tue', earnings: 320 },
  { day: 'Wed', earnings: 180 },
  { day: 'Thu', earnings: 240 },
  { day: 'Fri', earnings: 280 },
  { day: 'Sat', earnings: 0 },  // Future days
  { day: 'Sun', earnings: 0 },  // Future days
];

const EarningsChart: React.FC = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              background: 'rgba(20, 20, 30, 0.8)',
              border: '1px solid rgba(155, 135, 245, 0.2)',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
            formatter={(value) => [`$${value}`, 'Earnings']}
            cursor={{ fill: 'rgba(155, 135, 245, 0.1)' }}
          />
          <Bar
            dataKey="earnings"
            fill="hsl(var(--primary))"
            radius={[4, 4, 0, 0]}
            barSize={36}
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;
