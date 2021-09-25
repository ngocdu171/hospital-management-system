import React, { useEffect, useState } from 'react'
import HighchartReact from 'highcharts-react-official'
import Highchart from 'highcharts'

const generationOptions = (data) => {
    const categories = [];
    return {
        chart: {
            height: 500 //xet chieu cao linechart
        },
        title: {
            text: 'Total cases'
        },
        xAxis: {
            categories: categories,
            crosshair: true
        },
        colors: ['#F3585B'],
        yAxis: {
            min: 0,
            title: {
                text: null
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px>{point.key}</span><table>',
            pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
            footerFormat:'</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
        series: [
            {
                name: 'Total cases',
                data: data.map((item) => item.Confirmed)
            }
        ]
    }
}

function Summary({data}) {
    const [options, setOptions] = useState({})
    useEffect(() => {
        setOptions(generationOptions(data));
    }, [data])
    return (
        <div>
            <HighchartReact 
            highcharts={Highchart}
            options={options}
            />
        </div>
    )
}

export default Summary
