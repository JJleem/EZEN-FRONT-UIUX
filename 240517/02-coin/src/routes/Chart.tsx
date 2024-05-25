import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface ChartProps {
  coinId?: string;
}

interface IHistrical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Chart = ({ coinId }: ChartProps) => {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistrical[]>(
    ["coinHistory", coinId],
    () => fetchCoinHistory(coinId)
  );
  const seriesData = data?.map((price) => parseFloat(price.close)) || [];
  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexCharts
          type="line"
          series={[
            {
              name: "Price",
              data: seriesData,
            },
          ]}
          options={{
            chart: {
              width: 500,
              height: 500,
              toolbar: {
                show: false,
              },
              background: "#000",
            },
            theme: {
              mode: isDark ? "dark" : "light",
            },
            stroke: {
              width: 4,
              curve: "smooth",
            },
            grid: {
              show: true,
            },
            xaxis: {
              labels: {
                show: true,
              },
              axisBorder: {
                show: true,
              },
              axisTicks: {
                show: true,
              },
              categories: data?.map((price) =>
                new Date(price.time_close * 1000).toLocaleString()
              ),
            },
            yaxis: {
              labels: {
                show: true,
              },
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"] },
            },
            colors: ["#0fbcf9"],
          }}
        />
      )}
    </div>
  );
};

export default Chart;
