// @ts-nocheck 

import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Fade, Paper } from '@mui/material';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowPopup(!showPopup);
    }, 15000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: ( newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    customPaging: () => (
      <div
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: '#D6A77A',
          borderRadius: '50%',
          margin: '0 12px',
          opacity: 0.4,
          transition: 'all 0.3s ease',
          border: '2px solid #D6A77A',
        }}
      />
    ),
    dotsClass: 'slick-dots custom-dots',
  };

  const sliderImages = [
    {
      src: '/images/WhatsApp Image 2025-04-30 at 5.00.21 PM (1).jpeg',
      alt: 'Weaving Excellence',
      aspectRatio: '16/9',
      description: 'Using latest technology machines and modern techniques, we produce high-performance \n fabrics that meet the demanding industrial standards.',
    },
    {
      src: '/images/WhatsApp Image 2025-04-30 at 5.00.21 PM.jpeg',
      alt: '',
      aspectRatio: '16/9',
      description: '',
    },
    
    {
      src: '/images/WhatsApp Image 2025-04-30 at 5.25.17 PM (1).jpeg',
      alt: '',
      aspectRatio: '16/9',
      description: '',
    },
    {
      src: '/images/WhatsApp Image 2025-04-20 at 5.07.22 PM.jpeg',
      alt: 'Products',
      aspectRatio: '16/9',
      description: '• Polyester Multifilament Scrim \n • Spun Polyester Scrim \n • Strobel Scrim Fabric \n • Hose Fabric',
    },
    {
      src: '/images/WhatsApp Image 2025-04-30 at 5.00.51 PM.jpeg',
      alt: 'Custom Job Work',
      aspectRatio: '16/9',
      description: 'We provide flexible and tailored weaving solutions designed to meet your specific requirements.',
    },
    {
      src: '/images/WhatsApp Image 2025-04-30 at 5.01.07 PM (1).jpeg',
      alt: 'End to End Support',
      aspectRatio: '16/9',
      description: 'From material selection to final delivery, we offer a seamless experience.',
    },
    {
      src: '/images/WhatsApp Image 2025-05-14 at 9.38.55 PM.jpeg',
      alt: '',
      aspectRatio: '16/9',
      description: '',
    },
    

    

    // {
    //   src: '/images/WhatsApp Image 2025-04-30 at 5.02.04 PM.jpeg',
    //   alt: 'Cement',
    //   aspectRatio: '16/9',
    //   description: '• Used as reinforcement in filter bags and dust collection systems.\n• Adds strength and crack resistance in cementitious boards or panels.\n• Serves as backing in protective sheeting and thermal/acoustic insulation.',
    // },
    // {
    //   src: '/images/WhatsApp Image 2025-04-30 at 5.02.18 PM.jpeg',
    //   alt: 'Filtration',
    //   aspectRatio: '16/9',
    //   description: '• Acts as a support layer in filter media (air, liquid, and bag filters).\n• Provides strength, dimensional stability, and protection during high-pressure operations and cleaning cycles.',
    // },
    // {
    //   src: '/images/WhatsApp Image 2025-04-30 at 5.02.19 PM.jpeg',
    //   alt: '',
    //   aspectRatio: '16/9',
    //   description: '',
    // },
    // {
    //   src: '/images/WhatsApp Image 2025-04-30 at 5.02.50 PM.jpeg',
    //   alt: 'Automotive',
    //   aspectRatio: '16/9',
    //   description: '• Supports technical textiles used in seat belts, airbags, and insulation systems.\n • Offers high durability, flexibility, and form stability in automotive components.',
    // },
    // {
    //   src: '/images/WhatsApp Image 2025-04-30 at 5.03.53 PM (1).jpeg',
    //   alt: 'Marine',
    //   aspectRatio: '16/9',
    //   description: '• Used in marine battery covers and insulation materials.\n • Withstands harsh conditions: saltwater, heat, vibration, and chemical exposure.\n • Ensures reinforcement, shape retention, and safety in demanding marine environments.',
    // },
    // {
    //   src: '/images/WhatsApp Image 2025-04-30 at 5.03.53 PM.jpeg',
    //   alt: '',
    //   aspectRatio: '16/9',
    //   description: '',
    // }, 

    // {
    //   src: '/images/WhatsApp Image 2025-04-30 at 5.22.36 PM.jpeg',
    //   alt: 'Polyester Multifilament Scrim',
    //   aspectRatio: '5/6',
    //   description: ' Designed for non-woven needle felt applications\n• Enhances fabric durability and performance\n• Ideal for high-stress industrial uses',
    // },
    // {
    //   src: '/images/WhatsApp Image 2025-04-30 at 5.24.24 PM.jpeg',
    //   alt: 'Spun Polyester Scrim',
    //   aspectRatio: '5/6',
    //   description: '• Needle-felt non-woven scrim fabric\n• Offers high strength and structural support\n• Used in filtration, automotive interiors, and construction composites',
    // },
    // {
    //   src: '/images/WhatsApp Image 2025-04-30 at 5.24.47 PM.jpeg',
    //   alt: 'Strobel Scrim Fabric',
    //   aspectRatio: '5/6',
    //   description: '• Specialized scrim fabric used as shoe lining in Strobel stitching applications\n• Provides flexibility and reinforcement for footwear',
    // },
    // {
    //   src: '/images/WhatsApp Image 2025-04-30 at 5.25.08 PM.jpeg',
    //   alt: 'Hose Fabric',
    //   aspectRatio: '5/6',
    //   description: '• Reinforcement fabric for industrial hoses\n• Designed for high pressure and heavy-duty applications',
    // }
    


    // {
    //   src: '/images/WhatsApp Image 2025-04-30 at 5.02.04 PM (1).jpeg',
    //   alt: t('slider.customSolutions'),
    //   aspectRatio: '16/9',
    //   description: '•	Fabrics used in concrete reinforcement, filter bags, rubber hoses, and belting fabrics.\n•	Highly durable, chemical resistant, and quick-drying.\n•	Polyester fibers enhance concrete surfaces, preventing water and dirt penetration.',
    // },
    // {
    //   src: '/images/WhatsApp Image 2025-04-30 at 5.02.18 PM.jpeg',
    //   alt: t('slider.technicalFabrics'),
    //   aspectRatio: '16/9',
    //   description: '•	Specialized scrim fabrics used for marine battery covers and protective marine gear.\n•	Excellent saltwater resistance and UV stability.\n•	Engineered for long-lasting durability in harsh marine environments.',
    // },
    // {
    //   src: '/images/WhatsApp Image 2025-04-30 at 5.03.53 PM (1).jpeg',
    //   alt: t('slider.qualityControl'), 
    //   aspectRatio: '16/9',
    //   description: '•	Specialized scrim fabrics used for marine battery covers and protective marine gear.\n •	Excellent saltwater resistance and UV stability.\n •	Engineered for long-lasting durability in harsh marine environments.',

    // },
    // {
    //   src: '/images/WhatsApp Image 2025-04-30 at 5.02.50 PM.jpeg',
    //   alt: 'Automotive Industry', 
    //   aspectRatio: '16/9',
    //   description: '•	Fabrics designed for seat belts, airbags, seating fabrics, and other automotive components.\n•	High abrasion resistance, UV protection, lightweight strength, and durability.\n•	Available in woven and non-woven textile structures.',
    // }
  ];

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

  // const industries = [
  //   t('industrySection.automotive'),
  //   t('industrySection.construction'),
  //   t('industrySection.agriculture'),
  //   t('industrySection.healthcare'),
  //   t('industrySection.sports'),
  //   t('industrySection.defense'),
  // ];

  return (
    <Box sx={{ width: '100%', py: 1 }}>
      {/* Hero Slider */}
      <Box sx={{ 
        padding: '0 20px',
        width: '100%', 
        position: 'relative',
        mt: 1,
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
          bottom: '-50px !important',
          display: 'flex !important',
          justifyContent: 'center',
          alignItems: 'center',
          '& li': {
            margin: '0 12px',
            '& button:before': {
              display: 'none',
            },
            '&.slick-active div': {
              opacity: 1,
              transform: 'scale(1.2)',
              backgroundColor: '#D6A77A',
              border: '2px solid #D6A77A',
              boxShadow: '0 0 10px rgba(214, 167, 122, 0.5)',
            }
          },
        },
        '@keyframes slideUp': {
          '0%': {
            transform: 'translateY(100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        '@keyframes slideInRight': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        }
      }}>

<Container maxWidth="lg" sx={{ mt: -2  , mb: 2  }}>
        {/* <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ color: '#1A3C40', fontWeight: 'bold' }}>
          {t('welcome.title')}
        </Typography>
       */}
      </Container>

        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <Box key={`${index}-${currentSlide}`} sx={{ 
              width: '100%', 
              height: '500px', 
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden'
            }}>
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: image.aspectRatio === '5/6' ? 'contain' : 'cover',
                  objectPosition: image.aspectRatio === '5/6' ?'right' : 'center',
                  imageRendering: 'crisp-edges',
                  borderRadius: '20px',
                  animation: index === currentSlide ? 'slideUp 1s ease-out forwards' : 'none',
                }}
              />
              <Box
                className="slide-text-box"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: image.aspectRatio === '5/6' ? 'none':'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'  ,
                  padding: '40px 20px 20px',
                  color: image.aspectRatio === '5/6' ?'#5A514C' : '#ffffff',
                  borderRadius: '0 0 20px 20px',
                  animation: index === currentSlide ? 'slideInRight 1s ease-out 0.5s forwards' : 'none',
                  opacity: index === currentSlide ? 1 : 0,
                }}
              >
                <Typography variant="h3" sx={{ 
                  fontWeight: 'bold', 
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  color: image.aspectRatio === '5/6' ?'#5A514C' : '#ffffff',
                }}>
                  {image.alt}
                </Typography>
                <Typography variant="h6" sx={{ 
                  fontWeight: 'normal',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                  color: image.aspectRatio === '5/6' ?'#5A514C' : '#ffffff',
                  mt: 1,
                  whiteSpace: 'pre-line'
                }}>
                  {image.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Welcome Section */}

      <Grid item xs={12} md={6} padding={"20px"}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h4" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
            Established in 2002, MGM Textiles is an ISO 9001 : 2015 certified company based in Sarigam, Gujarat. We are a trusted name in the manufacturing of high-performance industrial fabrics tailored for technical and industrial applications. With a strong foundation in quality and innovation, we specialize in producing scrim fabric, strobble fabric, reinforcement fabric, and hose fabric — essential components across industries like automotive, cement, chemical, filtration, marine, footwear, aviation, and sports.
            </Typography>
            <Typography variant="body1" paragraph>
            At MGM Textiles, we combine decades of industry experience with cutting-edge technology and advanced weaving techniques to deliver fabrics that meet the highest standards of durability, strength, and reliability. Our state-of-the-art facility is equipped with modern rapier looms and precision-driven processes to ensure consistency and excellence in every roll we produce.
            </Typography>
            <Typography variant="body1" paragraph>
            Beyond manufacturing, we also provide customized job-work services to support our clients’ unique requirements. Whether you’re seeking reinforcement solutions or high-performance non-woven fabrics, MGM Textiles is committed to delivering value, precision, and long-term partnership in every thread.            </Typography>
          
          </Paper>
        </Grid>

      
     
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4, color: '#1A3C40', fontWeight: 'bold' }}>
          {t('products.range.title')}
        </Typography>
        <Slider
          dots={true}
          infinite={true}
          speed={700}
          slidesToShow={2}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={4000}
          responsive={[
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]}
        >
          {/* Polyester Multifilament Scrim */}
          <Box key="polyesterMultifilament" sx={{ px: 2 }}>
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
                {/* <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#666',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {t('products.range.polyesterMultifilament.features')}
                </Typography> */}
                <CardMedia
                  component="img"
                  height="250"
                  image="/images/WhatsApp Image 2025-04-30 at 5.22.36 PM.jpeg"
                  alt="Polyester Multifilament Scrim"
                  sx={{ 
                    objectFit: 'cover',
                    imageRendering: 'crisp-edges',
                    height: '250px',
                    borderRadius: '8px',
                    mt: 2
                  }}
                />
              </CardContent>
            </Card>
          </Box>
          {/* Spun Polyester Scrim */}
          <Box key="spunPolyester" sx={{ px: 2 }}>
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
                {/* <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#666',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {t('products.range.spunPolyester.features')}
                </Typography> */}
                <CardMedia
                  component="img"
                  height="250"
                  image="/images/WhatsApp Image 2025-04-30 at 5.24.24 PM.jpeg"
                  alt="Spun Polyester Scrim"
                  sx={{ 
                    objectFit: 'cover',
                    imageRendering: 'crisp-edges',
                    height: '250px',
                    borderRadius: '8px',
                    mt: 2
                  }}
                />
              </CardContent>
            </Card>
          </Box>
          {/* Strobel Scrim Fabric */}
          <Box key="strobel" sx={{ px: 2 }}>
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
                {/* <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#666',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {t('products.range.strobel.features')}
                </Typography> */}
                <CardMedia
                  component="img"
                  height="250"
                  image="/images/WhatsApp Image 2025-05-14 at 9.40.21 PM.jpeg"
                  alt="Strobel Scrim Fabric"
                  sx={{ 
                    objectFit: 'fill',
                    justifyContent:'center',
                    alignItems:'center',
                    imageRendering: 'crisp-edges',
                    height: '250px',
                    borderRadius: '8px',
                    mt: 2
                  }}
                />
              </CardContent>
            </Card>
          </Box>
          {/* Hose Fabric */}
          <Box key="hose" sx={{ px: 2 }}>
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
                {/* <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#666',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {t('products.range.hose.features')}
                </Typography> */}
                <CardMedia
                  component="img"
                  height="250"
                  image="/images/WhatsApp Image 2025-04-30 at 5.24.47 PM.jpeg"
                  alt="Hose Fabric"
                  sx={{ 
                    objectFit: 'cover',
                    imageRendering: 'crisp-edges',
                    height: '250px',
                    borderRadius: '8px',
                    mt: 2
                  }}
                />
              </CardContent>
            </Card>
          </Box>
        </Slider>
      </Container>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ mb: 5,mt:5  }}>
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4, color: '#1A3C40', fontWeight: 'bold' }}>
          {t('serviceSection.title')}
        </Typography>
        <Box sx={{ 
          display: 'flex', 
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
      </Container>

      

      {/* Industries Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 5, color: '#1A3C40', fontWeight: 'bold' }}>
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
          }}>
           
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
              <img src="/images/WhatsApp Image 2025-04-30 at 5.02.50 PM.jpeg" alt="Automotive Industry" />
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

      

      {/* Popup Image */}
      <Fade in={showPopup} timeout={1000}>
        <Box
          sx={{
            display: { xs: 'none', sm: 'block' }, // Hide on mobile, show on sm+
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
            animation: 'bounce 1s ease-in-out infinite',
            '@keyframes bounce': {
              '0%, 100%': {
                transform: 'translateY(0)',
              },
              '50%': {
                transform: 'translateY(-10px)',
              },
            },
          }}
        >
          <Card
            sx={{
              width: { xs: 250, sm: 300 },
              height: { xs: 375, sm: 450 },
              borderRadius: '10px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              overflow: 'hidden',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="/images/WhatsApp Image 2025-04-30 at 5.36.23 PM.jpeg"
              alt="Special Offer"
              sx={{
                objectFit: 'cover',
                width: '100%',
              }}
            />
          </Card>
        </Box>
      </Fade>
    </Box>
  );
};

export default Home; 