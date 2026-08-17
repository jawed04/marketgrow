import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  Paper,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DownloadIcon from '@mui/icons-material/Download';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import { Link } from 'react-router-dom';

const growthPillars = [
  {
    icon: <StorefrontIcon sx={{ fontSize: 28, color: '#0F52BA' }} />,
    title: 'Local SEO & Visibility',
    description: 'Claim your Google Business Profile, capture neighborhood searches, and build consistent local reviews.',
  },
  {
    icon: <CampaignOutlinedIcon sx={{ fontSize: 28, color: '#0F52BA' }} />,
    title: 'Targeted Customer Ads',
    description: 'Run hyper-local Facebook and Google ads with tight budgets designed to convert nearby leads.',
  },
  {
    icon: <HandshakeOutlinedIcon sx={{ fontSize: 28, color: '#0F52BA' }} />,
    title: 'Lead Retention & Email',
    description: 'Convert one-time shoppers into repeat buyers using simple, automated email and SMS follow-ups.',
  },
  {
    icon: <QueryStatsOutlinedIcon sx={{ fontSize: 28, color: '#0F52BA' }} />,
    title: 'Trackable Marketing ROI',
    description: 'Know exactly which channels bring paying customers so you never waste a single dollar on ads.',
  },
];

const roadmapSteps = [
  {
    phase: 'Phase 1',
    title: 'Foundation & Digital Setup',
    items: [
      'Set up Google Business Profile & Bing Places',
      'Build a mobile-first, high-converting website',
      'Configure social profiles with consistent branding',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Attracting Local Traffic',
    items: [
      'Publish keyword-focused local service pages',
      'Launch targeted geo-fenced social ad campaigns',
      'Gather reviews from existing satisfied clients',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Automating Customer Retention',
    items: [
      'Create welcome discount email sequences',
      'Set up automated review request workflows',
      'Track customer lifetime value & channel ROI',
    ],
  },
];

const SmallBusiness = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      {/* Hero Header Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #090D16 0%, #0F1E36 100%)',
          color: '#FFFFFF',
          pt: { xs: 8, md: 10 },
          pb: { xs: 8, md: 12 },
          px: { xs: 2, sm: 3 },
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Chip
                icon={<LightbulbOutlinedIcon sx={{ fontSize: '16px !important', color: '#4ADE80 !important' }} />}
                label="Small Business Playbook"
                sx={{
                  bgcolor: 'rgba(74, 222, 128, 0.1)',
                  color: '#4ADE80',
                  fontWeight: 700,
                  mb: 2.5,
                  border: '1px solid rgba(74, 222, 128, 0.2)',
                }}
              />
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.8rem', md: '3.4rem' },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-1px',
                  mb: 2.5,
                }}
              >
                Practical Growth Strategies for{' '}
                <Box component="span" sx={{ color: '#4ADE80' }}>
                  Local Businesses
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#94A3B8',
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: 620,
                }}
              >
                No corporate jargon or enterprise budgets. Step-by-step blueprints designed to help small business owners win local customers consistently.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/register"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: '#0F52BA',
                    py: 1.5,
                    px: 3.5,
                    fontWeight: 700,
                    borderRadius: 2.5,
                    '&:hover': { bgcolor: '#0B3E8C' },
                  }}
                >
                  Start Scaling Free
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<DownloadIcon />}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF',
                    py: 1.5,
                    px: 3.5,
                    fontWeight: 600,
                    borderRadius: 2.5,
                    '&:hover': { borderColor: '#FFFFFF', bgcolor: 'rgba(255, 255, 255, 0.05)' },
                  }}
                >
                  Download Checklist
                </Button>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 4,
                  bgcolor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#FFFFFF' }}>
                  Quick Business Health Check
                </Typography>
                <Stack spacing={2}>
                  {[
                    'Is your Google Business Profile updated?',
                    'Does your website load in under 3 seconds on mobile?',
                    'Are you collecting email addresses from buyers?',
                    'Do you actively respond to online reviews?',
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <CheckCircleOutlineIcon sx={{ color: '#4ADE80', fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: '#CBD5E1', lineHeight: 1.5 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Core Pillars Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 }, maxWidth: 600, mx: 'auto' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', mb: 1.5, fontSize: { xs: '1.6rem', sm: '2.25rem' } }}>
            The Four Pillars of Local Growth
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Master these fundamentals to build a sustainable, repeatable customer acquisition engine.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {growthPillars.map((pillar, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  border: '1px solid #E2E8F0',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.06)',
                    borderColor: '#0F52BA',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 3,
                      bgcolor: 'rgba(15, 82, 186, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                    }}
                  >
                    {pillar.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#0F172A', fontSize: '1.1rem' }}>
                    {pillar.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {pillar.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Interactive Growth Roadmap */}
      <Box sx={{ bgcolor: '#FFFFFF', py: { xs: 6, md: 10 }, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', px: { xs: 2, sm: 3 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', mb: 1.5, fontSize: { xs: '1.6rem', sm: '2.25rem' } }}>
              Your 90-Day Step-by-Step Roadmap
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Select a stage to view actionable execution steps.
            </Typography>
          </Box>

          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4, display: 'flex', justifyContent: 'center' }}>
            <Tabs
              value={selectedTab}
              onChange={(e, val) => setSelectedTab(val)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': { fontWeight: 700, textTransform: 'none', fontSize: '1rem', px: 3 },
                '& .Mui-selected': { color: '#0F52BA' },
              }}
            >
              {roadmapSteps.map((step, idx) => (
                <Tab key={idx} label={`${step.phase}: ${step.title.split(' ')[0]}`} />
              ))}
            </Tabs>
          </Box>

          <Paper elevation={0} sx={{ p: { xs: 3, sm: 5 }, borderRadius: 4, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#0F172A' }}>
              {roadmapSteps[selectedTab].phase} — {roadmapSteps[selectedTab].title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Focus on finishing these priorities before advancing to the next milestone.
            </Typography>
            <Grid container spacing={2}>
              {roadmapSteps[selectedTab].items.map((task, i) => (
                <Grid key={i} size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 2.5,
                      bgcolor: '#FFFFFF',
                      borderRadius: 3,
                      border: '1px solid #E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        bgcolor: '#0F52BA',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155' }}>
                      {task}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* FAQs Section */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', mb: 1, fontSize: { xs: '1.6rem', sm: '2.25rem' } }}>
            Small Business FAQ
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Common questions answered directly.
          </Typography>
        </Box>

        <Stack spacing={2}>
          {[
            {
              q: 'How much budget do I need to start local advertising?',
              a: 'You can start seeing meaningful hyper-local results on Meta or Google Ads with as little as $5 to $10 per day when targeting tight geographical radii.',
            },
            {
              q: 'Is local SEO effective for service-based businesses?',
              a: 'Yes. Optimizing your Google Business profile and local citations allows you to appear directly in the top 3 local map packs when nearby users search for your service.',
            },
            {
              q: 'Should I prioritize social media or email marketing?',
              a: 'Social media is best for discovery and brand awareness, whereas email marketing is significantly more effective at driving immediate repeat purchases and sales.',
            },
          ].map((faq, idx) => (
            <Accordion key={idx} elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: '12px !important' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A' }}>
                  {faq.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {faq.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default SmallBusiness;