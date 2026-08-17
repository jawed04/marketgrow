import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  MenuItem,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const contactInfo = [
  {
    icon: <EmailIcon sx={{ color: '#0F52BA', fontSize: 24 }} />,
    title: 'Email Support',
    detail: 'support@marketgrow.com',
    subtext: 'We typically reply within 2 hours.',
  },
  {
    icon: <PhoneIcon sx={{ color: '#0F52BA', fontSize: 24 }} />,
    title: 'Direct Call',
    detail: '+91 9876543210',
    subtext: 'Mon-Fri from 9am to 6pm.',
  },
  {
    icon: <LocationOnIcon sx={{ color: '#0F52BA', fontSize: 24 }} />,
    title: 'Head Office',
    detail: 'City center 123 near Mumbai Center Railway',
    subtext: 'Mumbai,Maharashtra',
  },
];

const categories = [
  'General Inquiry',
  'Learning Hub Access',
  'Custom Enterprise Plans',
  'Technical Support',
  'Partnership & Media',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Inquiry',
    subject: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      category: 'General Inquiry',
      subject: '',
      message: '',
    });
  };

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 650, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: 1.5,
                bgcolor: '#0F52BA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TrendingUpIcon sx={{ fontSize: 20, color: '#FFFFFF' }} />
            </Box>
            <Typography variant="subtitle1" sx={{ color: '#0F52BA', fontWeight: 800 }}>
              GET IN TOUCH
            </Typography>
          </Box>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, color: '#0F172A', fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }, mb: 2 }}
          >
            We're Here to Help You Grow
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', sm: '1.05rem' } }}>
            Have questions about our growth modules, platform features, or enterprise solutions? Reach out to our team below.
          </Typography>
        </Box>

        {/* Contact Information Cards */}
        <Grid container spacing={3} sx={{ mb: { xs: 6, md: 8 } }}>
          {contactInfo.map((item, idx) => (
            <Grid key={idx} size={{ xs: 12, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  border: '1px solid #E2E8F0',
                  height: '100%',
                  bgcolor: '#FFFFFF',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 10px 20px rgba(0,0,0,0.04)' },
                }}
              >
                <CardContent sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: '#EFF6FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem', mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#0F52BA', mb: 0.5 }}>
                      {item.detail}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.subtext}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Form and Info Section */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            border: '1px solid #E2E8F0',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.04)',
          }}
        >
          <Grid container>
            {/* Left Info Panel */}
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{
                background: 'linear-gradient(135deg, #090D16 0%, #0F1E36 100%)',
                color: '#FFFFFF',
                p: { xs: 4, sm: 5, md: 6 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                  <SupportAgentIcon sx={{ fontSize: 32, color: '#4ADE80' }} />
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    Support Assistance
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#94A3B8', lineHeight: 1.7, mb: 4 }}>
                  Fill out the form, and our specialized strategy team will get back to you within 24 business hours.
                </Typography>

                <Stack spacing={3}>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#4ADE80', mb: 0.5 }}>
                      Are you an existing learner?
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#CBD5E1' }}>
                      Log in directly to your Learning Hub dashboard for instant 1-on-1 mentorship chat access.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#4ADE80', mb: 0.5 }}>
                      Enterprise Custom Solutions
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#CBD5E1' }}>
                      Looking for custom team training or dedicated analytics integrations? Mention your squad size in the message.
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Typography variant="caption" sx={{ color: '#64748B', mt: 4 }}>
                © {new Date().getFullYear()} MarketGrow. All rights reserved.
              </Typography>
            </Grid>

            {/* Right Interactive Form */}
            <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 3, sm: 5, md: 6 }, bgcolor: '#FFFFFF' }}>
              <Box component="form" onSubmit={handleSubmit}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 3 }}>
                  Send us a Message
                </Typography>

                <Stack spacing={2.5}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        placeholder="John Doe"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        placeholder="john@example.com"
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        select
                        fullWidth
                        label="Topic Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                      >
                        {categories.map((cat, idx) => (
                          <MenuItem key={idx} value={cat}>
                            {cat}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        placeholder="How can we help?"
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    placeholder="Provide details about your project or question..."
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: 2.5,
                      bgcolor: '#0F52BA',
                      fontWeight: 700,
                      textTransform: 'none',
                      fontSize: '1rem',
                      alignSelf: 'flex-start',
                      boxShadow: '0 4px 12px rgba(15, 82, 186, 0.25)',
                      '&:hover': { bgcolor: '#0B3E8C' },
                    }}
                  >
                    Submit Message
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Success Notification */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%', borderRadius: 2 }}>
          Your message has been successfully sent! We will contact you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;