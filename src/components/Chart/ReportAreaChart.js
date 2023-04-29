import {useContext, useEffect, useState} from 'react';

import {useTheme} from '@mui/material/styles';

import ReactApexChart from 'react-apexcharts';
import {Context} from "../../index";

const areaChartOptions = {
    chart: {
        height: 340, type: 'line', toolbar: {
            show: false
        }
    }, dataLabels: {
        enabled: false
    }, stroke: {
        curve: 'smooth', width: 1.5
    }, grid: {
        strokeDashArray: 4
    }, xaxis: {
        type: 'datetime',
        categories: ["2022-04-02", "2022-04-03", "2022-04-04", "2022-04-05", "2022-04-06", "2022-04-07", "2022-04-08",
            "2022-04-09", "2022-04-10", "2022-04-11", "2022-04-12", "2022-04-13", "2022-04-14", "2022-04-15", "2022-04-16",
            "2022-04-17", "2022-04-18", "2022-04-19", "2022-04-20", "2022-04-21", "2022-04-22", "2022-04-23", "2022-04-24", "2022-04-25", "2022-04-26", "2022-04-27", "2022-04-28"],
        labels: {
            format: 'dd'
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    }, yaxis: {
        show: false
    }, tooltip: {
        x: {
            format: 'dd'
        }
    }
};


const ReportAreaChart = () => {
    const theme = useTheme();

    const {primary, secondary} = theme.palette.text;
    const line = theme.palette.divider;

    const [options, setOptions] = useState(areaChartOptions);

    const {store} = useContext(Context);
    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState, colors: [theme.palette.warning.main], xaxis: {
                labels: {
                    style: {
                        colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary, secondary]
                    }
                }
            }, grid: {
                borderColor: line
            }, tooltip: {
                theme: 'light'
            }, legend: {
                labels: {
                    colors: 'grey.500'
                }
            }
        }));
    }, [primary, secondary, line, theme]);
    const [series] = useState([{
        name: 'ILS',
        data: [3.20307, 3.20358, 3.20977, 3.20507, 3.23834, 3.22511, 3.22229, 3.2223, 3.222, 3.21125, 3.20279, 3.21952,
            3.22049, 3.22119, 3.22118, 3.22119, 3.23555, 3.23515, 3.21933, 3.24327, 3.26885, 3.26886, 3.26901, 3.29481, 3.29344, 3.31905, 3.32853]

        // [58, 115, 28, 83, 63, 75, 35, 55]
    }]);

    return <ReactApexChart options={options} series={series} type="line" height={345}/>;
};

export default ReportAreaChart;
