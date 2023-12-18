/* eslint-disable object-curly-newline */
import { AreaChart, Area, YAxis, ReferenceLine, XAxis } from 'recharts';

interface IChart {
  chartData: number[];
}

export const Chart = ({ chartData }: IChart) => {
  return (
    <div className="flex items-center justify-center">
      <AreaChart
        width={413}
        height={220}
        data={chartData.map((value) => ({ uv: value, name: '01 Янв 2023' }))}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1C64F2" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#121825" stopOpacity={0} />
          </linearGradient>
        </defs>
        <ReferenceLine y={3000} stroke="#222B44" strokeDasharray="10000 1" />
        <YAxis
          axisLine={{ stroke: '#222B44' }}
          tickSize={0}
          tick={{ fontSize: 12 }}
          tickMargin={10}
          orientation="right"
        />
        <XAxis
          axisLine={{ stroke: '#222B44' }}
          tickSize={0}
          tick={{ fontSize: 12 }}
          tickMargin={10}
          dataKey="name"
        />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#1C64F2"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};
