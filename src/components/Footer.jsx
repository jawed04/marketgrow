import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Divider,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Blog & Insights', path: '/blog' },
  ],
  solutions: [
    { label: 'Digital Marketing', path: '/digital-marketing' },
    { label: 'Small Business Guide', path: '/small-business' },
    { label: 'Marketing Strategies', path: '/strategies' },
  ],
  resources: [
    { label: 'Marketing Tools', path: '/tools' },
    { label: 'Learning Hub', path: '/learning-hub' },
  ],
};
const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms of Service', path: '/terms-of-service' },
  { name: 'Cookies', path: '/cookies' },
];

const socialIcons = [
  { icon: <FacebookIcon fontSize="small" />, href: '#' },
  { icon: <TwitterIcon fontSize="small" />, href: '#' },
  { icon: <LinkedInIcon fontSize="small" />, href: '#' },
  { icon: <InstagramIcon fontSize="small" />, href: '#' },
  { icon: <YouTubeIcon fontSize="small" />, href: '#' },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #090D16 0%, #0F1E36 100%)',
        color: '#94A3B8',
        pt: 6,
        pb: 4,
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 5 }}>
          {/* Brand & Socials */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.2,
                textDecoration: 'none',
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  bgcolor: '#0F52BA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TrendingUpIcon sx={{ fontSize: 22, color: '#FFFFFF' }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.5px' }}>
                Market<span style={{ color: '#4ADE80' }}>Grow</span>
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.6, mb: 2.5, maxWidth: 320, color: '#64748B' }}>
              Empowering small businesses to scale digital growth with modern marketing toolkits.
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialIcons.map((social, idx) => (
                <IconButton
                  key={idx}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: '#94A3B8',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    p: 1,
                    '&:hover': { bgcolor: '#0F52BA', color: '#FFFFFF' },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links Column 1: Company */}
          <Grid size={{ xs: 6, sm: 4, md: 2.5 }}>
            <Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 700, mb: 2 }}>
              Company
            </Typography>
            <Stack spacing={1.2}>
              {footerLinks.company.map((link) => (
                <Box
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: '#94A3B8',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#4ADE80' },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links Column 2: Solutions */}
          <Grid size={{ xs: 6, sm: 4, md: 2.5 }}>
            <Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 700, mb: 2 }}>
              Solutions
            </Typography>
            <Stack spacing={1.2}>
              {footerLinks.solutions.map((link) => (
                <Box
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: '#94A3B8',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#4ADE80' },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links Column 3: Resources */}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 700, mb: 2 }}>
              Resources
            </Typography>
            <Stack spacing={1.2}>
              {footerLinks.resources.map((link) => (
                <Box
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: '#94A3B8',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#4ADE80' },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 3 }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: '#64748B' }}>
            © {new Date().getFullYear()} MarketGrow. All rights reserved.
          </Typography>
        <Stack direction="row" spacing={3}>
    {legalLinks.map((item) => (
      <Box
        key={item.name}
        component={Link}
        to={item.path}
        sx={{
          color: '#64748B',
          textDecoration: 'none',
          fontSize: '0.75rem',
          fontWeight: 500,
          transition: 'color 0.2s ease',
          '&:hover': { color: '#94A3B8' },
        }}
      >
        {item.name}
      </Box>
    ))}
  </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;