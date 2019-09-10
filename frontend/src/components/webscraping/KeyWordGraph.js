import React from 'react'
import { convertGraphQLSetToLabelData } from '../shared/functions/convertGraphQLSetToLabelData';
import Chart from "react-apexcharts";

const KeyWordGraph = ({ elem }) => {


    const {labels, data} = convertGraphQLSetToLabelData(elem.resultSet, "date", "nbSale");
    const chartData = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: labels
            }
        },
        series: [
            {
                name: "series-1",
                data: data
            }
        ]
    };

    let title = elem.keyword;
    title = title.charAt(0).toUpperCase() + title.slice(1);
    return (
        <div className="keyWordGraph">
            <div className="titleChart">{title}</div>
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="bar"
                width="500"
            />
        </div>
    )
}

export default KeyWordGraph
