import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Industries: React.FC = () => {
  const { t } = useTranslation();

  // const industries = [
  //   {
  //     title: t('industrySection.cement.title'),
  //     description: t('industrySection.cement.description'),
  //     properties: t('industrySection.cement.properties'),
  //     applications: t('industrySection.cement.applications'),
  //     image: '/images/WhatsApp Image 2025-04-20 at 5.05.25 PM (1).jpeg'
  //   },
  //   {
  //     title: t('industrySection.automotive.title'),
  //     description: t('industrySection.automotive.description'),
  //     properties: t('industrySection.automotive.properties'),
  //     applications: t('industrySection.automotive.applications'),
  //     image: '/images/WhatsApp Image 2025-04-03 at 10.36.56 PM.jpeg'
  //   },
  //   {
  //     title: t('industrySection.filtration.title'),
  //     description: t('industrySection.filtration.description'),
  //     properties: t('industrySection.filtration.properties'),
  //     applications: t('industrySection.filtration.applications'),
  //     image: '/images/WhatsApp Image 2025-04-20 at 5.05.25 PM.jpeg'
  //   },
  //   {
  //     title: t('industrySection.marine.title'),
  //     description: t('industrySection.marine.description'),
  //     properties: t('industrySection.marine.properties'),
  //     applications: t('industrySection.marine.applications'),
  //     image: '/images/WhatsApp Image 2025-04-20 at 5.05.45 PM (1).jpeg'
  //   }
  // ];

  return (
    <Box sx={{ width: '100%', py: 2 }}>
      {/* Hero Section */}
      
      <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6, color: '#1A3C40', fontWeight: 'bold' }}>
            {t('industrySection.title')}
          </Typography>
          
          {/* Filtration Industry */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
            gap: 4,
            mb: 6
          }}>
            <Box sx={{ 
              flex: 1,
              '& img': {
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }
            }}>
              <img src="/images/WhatsApp Image 2025-04-30 at 5.02.19 PM.jpeg" alt="Filtration Industry" />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" component="h3" sx={{ color: '#1A3C40', fontWeight: 'bold', mb: 2 }}>
                {t('industrySection.filtration.title')}
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', mb: 2, lineHeight: 1.6 }}>
                {t('industrySection.filtration.description')}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#666', 
                  mb: 2, 
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line'
                }}
              >
                {t('industrySection.filtration.properties')}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#666', 
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line'
                }}
              >
                {t('industrySection.filtration.applications')}
              </Typography>
            </Box>
          </Box>

          {/* Cement Industry */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            mb: 6
          }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" component="h3" sx={{ color: '#1A3C40', fontWeight: 'bold', mb: 2 }}>
                {t('industrySection.cement.title')}
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', mb: 2, lineHeight: 1.6 }}>
                {t('industrySection.cement.description')}
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', mb: 2, lineHeight: 1.6 }}>
                {t('industrySection.cement.properties')}
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6 }}>
                {t('industrySection.cement.applications')}
              </Typography>
            </Box>
            <Box sx={{ 
              flex: 1,
              '& img': {
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }
            }}>
              <img src="/images/WhatsApp Image 2025-04-30 at 5.02.04 PM.jpeg" alt="Cement Industry" />
            </Box>
          </Box>

          {/* Automotive & Marine Industry */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            mb: 6
          }}> <Box sx={{ 
            flex: 1,
            '& img': {
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '15px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }
          }}>
            <img src="/images/WhatsApp Image 2025-04-30 at 5.02.50 PM.jpeg" alt="Automotive Industry" />
          </Box>
            
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" component="h3" sx={{ color: '#1A3C40', fontWeight: 'bold', mb: 2 }}>
                {t('industrySection.automotive.title')}
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', mb: 2, lineHeight: 1.6 }}>
                {t('industrySection.automotive.description')}
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', mb: 2, lineHeight: 1.6 }}>
                {t('industrySection.automotive.properties')}
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6 }}>
                {t('industrySection.automotive.applications')}
              </Typography>
            </Box>
           
          </Box>

          {/* Marine Industry */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4
          }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" component="h3" sx={{ color: '#1A3C40', fontWeight: 'bold', mb: 2 }}>
                {t('industrySection.marine.title')}
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', mb: 2, lineHeight: 1.6 }}>
                {t('industrySection.marine.description')}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#666', 
                  mb: 2, 
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line'
                }}
              >
                {t('industrySection.marine.properties')}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#666', 
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line'
                }}
              >
                {t('industrySection.marine.applications')}
              </Typography>
            </Box>
            <Box sx={{ 
              flex: 1,
              '& img': {
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }
            }}>
              <img src="/images/WhatsApp Image 2025-04-30 at 5.03.53 PM (1).jpeg" alt="Marine Industry" />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Industries Grid */}
      
    </Box>
  );
};

export default Industries; 