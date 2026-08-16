import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Paper,
  Avatar,
  Card,
  CardContent,
  IconButton
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupsIcon from '@mui/icons-material/Groups';
import SecurityIcon from '@mui/icons-material/Security';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link, useNavigate } from 'react-router-dom';

const stats = [
  { value: '10K+', label: 'Active Learners' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '150+', label: 'Growth Courses' },
  { value: '24/7', label: 'Community Support' },
];

const values = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 32, color: '#0F52BA' }} />,
    title: 'Fast-Track Execution',
    description: 'We prioritize actionable strategies over theoretical concepts so you achieve measurable growth quickly.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 32, color: '#0F52BA' }} />,
    title: 'Community First',
    description: 'Build networks, collaborate on projects, and share Insights with thousands of digital strategists globally.',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 32, color: '#0F52BA' }} />,
    title: 'Data Privacy & Trust',
    description: 'Your business analytics and data are protected with enterprise-grade security standards.',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 32, color: '#0F52BA' }} />,
    title: 'Proven Track Record',
    description: 'Curated by industry practitioners with proven success scaling digital products and marketing funnels.',
  },
];

const team = [
  {
    name: 'Alex Morgan',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    bio: 'Ex-Growth Lead with 10+ years scaling SaaS startups and digital agencies.',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Learning',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
    bio: 'EdTech specialist passionate about crafting high-impact curriculum design.',
  },
  {
    name: 'Marcus Vance',
    role: 'Lead Data Strategist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    bio: 'Analytics expert focused on conversion rate optimization and search visibility.',
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '100vh', pb: 8 }}>
      {/* Hero Header Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #090D16 0%, #0F1E36 100%)',
          color: '#FFFFFF',
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 14 },
          px: 2,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 3 }}>
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
                <Typography variant="subtitle1" sx={{ color: '#4ADE80', fontWeight: 700 }}>
                  About MarketGrow
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem' },
                  lineHeight: 1.15,
                  mb: 3,
                  letterSpacing: '-1px',
                }}
              >
                Empowering Digital Innovators to Scale Smarter
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#94A3B8',
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                  lineHeight: 1.7,
                  maxWidth: 600,
                  mb: 4,
                }}
              >
                We bridge the gap between technical execution and business growth. MarketGrow provides actionable learning resources, real-time analytics frameworks, and a thriving community for ambitious builders.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/register')}
                  sx={{
                    bgcolor: '#0F52BA',
                    py: 1.5,
                    px: 3.5,
                    borderRadius: 2.5,
                    fontWeight: 700,
                    textTransform: 'none',
                    '&:hover': { bgcolor: '#0B3E8C' },
                  }}
                >
                  Join the Hub
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/learning-hub')}
                  sx={{
                    borderColor: '#334155',
                    color: '#FFFFFF',
                    py: 1.5,
                    px: 3.5,
                    borderRadius: 2.5,
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': { borderColor: '#64748B', bgcolor: 'rgba(255,255,255,0.05)' },
                  }}
                >
                  Explore Modules
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Metrics Counter Bar */}
      <Container maxWidth="lg" sx={{ mt: { xs: -5, md: -7 }, position: 'relative', zIndex: 2 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            border: '1px solid #E2E8F0',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
            bgcolor: '#FFFFFF',
          }}
        >
          <Grid container spacing={3}>
            {stats.map((stat, idx) => (
              <Grid key={idx} size={{ xs: 6, md: 3 }} sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#0F172A', mb: 0.5 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 600 }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      {/* Core Values Section */}
      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: '#0F52BA', fontWeight: 800, letterSpacing: 1.5 }}>
            OUR GUIDING PRINCIPLES
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', mt: 1, mb: 2 }}>
            Driven by Impact and Practical Excellence
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Everything we build is designed to minimize guesswork and accelerate real-world outcomes.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {values.map((item, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  p: 2,
                  borderRadius: 3,
                  border: '1px solid #E2E8F0',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.06)',
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2.5,
                      bgcolor: '#EFF6FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#0F172A' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Leadership Team Section */}
      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: '#0F52BA', fontWeight: 800, letterSpacing: 1.5 }}>
            LEADERSHIP
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', mt: 1, mb: 2 }}>
            Meet the Minds Behind MarketGrow
          </Typography>
          <Typography variant="body1" color="text.secondary">
            A distributed team of builders, creators, and growth engineers dedicated to your progress.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {team.map((member, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  border: '1px solid #E2E8F0',
                  textAlign: 'center',
                  bgcolor: '#FFFFFF',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{ width: 96, height: 96, mb: 2.5, border: '3px solid #EFF6FF' }}
                />
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#0F172A' }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#0F52BA', fontWeight: 600, mb: 2 }}>
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                  {member.bio}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton size="small" sx={{ color: '#64748B', '&:hover': { color: '#0F52BA' } }}>
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: '#64748B', '&:hover': { color: '#0F52BA' } }}>
                    <TwitterIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call To Action Banner */}
      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 } }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 5,
            bgcolor: '#090D16',
            color: '#FFFFFF',
            p: { xs: 4, sm: 6, md: 8 },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ maxWidth: 650, mx: 'auto', position: 'relative', zIndex: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
              Ready to Accelerate Your Digital Growth?
            </Typography>
            <Typography variant="body1" sx={{ color: '#94A3B8', mb: 4, fontSize: '1.1rem' }}>
              Create your account today and gain immediate access to our interactive hubs, templates, and analytics toolkits.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/register')}
              sx={{
                bgcolor: '#0F52BA',
                py: 1.6,
                px: 4,
                borderRadius: 3,
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1rem',
                boxShadow: '0 4px 14px rgba(15, 82, 186, 0.4)',
                '&:hover': { bgcolor: '#0B3E8C' },
              }}
            >
              Get Started Now
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;