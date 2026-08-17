import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useNavigate } from 'react-router-dom';

const sections = [
  { id: 'collection', label: '1. Information We Collect' },
  { id: 'usage', label: '2. How We Use Information' },
  { id: 'sharing', label: '3. Data Sharing & Third Parties' },
  { id: 'retention', label: '4. Data Retention & Security' },
  { id: 'rights', label: '5. Your Rights & Choices' },
  { id: 'contact', label: '6. Contact Privacy Team' },
];

const PrivacyPolicy = () => {
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
              <ShieldOutlinedIcon sx={{ fontSize: 22, color: '#0F52BA' }} />
            </Box>
            <Typography variant="subtitle1" sx={{ color: '#0F52BA', fontWeight: 800 }}>
              LEGAL & COMPLIANCE
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
            Privacy Policy
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
            Last updated: August 17, 2026 • Effective Date: January 1, 2026
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Sidebar TOC - Hidden on Mobile */}
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
                {sections.map((sec) => (
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

          {/* Main Legal Content */}
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
                We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, process, store, and safeguard your information when you visit our website, use our web applications, or interact with our services.
              </Typography>

              <Divider sx={{ mb: 4 }} />

              <Stack spacing={4}>
                {/* Section 1 */}
                <Box id="collection">
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
                    1. Information We Collect
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                    We collect personal data directly provided by you, as well as automatic telemetry data during system interactions:
                  </Typography>
                  <List spacing={1} disablePadding>
                    {[
                      'Account Details: Full name, email address, password hashes, and profile metadata.',
                      'Technical Identifiers: IP address, browser build, device OS, and session activity logs.',
                      'Usage Analytics: Feature access counts, click telemetry, and performance loading times.',
                    ].map((item, idx) => (
                      <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <CheckCircleOutlineIcon sx={{ fontSize: 18, color: '#0F52BA' }} />
                        </ListItemIcon>
                        <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', color: '#475569' }} />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* Section 2 */}
                <Box id="usage">
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
                    2. How We Use Information
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Your data is processed strictly to maintain application stability, deliver personalized dashboards, process transaction requests, send critical platform updates, and prevent fraudulent system activities.
                  </Typography>
                </Box>

                {/* Section 3 */}
                <Box id="sharing">
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
                    3. Data Sharing & Third Parties
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    We do not sell your personal data. We only share operational data with vetted infrastructure vendors (e.g., cloud hosting providers, database instances, error tracking agents) bound by strict confidentiality agreements.
                  </Typography>
                </Box>

                {/* Section 4 */}
                <Box id="retention">
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
                    4. Data Retention & Security
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    We retain data only as long as your account remains active. All transmissions are encrypted via TLS 1.3 standards, and stored assets utilize AES-256 encryption at rest.
                  </Typography>
                </Box>

                {/* Section 5 */}
                <Box id="rights">
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
                    5. Your Rights & Choices
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Depending on your jurisdiction (such as GDPR or CCPA), you reserve the right to request account export logs, rectify invalid data, or request permanent deletion of your profile history.
                  </Typography>
                </Box>

                {/* Section 6 */}
                <Box id="contact" sx={{ pt: 2 }}>
                  <Paper
                    elevation={0}
                    sx={{ p: 3, borderRadius: 3, bgcolor: '#EFF6FF', border: '1px solid #DBEAFE' }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <EmailOutlinedIcon sx={{ color: '#0F52BA', fontSize: 32 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#0F172A', fontSize: '1rem' }}>
                          Have questions regarding privacy?
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          Contact our dedicated Compliance Officer.
                        </Typography>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => navigate('/contact')}
                          sx={{ bgcolor: '#0F52BA', textTransform: 'none', fontWeight: 700, borderRadius: 2 }}
                        >
                          Contact Compliance Team
                        </Button>
                      </Box>
                    </Stack>
                  </Paper>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;