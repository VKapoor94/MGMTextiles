// @ts-nocheck 
import React from 'react';
import { Box, Container, Typography, Link, Button } from '@mui/material';
import {  Map } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=MGM+Textiles&t=m&z=17', '_blank');
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t('footer.contactInfo.title')}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              paragraph
              sx={{ 
                cursor: 'pointer',
                '&:hover': {
                  color: '#D6A77A',
                  textDecoration: 'underline'
                }
              }}
              onClick={handleMapClick}
            >
              {t('footer.contactInfo.address')}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <Link 
                href={`mailto:${t('footer.contactInfo.email')}`}
                sx={{ 
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#D6A77A',
                    textDecoration: 'underline'
                  }
                }}
              >
                {t('footer.contactInfo.email')}
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <Link 
                href={`tel:${t('footer.contactInfo.phone1')}`}
                sx={{ 
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#D6A77A',
                    textDecoration: 'underline'
                  }
                }}
              >
                {t('footer.contactInfo.phone1')}
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <Link 
                href={`tel:${t('footer.contactInfo.phone2')}`}
                sx={{ 
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#D6A77A',
                    textDecoration: 'underline'
                  }
                }}
              >
                {t('footer.contactInfo.phone2')}
              </Link>
            </Typography>
          </Grid>

          {/* Map */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: '250px',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                position: 'relative',
                '&:hover': {
                  '&::after': {
                    content: '"Click to open in Google Maps"',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  }
                }
              }}
              onClick={handleMapClick}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d77.12345678901234!3d12.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MGM Textiles Location"
                style={{ width: '100%', height: '100%', border: 0, pointerEvents: 'none' }}
              />
            </Box>
            <Button
              variant="outlined"
              startIcon={<Map />}
              onClick={handleMapClick}
              sx={{
                mt: 2,
                color: '#D6A77A',
                borderColor: '#D6A77A',
                '&:hover': {
                  borderColor: '#C6966A',
                  backgroundColor: 'rgba(214, 167, 122, 0.04)',
                },
              }}
            >
              {t('contact.address.viewOnMap')}
            </Button>
          </Grid>
        </Grid>

        {/* Social Media Links */}
        {/* <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton color="inherit" aria-label="Facebook">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" aria-label="Twitter">
            <Twitter />
          </IconButton>
          <IconButton color="inherit" aria-label="LinkedIn">
            <LinkedIn />
          </IconButton>
          <IconButton color="inherit" aria-label="Instagram">
            <Instagram />
          </IconButton>
        </Box> */}

        {/* Copyright */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} MGM Textiles. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 