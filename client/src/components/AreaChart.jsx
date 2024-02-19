import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import day from 'dayjs';

const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={window.innerWidth > 769 ? 400 : 300}>
      <AreaChart
        data={data}
        margin={{
          top: window.innerWidth > 769 ? 50 : 10,
          right: window.innerWidth > 769 ? 30 : 0,
        }}>
        <defs>
          <linearGradient
            id="AreaChartApplications"
            x1="0"
            y1="0"
            x2="0"
            y2="1">
            <stop offset="10%" stopColor="#f14a75" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#f57797" stopOpacity={0.0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
        <XAxis
          dataKey="date"
          axisLine={false}
          padding={{ left: window.innerWidth > 769 ? 50 : 10 }}
          tickLine={false}
        />
        <YAxis
          allowDecimals={false}
          axisLine={false}
          tickLine={false}
          hide={true}
        />
        <Tooltip
          cursor={{
            stroke: 'rgba(244,198,55,0.5)',
            strokeWidth: window.innerWidth > 769 ? 50 : 25,
          }}
          wrapperStyle={{ outline: 'none' }}
        />
        <Area
          type="monotone"
          dataKey="count"
          stroke={'#ee1d52'}
          strokeWidth={'2'}
          fillOpacity={0.75}
          fill="url(#AreaChartApplications)"
          activeDot={{
            stroke: '#fff',
            strokeWidth: window.innerWidth > 769 ? 3 : 1,
            fill: '#f4c637',
            r: window.innerWidth > 769 ? 10 : 4,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
