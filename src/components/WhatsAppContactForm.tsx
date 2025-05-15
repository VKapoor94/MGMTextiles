import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography,   
  Paper,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next';

interface WhatsAppContactFormProps {
  onClose: () => void;
}

const WhatsAppContactForm: React.FC<WhatsAppContactFormProps> = ({ onClose }) => {
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
    e.stopPropagation(); // Prevent event bubbling
    
    if (validateForm()) {
      const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
      window.open(`https://wa.me/9867739947?text=${message}`, '_blank');
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.stopPropagation(); // Prevent event bubbling
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

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 2, 
        width: 300,
        maxHeight: 400,
        overflowY: 'auto'
      }}
      onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up
    >
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2 
        }}
        onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up
      >
        <Typography variant="h6" sx={{ color: '#1A3C40', fontWeight: 'bold' }}>
          {t('contact.form.title')}
        </Typography>
        
        <TextField
          name="name"
          label={t('contact.form.name')}
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          size="small"
          fullWidth
          onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up
        />

        <TextField
          name="email"
          label={t('contact.form.email')}
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          size="small"
          fullWidth
          onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up
        />

        <TextField
          name="phone"
          label={t('contact.form.phone')}
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          size="small"
          fullWidth
          onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up
        />

        <TextField
          name="message"
          label={t('contact.form.message')}
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          multiline
          rows={3}
          size="small"
          fullWidth
          onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up
        />

        <Button
          type="submit"
          variant="contained"
          startIcon={<WhatsAppIcon />}
          sx={{
            bgcolor: '#25D366',
            '&:hover': {
              bgcolor: '#128C7E'
            }
          }}
          onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up
        >
          {'Send Message'}
        </Button>
      </Box>
    </Paper>
  );
};

export default WhatsAppContactForm; 