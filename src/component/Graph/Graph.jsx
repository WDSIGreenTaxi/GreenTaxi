import React from 'react';
import { BarChart } from 'react-d3';

const Graph = props => {
  return (
    <div>
      <BarChart
        data={props.barData}
        width={500}
        height={200}
        fill={'#234981'}
        title={props.chartTitle}
        yAxisLabel={props.yAxisLabel}
        xAxisLabel={props.xAxisLabel}
      />
    </div>
  );

}
export default Graph;
