import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Converter from "./Converter";
import HistoricalData from "./HistoricalData";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}


export default function LeftPart() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '65%', border: '1px solid black'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={{
                        backgroundColor: '#1d3e67',
                        '& .MuiTabs-indicator': {backgroundColor: '#1d3e67'},
                        '& .MuiTab-root': {color: '#fff', fontSize: '16px', fontWeight: '600'},
                        '& .Mui-selected': {color: '#1d3e67 !important', backgroundColor: '#ffffff',},
                    }}
                >
                    <Tab label="Currency converter"/>
                    <Tab label="Historical rates"/>
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Converter/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <HistoricalData/>
            </TabPanel>
        </Box>
    );
}