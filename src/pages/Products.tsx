// @ts-nocheck 

import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Products: React.FC = () => {
  const { t } = useTranslation();

  // const products = [
  //   {
  //     title: t('products.range.polyesterMultifilament.title'),
  //     features: t('products.range.polyesterMultifilament.features'),
  //     image: '/images/WhatsApp Image 2025-04-20 at 5.07.21 PM (1).jpeg'
  //   },
  //   {
  //     title: t('products.range.spunPolyester.title'),
  //     features: t('products.range.spunPolyester.features'),
  //     image: '/images/WhatsApp Image 2025-04-20 at 5.07.21 PM (2).jpeg'
  //   },
  //   {
  //     title: t('products.range.strobel.title'),
  //     features: t('products.range.strobel.features'),
  //     image: '/images/WhatsApp Image 2025-04-20 at 5.05.45 PM (1).jpeg'
  //   },
  //   {
  //     title: t('products.range.hose.title'),
  //     features: t('products.range.hose.features'),
  //     image: '/images/WhatsApp Image 2025-04-20 at 5.05.45 PM.jpeg'
  //   }
  // ];

  return (
    <Box sx={{ width: '100%', py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'background.paper',
        py: 6,
        mb: 6,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: '#1A3C40', fontWeight: 'bold', mb: 4 }}>
            {t('products.title')}
          </Typography>
          <Typography variant="h5" component="p" align="center" sx={{ color: '#666', maxWidth: '800px', mx: 'auto', mb: 4, lineHeight: 1.6 }}>
            {t('products.intro.description')}
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', mb: 3, lineHeight: 1.6 }}>
            {t('products.intro.scrim')}
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', mb: 3, lineHeight: 1.6 }}>
            {t('products.intro.industries')}
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6 }}>
            {t('products.intro.nonwoven')}
          </Typography>
        </Container>
      </Box>

      {/* Product Range */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4, color: '#1A3C40', fontWeight: 'bold' }}>
          {t('products.range.title')}
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          
          {/* Polyester Multifilament Scrim */}
          <Grid item xs={12} md={6} width={'40%'}>
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
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1A3C40', fontWeight: 'bold', mb: 2 }}>
                  {t('products.range.polyesterMultifilament.title')}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#666',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {t('products.range.polyesterMultifilament.features')}
                </Typography>
                <CardMedia
                  component="img"
                  height="200"
                  image="/images/WhatsApp Image 2025-04-30 at 5.22.36 PM.jpeg"
                  alt="Polyester Multifilament Scrim"
                  sx={{ 
                    objectFit: 'cover',
                    imageRendering: 'crisp-edges',
                    height: '200px',
                    borderRadius: '8px',
                    mt: 2
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          

          {/* Spun Polyester Scrim */}
          <Grid item xs={12} md={6} width={'40%'}>
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
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1A3C40', fontWeight: 'bold', mb: 2 }}>
                  {t('products.range.spunPolyester.title')}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#666',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {t('products.range.spunPolyester.features')}
                </Typography>
                <CardMedia
                  component="img"
                  height="200"
                  image="/images/WhatsApp Image 2025-04-30 at 5.24.24 PM.jpeg"
                  alt="Polyester Multifilament Scrim"
                  sx={{ 
                    objectFit: 'cover',
                    imageRendering: 'crisp-edges',
                    height: '200px',
                    borderRadius: '8px',
                    mt: 2
                  }}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Strobel Scrim Fabric */}
          <Grid item xs={12} md={6} width={'40%'}>
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
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1A3C40', fontWeight: 'bold', mb: 2 }}>
                  {t('products.range.strobel.title')}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#666',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {t('products.range.strobel.features')}
                </Typography>
                <CardMedia
                  component="img"
                  height="200"
                  image="/images/WhatsApp Image 2025-05-14 at 9.40.21 PM.jpeg"
                  alt="Polyester Multifilament Scrim"
                  sx={{ 
                    objectFit: 'fill',
              //      width:'400px',
                    justifyContent:'center',
                    alignItems:'center',
                    imageRendering: 'crisp-edges',
                    height: '200px',
                    borderRadius: '8px',
                    mt: 2
                  }}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Hose Fabric */}
          <Grid item xs={12} md={6} width={'40%'}>
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
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1A3C40', fontWeight: 'bold', mb: 2 }}>
                  {t('products.range.hose.title')}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#666',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {t('products.range.hose.features')}
                </Typography>
                <CardMedia
                  component="img"
                  height="200"
                  image="/images/WhatsApp Image 2025-04-30 at 5.24.47 PM.jpeg"
                  alt="Polyester Multifilament Scrim"
                  sx={{ 
                    objectFit: 'cover',
                    imageRendering: 'crisp-edges',
                    height: '200px',
                    borderRadius: '8px',
                    mt: 2
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Industries We Serve */}
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 3, color: '#1A3C40', fontWeight: 'bold' }}>
          Industries We Serve
        </Typography>
        <Container maxWidth="md">
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                • Non-Woven Textiles{'\n'}
                • Automotive{'\n'}
                • Cement{'\n'}
                • Filtration
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                • Marine{'\n'}
                • Footwear{'\n'}
                • Construction{'\n'}
                • Industrial Equipment
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                • And More
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Key Features */}
      <Box sx={{ mt: 4, mb: 4, bgcolor: 'background.paper', py: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4, color: '#1A3C40', fontWeight: 'bold' }}>
          Key Features
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
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
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1A3C40', fontWeight: 'bold', mb: 2 }}>
                    High-Performance Yarn
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#666',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-line'
                    }}
                  >
                    • Made with high tenacity, low shrinkage yarns for consistent strength and performance.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
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
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1A3C40', fontWeight: 'bold', mb: 2 }}>
                    Impact and Pressure Resistance
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#666',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-line'
                    }}
                  >
                    • Boosts collision resistance and pressure durability for longer service life as well as reduced wear & tear.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
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
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1A3C40', fontWeight: 'bold', mb: 2 }}>
                    Customization Services
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#666',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-line'
                    }}
                  >
                    • Tailor-made fabrics to meet your specific technical and industrial requirements.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Products; 