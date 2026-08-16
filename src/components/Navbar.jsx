import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Digital Marketing', path: '/digital-marketing' },
  { label: 'Small Business', path: '/small-business' },
  { label: 'Learning Hub', path: '/learning-hub' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    logout();
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E2E8F0',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.2,
              textDecoration: 'none',
              color: 'primary.main',
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2.5,
                bgcolor: 'rgba(15, 82, 186, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TrendingUpIcon sx={{ fontSize: 26, color: '#0F52BA' }} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: '-0.5px', color: '#0F172A' }}>
              Market<span style={{ color: '#2E7D32' }}>Grow</span>
            </Typography>
          </Box>

          {/* Core Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: isActive(item.path) ? '#0F52BA' : '#475569',
                  fontWeight: isActive(item.path) ? 700 : 500,
                  fontSize: '0.95rem',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  bgcolor: isActive(item.path) ? 'rgba(15, 82, 186, 0.08)' : 'transparent',
                  '&:hover': {
                    bgcolor: isActive(item.path) ? 'rgba(15, 82, 186, 0.12)' : 'rgba(15, 82, 186, 0.04)',
                    color: '#0F52BA',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Desktop Auth Actions */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
            {user ? (
              <>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/dashboard-Overview"
                  startIcon={<DashboardIcon />}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    borderColor: '#CBD5E1',
                    color: '#0F172A',
                    '&:hover': { borderColor: '#0F52BA', bgcolor: 'rgba(15, 82, 186, 0.04)' },
                  }}
                >
                  Dashboard
                </Button>
                <IconButton onClick={handleMenuOpen} sx={{ p: 0.5 }}>
                  <Avatar sx={{ bgcolor: '#0F52BA', width: 38, height: 38, fontWeight: 700 }}>
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      mt: 1.5,
                      filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.08))',
                      borderRadius: 3,
                      minWidth: 180,
                      border: '1px solid #E2E8F0',
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem component={Link} to="/dashboard-Overview" onClick={handleMenuClose}>
                    <ListItemIcon><DashboardIcon fontSize="small" /></ListItemIcon>
                    Dashboard
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
                    <ListItemIcon><LogoutIcon fontSize="small" color="error" /></ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button variant="text" component={Link} to="/login" sx={{ color: '#475569', fontWeight: 600, px: 2 }}>
                  Login
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  to="/register"
                  sx={{
                    px: 3,
                    py: 1,
                    fontWeight: 700,
                    borderRadius: 2,
                    boxShadow: '0 4px 14px rgba(15, 82, 186, 0.35)',
                    '&:hover': { boxShadow: '0 6px 20px rgba(15, 82, 186, 0.45)' },
                  }}
                >
                  Register Free
                </Button>
              </>
            )}
          </Box>

          {/* Mobile Drawer Trigger */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: '#0F172A' }}
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: '100%', maxWidth: 320, borderRadius: '16px 0 0 16px', bgcolor: '#FFFFFF' },
        }}
      >
        <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TrendingUpIcon sx={{ color: '#0F52BA' }} />
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Market<span style={{ color: '#2E7D32' }}>Grow</span>
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 1.5, py: 2 }}>
          {navItems.map((item) => (
            <ListItem disablePadding key={item.label} sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                selected={isActive(item.path)}
                sx={{
                  borderRadius: 2,
                  '&.Mui-selected': { bgcolor: 'rgba(15, 82, 186, 0.08)', color: '#0F52BA' },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: isActive(item.path) ? 700 : 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;