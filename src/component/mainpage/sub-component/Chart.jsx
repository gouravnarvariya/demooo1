import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';

const uData = [40, 30, 20,24,29, 90,80,40,50,60];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
  'Page H',
  'Page I',
  'Page J',
  'Page K',
  'Page L',
  'Page M',
  'Page N',
];

export default function Chart() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
    <ChartContainer
    width={700}
    height={300}
    series={[{ data: uData, label: 'uv', type: 'bar' }]}
    xAxis={[{ scaleType: 'band', data: xLabels }]}
  >
    <BarPlot />
  </ChartContainer>
  </div>
  );
}