import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, TextField, Button, Link } from '@mui/material';
import { Email, Phone, LocationOn, Map } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // Check if the URL has a hash
    if (window.location.hash === '#contact-form') {
      // Get the element
      const element = document.getElementById('contact-form');
      if (element) {
        // Scroll to the element with smooth behavior
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); // Empty dependency array means this runs once when component mounts

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.nameRequired');
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.emailRequired');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contact.form.emailInvalid');
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('contact.form.phoneRequired');
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = t('contact.form.phoneInvalid');
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.messageRequired');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
      window.open(`https://wa.me/9867739947?text=${message}`, '_blank');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=MGM+Textiles&t=m&z=17', '_blank');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4, color: '#1A3C40', fontWeight: 'bold' }}>
        {t('contact.title')}
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: 4,
        mb: 6,
        flexWrap: { xs: 'wrap', md: 'nowrap' }
      }}>
        {/* Address */}
        <Box sx={{ 
          flex: 1,
          minWidth: '280px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          p: 3,
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          bgcolor: 'background.paper'
        }}>
          <LocationOn sx={{ 
            fontSize: 40, 
            color: '#D6A77A', 
            mb: 2,
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 100%': {
                transform: 'translateY(0)'
              },
              '50%': {
                transform: 'translateY(-10px)'
              }
            }
          }} />
          <Typography variant="h6" gutterBottom sx={{ color: '#1A3C40', fontWeight: 'bold' }}>
            {t('contact.address.title')}
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ 
              lineHeight: 1.6,
              cursor: 'pointer',
              '&:hover': {
                color: '#D6A77A',
                textDecoration: 'underline'
              }
            }}
            onClick={handleMapClick}
          >
            {t('contact.address.content')}
          </Typography>
          <Box
            sx={{
              mt: 3,
              width: '80%',
              height: '250px',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              '& iframe': {
                width: '100%',
                height: '100%',
                border: 0,
              }
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d77.12345678901234!3d12.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MGM Textiles Location"
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
        </Box>

        {/* Contact Information */}
        <Box sx={{ 
          flex: 1,
          minWidth: '280px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          p: 3,
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          bgcolor: 'background.paper'
        }}>
          <Phone sx={{ 
            fontSize: 40, 
            color: '#D6A77A', 
            mb: 2,
            animation: 'ring 2s ease-in-out infinite',
            '@keyframes ring': {
              '0%': {
                transform: 'rotate(0deg)',
              },
              '20%': {
                transform: 'rotate(15deg)',
              },
              '40%': {
                transform: 'rotate(-15deg)',
              },
              '60%': {
                transform: 'rotate(7deg)',
              },
              '80%': {
                transform: 'rotate(-7deg)',
              },
              '100%': {
                transform: 'rotate(0deg)',
              }
            }
          }} />
          <Typography variant="h6" gutterBottom sx={{ color: '#1A3C40', fontWeight: 'bold' }}>
            {t('contact.contactInfo.title')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1, lineHeight: 1.6 }}>
            <Email sx={{ mr: 1, verticalAlign: 'middle' }} />
            <Link 
              href={`mailto:${t('contact.contactInfo.email')}`}
              sx={{ 
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  color: '#D6A77A',
                  textDecoration: 'underline'
                }
              }}
            >
              {t('contact.contactInfo.email')}
            </Link>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1, lineHeight: 1.6 }}>
            <Phone sx={{ mr: 1, verticalAlign: 'middle' }} />
            <Link 
              href={`tel:${t('contact.contactInfo.phone1')}`}
              sx={{ 
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  color: '#D6A77A',
                  textDecoration: 'underline'
                }
              }}
            >
              {t('contact.contactInfo.phone1')}
            </Link>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
            <Phone sx={{ mr: 1, verticalAlign: 'middle' }} />
            <Link 
              href={`tel:${t('contact.contactInfo.phone2')}`}
              sx={{ 
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  color: '#D6A77A',
                  textDecoration: 'underline'
                }
              }}
            >
              {t('contact.contactInfo.phone2')}
            </Link>
          </Typography>
        </Box>

        {/* Contact Form */}
        <Box 
          id="contact-form"
          sx={{ 
            flex: 1,
            minWidth: '280px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            p: 3,
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            bgcolor: 'background.paper'
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: '#1A3C40', fontWeight: 'bold', textAlign: 'left' }}>
            {t('contact.form.title')}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: '500px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                name="name"
                fullWidth
                label={t('contact.form.name')}
                variant="outlined"
                size="small"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                sx={{ 
                  textAlign: 'left',
                  '& .MuiInputLabel-root': {
                    textAlign: 'left',
                    width: '100%'
                  }
                }}
              />
              <TextField
                name="email"
                fullWidth
                label={t('contact.form.email')}
                variant="outlined"
                size="small"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                sx={{ 
                  textAlign: 'left',
                  '& .MuiInputLabel-root': {
                    textAlign: 'left',
                    width: '100%'
                  }
                }}
              />
              <TextField
                name="phone"
                fullWidth
                label={t('contact.form.phone')}
                variant="outlined"
                size="small"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                sx={{ 
                  textAlign: 'left',
                  '& .MuiInputLabel-root': {
                    textAlign: 'left',
                    width: '100%'
                  }
                }}
              />
              <TextField
                name="message"
                fullWidth
                label={t('contact.form.message')}
                variant="outlined"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                sx={{ 
                  textAlign: 'left',
                  '& .MuiInputLabel-root': {
                    textAlign: 'left',
                    width: '100%'
                  }
                }}
              />
              <Button
                type="submit"
                variant="contained"
                startIcon={<WhatsAppIcon />}
                fullWidth
                sx={{
                  bgcolor: '#25D366',
                  '&:hover': {
                    bgcolor: '#128C7E'
                  }
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact; 