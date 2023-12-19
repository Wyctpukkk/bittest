import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/dataZoom';
import { IChartData } from '../interfaces/getUserList';

interface IAsideChart {
  chartData: IChartData;
}

export const AsideChart = ({ chartData }: IAsideChart) => {
  const chartRef = useRef(null);
  // eslint-disable-next-line operator-linebreak
  const newIcon =
    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAYCAYAAAA/OUfnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkSURBVHgB7cchAQAACAOwQw7iUYqaJMAgrp7gc4vqHbwEcVQOleACO+Ub4MEAAAAASUVORK5CYII=';

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const categoryData = chartData?.categoryData;
    const valueData = chartData?.valueData;

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        type: 'category',
        data: categoryData,
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#616D8D',
          margin: 10,
        },
        axisLine: {
          lineStyle: {
            color: '#222B44', // Установка цвета для оси X (например, красный)
          },
        },
      },
      yAxis: {
        type: 'value',
        position: 'right',
        splitLine: {
          lineStyle: {
            color: '#222B44', // Задание цвета (в данном случае, серый)
          },
        },
        axisLabel: {
          color: '#616D8D',
          margin: 10,
        },
      },
      dataZoom: [
        {
          type: 'slider',
          show: true,
          xAxisIndex: [0],
          start: 20,
          end: 80,
          handleStyle: {
            color: '#1C64F2', // Цвет ползунков
          },
          backgroundColor: '#222B44',
          fillerColor: 'rgba(28, 100, 242, 0.3)', // Цвет заливки между ползунками
          borderColor: 'transparent', // Цвет границы ползунков
          handleIcon: newIcon,
          brushSelect: false,
          dataBackground: {
            lineStyle: { color: '#616D8D', width: '1.5' },
            areaStyle: { color: '#222B44' },
          },
          selectedDataBackground: {
            lineStyle: { width: '1.5' },
          },
          textStyle: {
            color: '#fff',
          },
        },
      ],
      series: [
        {
          type: 'line',
          data: valueData,
          large: true,
          itemStyle: {
            color: '#1C64F2', // Цвет графика
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(28, 100, 242, 0.4)' }, // Начальный цвет
              { offset: 1, color: 'rgba(28, 100, 242, 0.05)' }, // Конечный цвет
            ]),
          },
          showSymbol: false,
        },
      ],
    };

    chart.setOption(option);

    window.addEventListener('resize', () => {
      chart.resize();
    });

    return () => {
      chart.dispose();
      window.removeEventListener('resize', () => {
        chart.resize();
      });
    };
  }, []);

  return (
    <div className="w-[450px] h-[350px] ml-[-44px] mt-[-58px]">
      <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};
