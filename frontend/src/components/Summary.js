import React, { useContext, useEffect, useState } from 'react'
import HighchartReact from 'highcharts-react-official'
import Highchart from 'highcharts'
import { HSMContext } from '../context';
import moment from 'moment';
import { Button, ButtonGroup, ButtonToggle } from 'reactstrap';

const generationOptions = (report) => {
    const categories = report.map((item)=>moment(item.Date).format('DD/MM/YYYY'));
    return {
        chart: {
            height: 500 //xet chieu cao linechart
        },
        title: {
            text: 'Total Cases'
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
                name: 'Total Cases',
                data: report.map((item) => item.Confirmed)
            }
        ]
    }
}

function Summary() {
    const { report } = useContext(HSMContext)
    const [options, setOptions] = useState({})
    const [reportType, setReportType] = useState('all');
    useEffect(() => {
        let customData = [];
        switch (reportType) {
            case 'all':
                customData = report
                break;
            case '30':
                customData = report.slice(report.length - 30); //data.length = 50 ==> lay tu phan tu thu 21 tro ve cuoi
                break;
            case '7':
            customData = report.slice(report.length - 7); //data.length = 50 ==> lay tu phan tu thu 44 tro ve cuoi
            break;
            default:
                customData = report
                break;
        }
        setOptions(generationOptions(customData));
    }, [report, reportType])
    return (
        <div>
        <ButtonGroup>
        <Button outline color={reportType=== "all" ? "primary" : "secondary"} onClick={() => setReportType('all')}>All</Button>
        <Button outline color={reportType=== "30" ? "primary" : "secondary"} onClick={() => setReportType('30')}>30 days</Button>
        <Button outline color={reportType=== "7" ? "primary" : "secondary"} onClick={() => setReportType('7')}>7 days</Button>
        </ButtonGroup>
            <HighchartReact 
            highcharts={Highchart}
            options={options}
            />
        </div>
    )
}

export default Summary
