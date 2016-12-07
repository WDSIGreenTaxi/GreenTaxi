import React from 'react';
import { BarChart } from 'rd3';

const Graph = props => {
  return (
    <div>
      <BarChart
        data={props.data}
        width={500}
        height={500}
        fill={'#234981'}
        title={props.chartTitle}
        yAxisLabel={props.yAxisLabel}
        xAxisLabel={props.xAxisLabel}
        hoverAnimation={props.hover}
        handleMouseOver={props.mouseOver}
        handleMouseLeave={props.mouseLeave}
      />
    </div>
  );

}
export default Graph;
