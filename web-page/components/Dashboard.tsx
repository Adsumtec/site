'use client';

import React, { useEffect, useState } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';

const initialData = [
  { name: 'Jan', sales: 0, revenue: 0 },
  { name: 'Feb', sales: 0, revenue: 0 },
  { name: 'Mar', sales: 0, revenue: 0 },
  { name: 'Apr', sales: 0, revenue: 0 },
  { name: 'May', sales: 0, revenue: 0 },
  { name: 'Jun', sales: 0, revenue: 0 },
  { name: 'Jul', sales: 0, revenue: 0 },
  { name: 'Aug', sales: 0, revenue: 0 },
];

const finalData = [
  { name: 'Jan', sales: 600, revenue: 200 },
  { name: 'Feb', sales: 200, revenue: 500 },
  { name: 'Mar', sales: 300, revenue: 300 },
  { name: 'Apr', sales: 400, revenue: 400 },
  { name: 'May', sales: 450, revenue: 350 },
  { name: 'Jun', sales: 650, revenue: 450 },
  { name: 'Jul', sales: 500, revenue: 400 },
  { name: 'Aug', sales: 400, revenue: 300 },
];

const Dashboard = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setData(prev => {
          const next = [...prev];
          next[i] = finalData[i];
          return next;
        });
        i++;
        if (i === finalData.length) clearInterval(interval);
      }, 150);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="dashboard-section">
        <Card className="dashboard-card" style={{ minWidth: 620, maxWidth: 760 }}>
          <CardContent style={{ height: 360, padding: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 24, right: 32, left: 24, bottom: 8 }}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FBBF24" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#FBBF24" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1E3A8A" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fill: '#64748B', fontSize: 12 }} />
                <YAxis tick={{ fill: '#64748B', fontSize: 12 }} />

                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#F59E0B"
                  strokeWidth={4}
                  fill="url(#colorSales)"
                  dot={false}
                  isAnimationActive={true}
                  animationDuration={2000}
                  animationEasing="ease-in-out"
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#1E3A8A"
                  strokeWidth={4}
                  fill="url(#colorRevenue)"
                  dot={false}
                  isAnimationActive={true}
                  animationDuration={2000}
                  animationEasing="ease-in-out"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default Dashboard;
