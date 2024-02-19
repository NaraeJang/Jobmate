import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={window.innerWidth > 769 ? 400 : 300}>
      <BarChart data={data} margin={{ top: window.innerWidth > 769 ? 50 : 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
        <XAxis dataKey="date" axisLine={false} tickLine={false} />
        <YAxis
          allowDecimals={false}
          axisLine={false}
          tickLine={false}
          hide={true}
        />
        <Tooltip
          cursor={{
            fill: 'rgba(244,198,55,0.5)',
          }}
        />
        <Bar dataKey="count" fill="#f8a5ba" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
