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
  IconButton,
  InputAdornment,
  Divider,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const benefits = [
  'Access full small business growth playbooks',
  'Track learning progress across all tracks',
  'Unlock free local SEO & marketing tools',
];

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });

  const [passwordTouched, setPasswordTouched] = useState(false);
  const [toast, setToast] = useState({ open: false, message: '', severity: 'info' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Password rule checks
  const passwordRules = [
    { label: 'At least 8 characters long', valid: formData.password.length >= 8 },
    { label: 'One uppercase letter (A-Z)', valid: /[A-Z]/.test(formData.password) },
    { label: 'One lowercase letter (a-z)', valid: /[a-z]/.test(formData.password) },
    { label: 'One number (0-9)', valid: /\d/.test(formData.password) },
    { label: 'One special character (!@#$%^&*...)', valid: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password) },
  ];

  const isPasswordValid = passwordRules.every((rule) => rule.valid);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPasswordTouched(true);

    if (!isPasswordValid) {
      setToast({
        open: true,
        message: 'Password must include uppercase, lowercase, number, symbol, and 8+ characters.',
        severity: 'error',
      });
      return;
    }

    if (!formData.agreeToTerms) {
      setToast({ open: true, message: 'You must agree to the Terms & Privacy Policy.', severity: 'error' });
      return;
    }

    setIsSubmitting(true);
    const result = register({
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
    });

    if (result.success) {
      setToast({ open: true, message: result.message, severity: 'success' });
      setTimeout(() => {
        navigate('/learning-hub');
      }, 3000);
    } else {
      setIsSubmitting(false);
      setToast({ open: true, message: result.message, severity: 'error' });
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#F8FAFC', display: 'flex', alignItems: 'center', py: { xs: 4, md: 8 } }}>
      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={() => setToast((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={toast.severity} variant="filled" sx={{ width: '100%' }}>
          {toast.message}
        </Alert>
      </Snackbar>

      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
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
            {/* Left Column */}
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
                <Box component={Link} to="/" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.2, textDecoration: 'none', mb: 4 }}>
                  <Box sx={{ width: 36, height: 36, borderRadius: 2, bgcolor: '#0F52BA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TrendingUpIcon sx={{ fontSize: 22, color: '#FFFFFF' }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.5px' }}>
                    Market<span style={{ color: '#4ADE80' }}>Grow</span>
                  </Typography>
                </Box>

                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                  Start Scaling Your Local Business Today
                </Typography>
                <Typography variant="body2" sx={{ color: '#94A3B8', mb: 4, lineHeight: 1.6 }}>
                  Join thousands of small business owners using structured tools to drive predictable revenue growth.
                </Typography>

                <Stack spacing={2.5} sx={{ mb: 4 }}>
                  {benefits.map((benefit, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckCircleOutlineIcon sx={{ color: '#4ADE80', fontSize: 20 }} />
                      <Typography variant="body2" sx={{ color: '#CBD5E1', fontWeight: 500 }}>
                        {benefit}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Typography variant="caption" sx={{ color: '#64748B' }}>
                © {new Date().getFullYear()} MarketGrow. All rights reserved.
              </Typography>
            </Grid>

            {/* Right Column */}
            <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 3, sm: 5, md: 6 }, bgcolor: '#FFFFFF' }}>
              <Box sx={{ maxWidth: 440, mx: 'auto' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 0.5 }}>
                  Create an Account
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Already have an account?{' '}
                  <Box component={Link} to="/login" sx={{ color: '#0F52BA', textDecoration: 'none', fontWeight: 700 }}>
                    Sign In
                  </Box>
                </Typography>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid size={{ xs: 6 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<GoogleIcon />}
                      sx={{ py: 1.2, borderRadius: 2.5, borderColor: '#E2E8F0', color: '#334155', textTransform: 'none', fontWeight: 600 }}
                    >
                      Google
                    </Button>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      sx={{ py: 1.2, borderRadius: 2.5, borderColor: '#E2E8F0', color: '#334155', textTransform: 'none', fontWeight: 600 }}
                    >
                      GitHub
                    </Button>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 3, color: '#94A3B8', fontSize: '0.75rem' }}>OR REGISTER WITH EMAIL</Divider>

                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={2.5}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      placeholder="Anjali"
                    />

                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      placeholder="name@company.com"
                    />

                    <Box>
                      <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={() => setPasswordTouched(true)}
                        required
                        variant="outlined"
                        error={passwordTouched && !isPasswordValid}
                        slotProps={{
                          input: {
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={() => setShowPassword((prev) => !prev)}
                                  onMouseDown={(e) => e.preventDefault()}
                                  edge="end"
                                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                  {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          },
                        }}
                      />

                      {/* Real-time Password Rules Checklist */}
                      <Box sx={{ mt: 1.5, pl: 0.5 }}>
                        {passwordRules.map((rule, idx) => (
                          <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 0.5 }}>
                            {rule.valid ? (
                              <CheckCircleIcon sx={{ fontSize: 16, color: '#22C55E' }} />
                            ) : (
                              <CancelIcon sx={{ fontSize: 16, color: passwordTouched ? '#EF4444' : '#CBD5E1' }} />
                            )}
                            <Typography
                              variant="caption"
                              sx={{
                                color: rule.valid ? '#166534' : passwordTouched ? '#991B1B' : '#64748B',
                                fontWeight: rule.valid ? 600 : 400,
                              }}
                            >
                              {rule.label}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    <FormControlLabel
                      control={
                        <Checkbox
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          color="primary"
                        />
                      }
                      label={
                        <Typography variant="caption" color="text.secondary">
                          I agree to the{' '}
                          <Box component={Link} to="#" sx={{ color: '#0F52BA', textDecoration: 'none', fontWeight: 600 }}>
                            Terms of Service
                          </Box>{' '}
                          and{' '}
                          <Box component={Link} to="#" sx={{ color: '#0F52BA', textDecoration: 'none', fontWeight: 600 }}>
                            Privacy Policy
                          </Box>
                        </Typography>
                      }
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      size="large"
                      disabled={isSubmitting}
                      sx={{
                        py: 1.5,
                        borderRadius: 2.5,
                        bgcolor: '#0F52BA',
                        fontWeight: 700,
                        textTransform: 'none',
                        fontSize: '1rem',
                        boxShadow: '0 4px 12px rgba(15, 82, 186, 0.25)',
                        '&:hover': { bgcolor: '#0B3E8C' },
                      }}
                    >
                      {isSubmitting ? <CircularProgress size={24} sx={{ color: '#FFFFFF' }} /> : 'Create Account'}
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register;