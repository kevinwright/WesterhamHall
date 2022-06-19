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
import ModeToggleButton from '../ModeToggleButton';
import { NavLink } from "react-router-dom"
// import {ReactComponent as SiteLogo} from './logo.svg';
import logo from '../assets/wh.svg';

type PageSpec = {
    readonly title: string;
    readonly path: string;
}

const pages: PageSpec[] = [
    {title: 'HOME', path: '/'},
    {title: 'FACILITIES', path: '/facilities'},
    {title: "CONTACT US", path: '/contact-us'}
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ height: '64px', display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src={logo} alt="logo" />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Futura Heavy',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WESTERHAM HALL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
              {pages.map(({title, path}) => (
                <MenuItem key={title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                      <NavLink style={{textDecoration: 'none'}} to={path}>
                        {title}
                      </NavLink>
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ height: '64px', display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img src={logo} alt="logo" />
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
              fontFamily: 'Futura Heavy',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WESTERHAM<br />HALL
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({title, path}) => (
              <Button
                key={title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
              >
                <NavLink style={{textDecoration: 'none'}} to={`${path}`}>
                    {title}
                </NavLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <ModeToggleButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
