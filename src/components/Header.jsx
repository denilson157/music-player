import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { HeadsetTwoTone } from '@mui/icons-material';

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <HeadsetTwoTone />
                <Typography sx={{ marginLeft: '8px' }} variant="h6" component="h1">App de music</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;