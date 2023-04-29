import React from 'react';
import LeftPart from "./leftPart";
import Box from "@mui/material/Box";
import RightPart from "./RightPart";

const Main = () => {
    return(
        <Box sx={{display:"flex", justifyContent: "space-between"}}>
            <LeftPart/>
            <RightPart/>
        </Box>
    )
};

export default Main;