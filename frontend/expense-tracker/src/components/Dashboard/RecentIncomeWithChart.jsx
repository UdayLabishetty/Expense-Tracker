import React, { useEffect, useState } from 'react'
import CustomPieChart from '../Charts/CustomPieChart'


const COLORS = ["#875CF5", "#FA2C37", "#FF6900", "#4F39F6"]

const RecentIncomeWithChart = ({data, totalIncome}) => {

    const [chartData, setChartData] = useState([]);

    const prepareChartData = () => {
        const groupedData = {};

        // Step 1: Group transactions by source and sum their amounts
        data?.forEach((item) => {
            if (groupedData[item.source]) {
                groupedData[item.source] += item.amount;
            } else {
                groupedData[item.source] = item.amount;
            }
        });

        // Step 2: Convert the grouped object into an array for the chart
        const dataArr = Object.keys(groupedData).map((key) => ({
            name: key,
            amount: groupedData[key],
        }));

        setChartData(dataArr);
    };

    useEffect(() => {
        prepareChartData();

        return () => {};
    }, [data]);

  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Last 60 Days Income</h5>

        </div>

        <CustomPieChart 
            data={chartData}
            label="Total Income"
            totalAmount={`$${totalIncome}`}
            showTextAnchor
            colors={COLORS}
        />
    </div>
  )
}

export default RecentIncomeWithChart
