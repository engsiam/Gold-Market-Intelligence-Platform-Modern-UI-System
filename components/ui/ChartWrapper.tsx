"use client";
import { ReactNode } from "react";
import { ResponsiveContainer } from "recharts";

interface ChartWrapperProps {
  children: ReactNode;
  height?: number | string;
}

export function ChartWrapper({ children, height = 300 }: ChartWrapperProps) {
  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}
