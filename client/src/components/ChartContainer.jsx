import { useState } from 'react';
import Wrapper from '../assets/wrappers/ChartContainer';
import { BarChart, AreaChart } from '.';

const ChartContainer = ({ data }) => {
  const [showAreaChart, setShowAreaChart] = useState(true);

  const chartToggle = () => {
    setShowAreaChart(!showAreaChart);
  };

  return (
    <Wrapper>
      <div className="monthly-chart-header">
        <h4>Monthly Applications</h4>
        <div className="pill-toggle-box">
          <div
            className="slider"
            style={{ left: showAreaChart ? `0` : `6.125rem` }}></div>
          <button
            type="button"
            className="toggle-btn"
            style={{
              color: showAreaChart
                ? `var(--grey-50, #292524)`
                : `var(--grey-700, #404040)`,
            }}
            onClick={chartToggle}>
            Area Chart
          </button>
          <button
            type="button"
            className="toggle-btn"
            style={{
              color: showAreaChart
                ? `var(--grey-700, #404040)`
                : `var(--grey-50, #292524)`,
            }}
            onClick={chartToggle}>
            Bar Chart
          </button>
        </div>
      </div>
      <div className="charts-box">
        {showAreaChart ? <AreaChart data={data} /> : <BarChart data={data} />}
      </div>
    </Wrapper>
  );
};

export default ChartContainer;
