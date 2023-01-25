import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

const activeStyleBig = {
    color: 'black',
    textDecoration: "none",
    fontWeight: 900
}

const smallScreenLinkStyle = { color: "black", textDecoration: "none", textTransform: "uppercase", fontSize: "13px", fontWeight: "bold", paddingRight: '10px' }

function NavBar2() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        🏠 Inicio
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {/* {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))} */}

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" component={NavLink} style={({ isActive }) => isActive ? {color: 'black'} : null} to='/celulosa' sx={smallScreenLinkStyle}>NanoCelulosa</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" component={NavLink} style={({ isActive }) => isActive ? {color: 'black'} : null} to='/sicilio' sx={smallScreenLinkStyle}>NanoSicilio</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" component={NavLink} style={({ isActive }) => isActive ? {color: 'black'} : null} to='/baterias' sx={smallScreenLinkStyle}>Baterias</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" component={NavLink} style={({ isActive }) => isActive ? {color: 'black'} : null} to='/consultar' sx={smallScreenLinkStyle}>Consultar</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                       🏠 Inicio
                    </Typography>
                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                        <Typography textAlign="center" component={NavLink} className='small-navlink' style={({ isActive }) => isActive ? actveStyleSmall : null} to='/celulosa' sx={smallScreenLinkStyle}>NanoCelulosa</Typography>
                        <Typography textAlign="center" component={NavLink} className='small-navlink' style={({ isActive }) => isActive ? actveStyleSmall : null} to='/sicilio' sx={smallScreenLinkStyle}>NanoSicilio</Typography>
                        <Typography textAlign="center" component={NavLink} className='small-navlink' style={({ isActive }) => isActive ? actveStyleSmall : null} to='/baterias' sx={smallScreenLinkStyle}>Baterias</Typography>
                        <Typography textAlign="center" component={NavLink} className='small-navlink' style={({ isActive }) => isActive ? actveStyleSmall : null} to='/consultar' sx={smallScreenLinkStyle}>Consultar</Typography>
                    </Box> */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* <Button component={NavLink} className="navlink" style={({ isActive }) => isActive ? activeStyleBig : null} to='/resumen' sx={{ my: 2, color: 'black', display: 'block' }}>Resumen</Button> */}
                        <Button component={NavLink} className="navlink" style={({ isActive }) => isActive ? activeStyleBig : null} to='/celulosa' sx={{ my: 2, color: 'white', display: 'block' }}>NanoCelulosa</Button>
                        <Button component={NavLink} className="navlink" style={({ isActive }) => isActive ? activeStyleBig : null} to='/silicio' sx={{ my: 2, color: 'white', display: 'block' }}>NanoSilicio</Button>
                        <Button component={NavLink} className="navlink" style={({ isActive }) => isActive ? activeStyleBig : null} to='/baterias' sx={{ my: 2, color: 'white', display: 'block' }}>Baterias</Button>
                        <Button component={NavLink} className="navlink" style={({ isActive }) => isActive ? activeStyleBig : null} to="/consultar" sx={{ my: 2, color: 'white', display: 'block'}}>Consultar</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default NavBar2;