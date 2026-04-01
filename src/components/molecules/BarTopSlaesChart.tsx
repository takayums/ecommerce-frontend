// Library
import type { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

export default function BarTopSlaesChart() {
  const options: ApexOptions = {
    series: [44, 55, 13, 33],
    dataLabels: { enabled: true },
    legend: { show: false },
    responsive: [{ breakpoint: 500 }],
    labels: ["Apple", "Mango", "Orange", "Watermelon"],
    chart: { type: "donut" },
    plotOptions: {
      pie: {
        donut: { labels: { show: false } },
      },
    },
  };
  return (
    <div className="overflow-auto">
      <h1 className="text-lg font-medium text-gray-900">Top Sales Products</h1>
      <p className="text-sm font-normal text-gray-500">Product Height Lavel</p>
      <div className="mt-4 w-full">
        <Chart
          options={options}
          series={options.series}
          type="donut"
          height={250}
        />
      </div>
    </div>
  );
}
