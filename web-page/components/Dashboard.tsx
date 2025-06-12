"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", vendas: 200, meta: 500 },
  { month: "Feb", vendas: 150, meta: 220 },
  { month: "Mar", vendas: 200, meta: 250 },
  { month: "Apr", vendas: 280, meta: 350 },
  { month: "May", vendas: 220, meta: 380 },
  { month: "Jun", vendas: 250, meta: 450 },
  { month: "Jul", vendas: 240, meta: 480 },
  { month: "Aug", vendas: 300, meta: 300 },
]

function Dashboard() {
  return (
    <div style={{ width: "100%", height: "250px", padding: "0 24px 24px 24px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#64748b" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#64748b" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorMeta" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#94a3b8" }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#94a3b8" }} domain={[0, 500]} />
          <Area
            type="monotone"
            dataKey="vendas"
            stroke="#64748b"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorVendas)"
          />
          <Area
            type="monotone"
            dataKey="meta"
            stroke="#f59e0b"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorMeta)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default function DashboardSection() {
  return (
    <div
      className="secondCardWrapper"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8fafc",
        padding: "1rem",
      }}
    >
      {/* Card do Dashboard */}
      <div
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "600px",
          maxHeight: "400px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "20px 24px 0 24px",
            flexShrink: 0,
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              margin: 0,
              color: "#1e293b",
              fontFamily: "inherit",
            }}
          >
            Dashboard de vendas
          </h2>
          <div
            style={{
              fontSize: "0.85rem",
              color: "#f59e0b",
              marginBottom: "8px",
              marginTop: "2px",
            }}
          >
            (+5) mais em 2024
          </div>
        </div>
        <div style={{ flex: 1, minHeight: 0 }}>
          <Dashboard />
        </div>
      </div>
    </div>
  )
}
