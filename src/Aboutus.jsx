import React from "react";
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';

function history() {
    return(
        <>
        <Box sx = {{ display: "flex"}}>
         <Sidenav/>
            <h1>
                History
            </h1>
        </Box>
        </>
        );
}

export default history;
