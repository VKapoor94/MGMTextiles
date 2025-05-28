// @ts-nocheck 

import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const About: React.FC = () => {
  
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        About MGM Textiles
      </Typography>
      <Typography variant="h5" component="p" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Your Trusted Partner in Industrial Textile Solutions
      </Typography>

      <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h4" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" paragraph>
            The first thread in our textile journey was woven two decades ago—born from the dream of our late grandfather, Shri Jagdish Kumar Malhotra, the founder of MGM Textiles. What began as his vision of yarns and fabrics has grown into a legacy—one we are proud to inherit and carry forward with passion and purpose. MGM Textiles stands today as a testament to his foresight, craftsmanship and belief in building something that endures through generations
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h4" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
            Established in 2002, MGM Textiles is an ISO 9001 : 2015 certified company based in Sarigam, Gujarat. We are a trusted name in the manufacturing of high-performance industrial fabrics tailored for technical and industrial applications. With a strong foundation in quality and innovation,  we specialize in producing scrim fabric, reinforcement fabric, hose fabric and strobel fabric — essential components across industries like filtration, automotive, cement, marine, chemical, footwear, aviation and sports.
            </Typography>
            <Typography variant="body1" paragraph>
            At MGM Textiles, we combine decades of industry experience with cutting-edge technology and advanced weaving techniques to deliver fabrics that meet the highest standards of durability, strength, and reliability. Our state-of-the-art facility is equipped with modern rapier looms and precision-driven processes to ensure consistency and excellence in every roll we produce.
            </Typography>
            <Typography variant="body1" paragraph>
            Beyond manufacturing, we also provide customized job-work services to support our clients’ unique requirements. Whether you’re seeking reinforcement solutions or high-performance woven fabrics, MGM Textiles is committed to delivering value, precision, and long-term partnership in every thread.            </Typography>
          
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
            At MGM Textiles, our mission is to engineer and supply durable, customizable industrial fabric solutions — with a core specialization in scrim fabric — that meet the evolving technical demands of our clients.
            We strive to:
             </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body1" paragraph>
              Set new benchmarks in quality, consistency, and performance.
              </Typography>
              <Typography component="li" variant="body1" paragraph>
              Expand our product range through continuous innovation and R&D.
                            </Typography>
              <Typography component="li" variant="body1" paragraph>
              Offer flexible manufacturing, job work, and end-to-end service models to serve diverse industrial needs.              </Typography>
              <Typography component="li" variant="body1" paragraph>
              Build long-term partnerships based on trust, reliability, and customer satisfaction.
              </Typography>
              <Typography component="li" variant="body1" paragraph>
              Contribute to the growth of India’s technical textiles industry through sustainable and responsible manufacturing practices.             </Typography>
            
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
            <Typography variant="h4" gutterBottom>
            Vision Statement
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                {/* <Typography variant="h6" gutterBottom>
                  Quality Assurance
                </Typography> */}
                <Typography variant="body1">
                To become India’s leading manufacturer and trusted partner in industrial/technical textiles by delivering innovative, high-performance fabric solutions that drive progress across filtration, automotive, cement, marine, and technical sectors — with quality, precision and integrity at the core of everything we do.
                </Typography>
              </Grid>
              {/* <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>
                  Technical Expertise
                </Typography>
                <Typography variant="body1">
                  Our team of experienced professionals brings decades of industry knowledge and technical
                  expertise to every project.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>
                  Customer Focus
                </Typography>
                <Typography variant="body1">
                  We work closely with our clients to understand their specific needs and provide
                  customized solutions that deliver optimal results.
                </Typography>
              </Grid> */}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 