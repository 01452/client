import React, {useState} from 'react';
import MainCard from "./MainCard";
import {
    Grid,
} from '@mui/material';
import ReportAreaChart from "./ReportAreaChart";

const Chart = () => {
    const [slot, setSlot] = useState('week');
    return (
        <div>
            <Grid item xs={12} md={7} lg={8}>
                <MainCard sx={{mt: 2}} content={false}>
                    <ReportAreaChart/>
                </MainCard>
            </Grid>

        </div>
    );
};

export default Chart;