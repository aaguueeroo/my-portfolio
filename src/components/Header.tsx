import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

interface NavButtonProps {
    text: string;
    path: string;
}

const NavButton: React.FC<NavButtonProps> = ({text, path}) => {
    return (
        <Link to={path} style={{textDecoration: 'none', fontSize: '1.2rem'}}>
            <Button disableFocusRipple={true} disableRipple={true}
                    sx={{
                        color: (theme) => theme.palette.secondary.main,
                        padding: 0,
                        minWidth: 'auto',
                        ':hover': {
                            backgroundColor: 'transparent', // Disable hover effect
                            color: (theme) => theme.palette.secondary.main,
                        },
                    }}
            >
                {text}
            </Button>
        </Link>
    );
};

const Header = () => {
    return (
        <AppBar position="static" elevation={0} style={{paddingLeft: '16px', paddingRight: '16px'}}
                sx={{backgroundColor: (theme) => theme.palette.background.default}}>
            <Toolbar>
                <Typography variant="h5" sx={{flexGrow: 1}}>
                    Julia Agüero
                </Typography>
                <Box display={"flex"} gap={8}>
                    <NavButton text="Home" path="/"/>
                    <NavButton text="Portfolio" path="/portfolio"/>
                    <NavButton text="About me" path="/about"/>
                    <NavButton text="Contact" path="/contact"/>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
