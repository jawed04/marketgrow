import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Switch,
  FormControlLabel,
  Button,
  Divider,
  Snackbar,
  Alert,
} from '@mui/material';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import SaveIcon from '@mui/icons-material/Save';

const cookieCategories = [
  {
    key: 'essential',
    title: 'Essential & System Cookies',
    description: 'Necessary for basic authentication, security token verification, and session state persistence. Cannot be disabled.',
    required: true,
  },
  {
    key: 'analytics',
    title: 'Performance & Analytics Cookies',
    description: 'Helps us measure site metrics, page load times, and aggregated navigation patterns to improve system speed.',
    required: false,
  },
  {
    key: 'preferences',
    title: 'User Preference Cookies',
    description: 'Remembers custom UI settings, theme selections (e.g., Dark/Light mode), and selected localized views.',
    required: false,
  },
];

const Cookies = () => {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    preferences: false,
  });

  const [saved, setSaved] = useState(false);

  const handleToggle = (key) => (e) => {
    setPreferences((prev) => ({ ...prev, [key]: e.target.checked }));
  };

  const handleSave = () => {
    setSaved(true);
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
              <CookieOutlinedIcon sx={{ fontSize: 22, color: '#0F52BA' }} />
            </Box>
            <Typography variant="subtitle1" sx={{ color: '#0F52BA', fontWeight: 800 }}>
              PRIVACY PREFERENCES
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
            Cookie Policy
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', sm: '1.05rem' } }}>
            We use cookies to optimize interface response times and personalize your user experience. Manage your settings below.
          </Typography>
        </Box>

        <Grid container justifyContent="center">
          <Grid size={{ xs: 12, md: 9 }}>
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
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
                What Are Cookies?
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 4 }}>
                Cookies are small data files placed on your browser when visiting websites. They store session tokens and settings so you don't have to re-enter your credentials every time you switch pages.
              </Typography>

              <Divider sx={{ mb: 4 }} />

              <Typography variant="h6" sx={{ fontWeight: 800, color: '#0F172A', mb: 3 }}>
                Cookie Settings Center
              </Typography>

              <Stack spacing={3} sx={{ mb: 5 }}>
                {cookieCategories.map((item) => (
                  <Paper
                    key={item.key}
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      border: '1px solid #E2E8F0',
                      bgcolor: item.required ? '#F8FAFC' : '#FFFFFF',
                    }}
                  >
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      justifyContent="space-between"
                      alignItems={{ xs: 'flex-start', sm: 'center' }}
                      spacing={2}
                    >
                      <Box sx={{ pr: { sm: 2 } }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0F172A', mb: 0.5 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                          {item.description}
                        </Typography>
                      </Box>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={preferences[item.key]}
                            onChange={handleToggle(item.key)}
                            disabled={item.required}
                            color="primary"
                          />
                        }
                        label={
                          <Typography variant="caption" sx={{ fontWeight: 700, color: item.required ? '#94A3B8' : '#0F172A' }}>
                            {item.required ? 'Always Active' : preferences[item.key] ? 'Enabled' : 'Disabled'}
                          </Typography>
                        }
                        labelPlacement="start"
                        sx={{ ml: 0, whiteSpace: 'nowrap' }}
                      />
                    </Stack>
                  </Paper>
                ))}
              </Stack>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<SaveIcon />}
                  onClick={handleSave}
                  sx={{
                    bgcolor: '#0F52BA',
                    fontWeight: 700,
                    borderRadius: 2.5,
                    px: 4,
                    py: 1.2,
                    textTransform: 'none',
                    '&:hover': { bgcolor: '#0B3E8C' },
                  }}
                >
                  Save Cookie Preferences
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Confirmation Toast */}
      <Snackbar
        open={saved}
        autoHideDuration={4000}
        onClose={() => setSaved(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSaved(false)} severity="success" sx={{ width: '100%', borderRadius: 2 }}>
          Your cookie preferences have been updated!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Cookies;