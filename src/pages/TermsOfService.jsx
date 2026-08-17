import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Divider,
  Button,
} from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import { useNavigate } from 'react-router-dom';

const termsSections = [
  { id: 'acceptance', label: '1. Acceptance of Terms' },
  { id: 'accounts', label: '2. User Accounts & Duties' },
  { id: 'intellectual', label: '3. Intellectual Property' },
  { id: 'conduct', label: '4. Prohibited Conduct' },
  { id: 'termination', label: '5. Account Termination' },
  { id: 'limitation', label: '6. Limitation of Liability' },
];

const TermsOfService = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: 2,
                bgcolor: '#EFF6FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <GavelIcon sx={{ fontSize: 22, color: '#0F52BA' }} />
            </Box>
            <Typography variant="subtitle1" sx={{ color: '#0F52BA', fontWeight: 800 }}>
              USER AGREEMENT
            </Typography>
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: '#0F172A',
              fontSize: { xs: '2rem', sm: '2.75rem', md: '3.25rem' },
              mb: 2,
            }}
          >
            Terms of Service
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
            Last updated: August 17, 2026 • Effective Date: January 1, 2026
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* TOC Sidebar */}
          <Grid size={{ xs: 12, md: 3.5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3.5,
                border: '1px solid #E2E8F0',
                bgcolor: '#FFFFFF',
                position: 'sticky',
                top: 24,
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
                Table of Contents
              </Typography>
              <Stack spacing={1}>
                {termsSections.map((sec) => (
                  <Button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    sx={{
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      color: '#64748B',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      py: 0.75,
                      px: 1.5,
                      borderRadius: 2,
                      '&:hover': { bgcolor: '#F1F5F9', color: '#0F52BA' },
                    }}
                  >
                    {sec.label}
                  </Button>
                ))}
              </Stack>
            </Paper>
          </Grid>

          {/* Legal Document */}
          <Grid size={{ xs: 12, md: 8.5 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 5 },
                borderRadius: 4,
                border: '1px solid #E2E8F0',
                bgcolor: '#FFFFFF',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
              }}
            >
              <Typography variant="body1" sx={{ color: '#334155', lineHeight: 1.8, mb: 4 }}>
                Please review these Terms of Service carefully prior to utilizing our applications, platforms, or related services. By registering an account or navigating the application, you agree to bound by these terms.
              </Typography>

              <Divider sx={{ mb: 4 }} />

              <Stack spacing={4}>
                <Box id="acceptance">
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
                    1. Acceptance of Terms
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Accessing our services confirms that you have read, understood, and agreed to adhere to these operational guidelines, as well as our Privacy Policy.
                  </Typography>
                </Box>

                <Box id="accounts">
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
                    2. User Accounts & Duties
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    You are responsible for maintaining the confidentiality of your credentials. You must immediately report unauthorized access or credential leaks to our support team.
                  </Typography>
                </Box>

                <Box id="intellectual">
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
                    3. Intellectual Property
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    All custom source code, design systems, vector assets, logos, and UI frameworks hosted on this domain remain the exclusive property of the platform unless explicitly licensed.
                  </Typography>
                </Box>

                <Box id="conduct">
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
                    4. Prohibited Conduct
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Users must not attempt network scanning, reverse engineering of backend APIs, automated web scraping without consent, or launching distributed denial-of-service (DDoS) requests.
                  </Typography>
                </Box>

                <Box id="termination">
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
                    5. Account Termination
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    We reserve the right to suspend or terminate service access without prior notice for accounts found violating security protocols or engagement guidelines.
                  </Typography>
                </Box>

                <Box id="limitation">
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
                    6. Limitation of Liability
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    In no event shall our team or affiliates be held liable for indirect, incidental, or consequential damages resulting from platform downtime or third-party service interruptions.
                  </Typography>
                </Box>
              </Stack>

              <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid #F1F5F9', textAlign: 'center' }}>
                <Button
                  variant="outlined"
                  onClick={() => navigate('/contact')}
                  sx={{ borderColor: '#0F52BA', color: '#0F52BA', fontWeight: 700, borderRadius: 2 }}
                >
                  Questions about our Terms? Contact Us
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TermsOfService;