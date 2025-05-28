import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

const Services: React.FC = () => {
  const { t } = useTranslation();

  
  
  const services = [
    {
      title: t('serviceSection.weavingExcellence.title'),
      description: t('serviceSection.weavingExcellence.description'),
      image: '/images/WhatsApp Image 2025-04-30 at 5.00.21 PM (1).jpeg',
      image2:'/images/WhatsApp Image 2025-04-30 at 5.00.21 PM.jpeg'
    },
    {
      title: t('serviceSection.customJobWork.title'),
      description: t('serviceSection.customJobWork.description'),
      image: '/images/WhatsApp Image 2025-04-30 at 5.00.50 PM.jpeg',
      image2:'/images/WhatsApp Image 2025-04-30 at 5.00.51 PM.jpeg'

    },
    {
      title: t('serviceSection.endToEndSupport.title'),
      description: t('serviceSection.endToEndSupport.description'),
      image: '/images/WhatsApp Image 2025-04-30 at 5.01.07 PM (1).jpeg',
      image2:'/images/WhatsApp Image 2025-04-30 at 5.01.07 PM.jpeg'
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mb: 5, mt: 5 }}>
    <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4, color: '#1A3C40', fontWeight: 'bold' }}>
      {t('serviceSection.title')}
    </Typography>
    
    {/* Desktop View */}
    <Box sx={{ 
      display: { xs: 'none', md: 'flex' },
      justifyContent: 'center', 
      gap: 2,
      flexWrap: 'nowrap',
      overflowX: 'auto',
      '&::-webkit-scrollbar': {
        display: 'none'
      },
      msOverflowStyle: 'none',
      scrollbarWidth: 'none'
    }}>
      {services.map((service, index) => (
        <Card key={index} sx={{ 
          minWidth: '300px',
          maxWidth: '350px',
          flex: '0 0 auto',
          transition: 'transform 0.3s', 
          '&:hover': { transform: 'translateY(-5px)' },
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Box sx={{ position: 'relative', height: '200px' }}>
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
            >
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
                sx={{
                  objectFit: 'cover',
                  imageRendering: 'crisp-edges',
                  height: '200px'
                }}
              />
              <CardMedia 
                component="img"
                height="200"
                image={`${service.image2}`}
                alt={`${service.title} 2`}
                sx={{
                  objectFit: 'cover',
                  imageRendering: 'crisp-edges', 
                  height: '200px'
                }}
              />
            </Slider>
          </Box>
          <CardContent sx={{ 
            p: 3,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <Typography gutterBottom variant="h5" component="h3" sx={{ 
              color: '#1A3C40', 
              fontWeight: 'bold',
              mb: 2,
              textAlign: 'center'
            }}>
              {service.title}
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#666',
              lineHeight: 1.6,
              textAlign: 'center'
            }}>
              {service.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>

    {/* Mobile View with Slider */}
    <Box sx={{ 
      display: { xs: 'block', md: 'none' },
      '& .slick-slider': {
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      },
      '& .slick-list': {
        borderRadius: '20px',
      },
      '& .slick-track': {
        borderRadius: '20px',
      },
      '& .custom-dots': {
        bottom: '-30px !important',
      }
    }}>
      <Slider
        dots={true}
        infinite={true}
        speed={700}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={4000}
        customPaging={() => (
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#D6A77A',
              borderRadius: '50%',
              margin: '0 8px',
              opacity: 0.4,
              transition: 'all 0.3s ease',
              border: '2px solid #D6A77A',
            }}
          />
        )}
        dotsClass="slick-dots custom-dots"
      >
        {services.map((service, index) => (
          <Box key={index} sx={{ px: 2 }}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '15px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <Box sx={{ position: 'relative', height: '200px' }}>
                <Slider
                  dots={false}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={3000}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      objectFit: 'cover',
                      imageRendering: 'crisp-edges',
                      height: '200px'
                    }}
                  />
                  <CardMedia 
                    component="img"
                    height="200"
                    image={`${service.image2}`}
                    alt={`${service.title} 2`}
                    sx={{
                      objectFit: 'cover',
                      imageRendering: 'crisp-edges', 
                      height: '200px'
                    }}
                  />
                </Slider>
              </Box>
              <CardContent sx={{ 
                p: 3,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Typography gutterBottom variant="h5" component="h3" sx={{ 
                  color: '#1A3C40', 
                  fontWeight: 'bold',
                  mb: 2,
                  textAlign: 'center'
                }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: '#666',
                  lineHeight: 1.6,
                  textAlign: 'center'
                }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  </Container>

  );
};

export default Services; 