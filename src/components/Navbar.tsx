import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemText, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Brightness4, Brightness7, Menu } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useLocation } from 'react-router-dom';
import WhatsAppContactForm from './WhatsAppContactForm';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/products', label: t('products.title') },
    { path: '/services', label: t('services') },
    { path: '/industries', label: t('industries') },
    { path: '/contact', label: t('contacttext') },
    ...(isMobile ? [{ path: '/contact#contact-form', label: <WhatsAppIcon /> }] : []),
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.path} 
            component={Link} 
            to={item.path}
            sx={{
              color: isActive(item.path) ? theme.palette.primary.main : 'inherit',
              fontWeight: isActive(item.path) ? 600 : 400,
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem>
          <Button
            color="inherit"
            onClick={() => changeLanguage(i18n.language === 'en' ? 'hi' : 'en')}
            fullWidth
          >
            {i18n.language === 'en' ? 'हिंदी' : 'English'}
          </Button>
        </ListItem>
        <ListItem>
          <IconButton color="inherit" onClick={toggleTheme} sx={{ mx: 'auto' }}>
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowWhatsAppForm(!showWhatsAppForm);
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                px: { xs: 1, sm: 2 }, // horizontal padding
                py: { xs: 0.2, sm: 0.2}, // vertical padding
                m: { xs: 0, sm: 1 }, // margin around the box
                gap: 0.2, // space between children
              }}
            >
              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                component="div"
                sx={{
                  marginTop:'4px',
                  marginRight:'2px',
                  fontFamily: 'DM Serif Display',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '1.3rem' : '1.75rem',
                  mb: 0.2, // margin bottom for spacing from image
                  ml: 0.5, // slight left margin for alignment
                }}
              >
                MGM TEXTILES
              </Typography>
              <img
                src={isDarkMode ? "/images/logo3.png" : "/images/logo2.png"}
                alt="MGM Textiles Logo"
                style={{
                  height: isMobile ? '26px' : '31px',
                  width:isMobile?'115px':'212px',
                  //marginRight:'20px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </Box>
          </Link>
        </Box>
        
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                '& .MuiDrawer-paper': { 
                  boxSizing: 'border-box', 
                  width: 240,
                  backgroundColor: theme.palette.background.paper
                },
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navItems.map((item) => (
              <Button 
                key={item.path}
                color="inherit" 
                component={Link} 
                to={item.path}
                sx={{
                  borderBottom: isActive(item.path) ? `2px solid ${theme.palette.primary.main}` : 'none',
                  fontWeight: isActive(item.path) ? 600 : 400,
                  fontSize: '16px',
                }}
              >
                {item.label}
              </Button>
            ))}
            
            <Tooltip
              open={showWhatsAppForm}
              onClose={() => setShowWhatsAppForm(false)}
              title={
                <WhatsAppContactForm onClose={() => setShowWhatsAppForm(false)} />
              }
              placement="bottom"
              arrow
              PopperProps={{
                sx: {
                  '& .MuiTooltip-tooltip': {
                    backgroundColor: 'transparent',
                    padding: 0,
                    maxWidth: 'none',
                  }
                },
                onClick: (e) => e.stopPropagation()
              }}
              disableFocusListener
              disableHoverListener
              disableTouchListener
            >
              <IconButton
                color="inherit"
                onClick={handleWhatsAppClick}
                sx={{
                  color: '#25D366',
                  '&:hover': {
                    color: '#128C7E',
                  }
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Tooltip>
            
            <IconButton color="inherit" onClick={toggleTheme}>
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 