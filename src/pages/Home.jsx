import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
} from '@mui/material';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import CalculateIcon from '@mui/icons-material/Calculate';
import { Link } from 'react-router-dom';

const stats = [
  { value: '3.5x', label: 'Average Revenue Growth' },
  { value: '84%', label: 'Small Businesses Scale Online' },
  { value: '10k+', label: 'Active Business Owners' },
  { value: '98%', label: 'Satisfaction Rate' },
];

const categories = [
  {
    icon: <SearchIcon fontSize="medium" sx={{ color: '#0F52BA' }} />,
    title: 'SEO Optimization',
    desc: 'Rank higher on search engines and attract high-intent organic traffic consistently.',
  },
  {
    icon: <ShareIcon fontSize="medium" sx={{ color: '#0F52BA' }} />,
    title: 'Social Media Growth',
    desc: 'Build engaged communities and turn social presence into direct customer leads.',
  },
  {
    icon: <EmailIcon fontSize="medium" sx={{ color: '#0F52BA' }} />,
    title: 'Email Automation',
    desc: 'Automate lead nurturing and boost customer retention with tailored drip sequences.',
  },
  {
    icon: <AutoGraphIcon fontSize="medium" sx={{ color: '#0F52BA' }} />,
    title: 'Paid Advertising',
    desc: 'Maximize customer acquisition ROI with targeted Google & Meta ad campaigns.',
  },
];

const testimonials = [
  {
    quote: 'MarketGrow completely changed how we generate leads locally. Our revenue doubled in 4 months.',
    name: 'Sarah Jenkins',
    role: 'Founder, EcoClean Services',
  },
  {
    quote: 'The step-by-step blueprints saved us thousands in marketing agency fees. Highly recommended!',
    name: 'David Chen',
    role: 'Owner, Horizon Boutique',
  },
  {
    quote: 'Clear metrics, practical execution, and actual ROI. Best investment for our small business.',
    name: 'Marcus Vance',
    role: 'Managing Director, Apex Logistics',
  },
];

const faqs = [
  {
    q: 'Do I need marketing experience to start?',
    a: 'Not at all. Our platform provides intuitive toolkits, templates, and guided steps designed specifically for busy small business owners.',
  },
  {
    q: 'How fast can I expect results?',
    a: 'Paid media campaigns can generate leads within 48 hours, while SEO and content strategies build compounding ROI over 3 to 6 months.',
  },
  {
    q: 'Can I cancel or change my plan anytime?',
    a: 'Yes, there are no long-term lock-in contracts. You can scale your tools up or down as your business evolves.',
  },
];

const Home = () => {
  const [adBudget, setAdBudget] = useState(500);

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      {/* Hero Section - Screen Viewport Fitted */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          minHeight: { xs: 'auto', md: 'calc(100vh - 64px)' },
          display: 'flex',
          alignItems: 'center',
          py: { xs: 6, sm: 8, md: 0 },
          px: { xs: 2, sm: 3 },
          borderBottom: '1px solid #E2E8F0',
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(circle at 90% 10%, rgba(15, 82, 186, 0.05) 0%, transparent 60%)',
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Chip
                  icon={<RocketLaunchIcon sx={{ fontSize: '16px !important' }} />}
                  label="Digital Marketing for Small Business"
                  color="primary"
                  variant="outlined"
                  size="small"
                  sx={{
                    mb: 2.5,
                    fontWeight: 700,
                    borderRadius: '20px',
                    bgcolor: 'rgba(15, 82, 186, 0.04)',
                  }}
                />
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem', lg: '3.75rem' },
                    fontWeight: 800,
                    letterSpacing: '-1.5px',
                    lineHeight: { xs: 1.2, md: 1.15 },
                    color: '#0F172A',
                    mb: 2,
                  }}
                >
                  Grow Your Small Business with{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #0F52BA 0%, #2E7D32 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Digital Marketing
                  </Box>
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    mb: 4,
                    fontWeight: 400,
                    fontSize: { xs: '0.975rem', sm: '1.1rem', md: '1.125rem' },
                    lineHeight: 1.6,
                    maxWidth: 600,
                    mx: { xs: 'auto', md: 0 },
                  }}
                >
                  Master actionable strategies, optimize online visibility, and drive sustainable growth using custom-built resource toolkits.
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/register"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      py: 1.6,
                      px: 4,
                      fontSize: '1rem',
                      fontWeight: 700,
                      borderRadius: '10px',
                      maxWidth: { sm: '220px' },
                      boxShadow: '0 10px 25px -5px rgba(15, 82, 186, 0.4)',
                    }}
                  >
                    Get Started Free
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    component={Link}
                    to="/digital-marketing"
                    sx={{
                      py: 1.6,
                      px: 4,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '10px',
                      maxWidth: { sm: '220px' },
                      borderColor: '#CBD5E1',
                      color: '#334155',
                    }}
                  >
                    Explore Marketing
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: 'relative', px: { xs: 1, sm: 4, md: 0 } }}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: { xs: 4, md: 6 },
                    overflow: 'hidden',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0px 25px 50px -12px rgba(15, 82, 186, 0.12)',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: { md: 'scale(1.02)' } },
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    alt="Marketing Dashboard Preview"
                    sx={{ width: '100%', height: 'auto', display: 'block', maxHeight: { md: '450px' }, objectFit: 'cover' }}
                  />
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, mt: { xs: 0, md: -4 }, px: { xs: 2, sm: 3 } }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {stats.map((stat, idx) => (
            <Grid key={idx} size={{ xs: 6, md: 3 }}>
              <Card
                elevation={0}
                sx={{
                  textAlign: 'center',
                  py: { xs: 2.5, md: 3.5 },
                  px: 2,
                  bgcolor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: 4,
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.03)',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 800, color: '#0F52BA', mb: 0.5, fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' } }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  {stat.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Categories Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 3 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 7 }, maxWidth: 650, mx: 'auto' }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, color: '#0F172A', mb: 1.5, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' } }}
            >
              Core Digital Marketing Channels
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: { xs: '0.9rem', sm: '1.05rem' } }}>
              Comprehensive blueprints designed specifically for small business execution.
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {categories.map((cat, idx) => (
              <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    border: '1px solid #E2E8F0',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: { md: 'translateY(-8px)' },
                      borderColor: '#0F52BA',
                      boxShadow: '0px 16px 30px rgba(15, 82, 186, 0.08)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, sm: 3.5 }, flexGrow: 1 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 3,
                        bgcolor: 'rgba(15, 82, 186, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.5,
                      }}
                    >
                      {cat.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#0F172A', fontSize: '1.1rem' }}>
                      {cat.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {cat.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* NEW: Interactive Revenue Growth Estimator */}
      <Box sx={{ bgcolor: '#FFFFFF', py: { xs: 6, md: 10 }, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', px: { xs: 2, sm: 3 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Chip
                icon={<CalculateIcon sx={{ fontSize: '16px !important' }} />}
                label="Interactive ROI Estimator"
                color="secondary"
                variant="outlined"
                size="small"
                sx={{ mb: 2, fontWeight: 700, borderRadius: '20px' }}
              />
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: '#0F172A', mb: 2, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' } }}
              >
                Estimate Your Monthly Growth Potential
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                Adjust your target monthly ad budget to project expected incremental leads and revenue using proven benchmarks.
              </Typography>
              <Box sx={{ px: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                  Monthly Ad Spend: ${adBudget}
                </Typography>
                <Slider
                  value={adBudget}
                  min={100}
                  max={5000}
                  step={100}
                  onChange={(e, val) => setAdBudget(val)}
                  sx={{ color: '#0F52BA' }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 4,
                  bgcolor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                }}
              >
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6 }}>
                    <Box sx={{ p: 2, bgcolor: '#FFFFFF', borderRadius: 3, border: '1px solid #E2E8F0' }}>
                      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                        ESTIMATED LEADS
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F52BA', mt: 1 }}>
                        {Math.round(adBudget / 12)} - {Math.round(adBudget / 8)}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Box sx={{ p: 2, bgcolor: '#FFFFFF', borderRadius: 3, border: '1px solid #E2E8F0' }}>
                      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                        ESTIMATED RETURN
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 800, color: '#2E7D32', mt: 1 }}>
                        ${Math.round(adBudget * 3.5)}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2, textAlign: 'center' }}>
                  *Projections based on historical performance metrics across member accounts.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Important & CTA Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 3 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: '#0F172A', mb: 2, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' } }}
              >
                Why Digital Marketing Matters for Local Businesses
              </Typography>
              <Typography paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.6, mb: 4 }}>
                Traditional marketing methods are costly and difficult to track. Digital marketing provides a level playing field to compete directly with established brands.
              </Typography>
              <Stack spacing={2.5}>
                {[
                  'Target exact demographic profiles with low initial budgets',
                  'Track clear metrics and real ROI on every campaign',
                  'Engage local customers right when they search for your service',
                  'Build persistent online brand trust and customer loyalty',
                ].map((point, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <CheckCircleOutlineIcon sx={{ color: '#2E7D32', mt: 0.3, flexShrink: 0 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600, color: '#334155', fontSize: '0.975rem' }}>
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                elevation={0}
                sx={{
                  p: { xs: 3.5, sm: 5 },
                  background: 'linear-gradient(135deg, #0F52BA 0%, #002B89 100%)',
                  color: 'white',
                  borderRadius: 5,
                  boxShadow: '0px 20px 40px rgba(15, 82, 186, 0.25)',
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                  Ready to transform your business?
                </Typography>
                <Typography paragraph sx={{ opacity: 0.9, mb: 4, fontSize: '1.05rem', lineHeight: 1.6 }}>
                  Access complete toolkits, budget calculators, and interactive strategy guides designed to scale your operations.
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/register"
                  sx={{
                    py: 1.6,
                    px: 4,
                    fontWeight: 700,
                    borderRadius: 2.5,
                    bgcolor: '#2E7D32',
                    maxWidth: { sm: 'auto' },
                    '&:hover': { bgcolor: '#1B5E20' },
                  }}
                >
                  Join MarketGrow Now
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* NEW: Testimonials Section */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 10 }, borderTop: '1px solid #E2E8F0', px: { xs: 2, sm: 3 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, color: '#0F172A', mb: 1, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' } }}
            >
              Trusted by Local Founders
            </Typography>
            <Typography color="text.secondary">See how business owners scale faster with our strategy engine.</Typography>
          </Box>
          <Grid container spacing={3}>
            {testimonials.map((item, idx) => (
              <Grid key={idx} size={{ xs: 12, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{ p: 3.5, borderRadius: 4, border: '1px solid #E2E8F0', height: '100%', bgcolor: '#F8FAFC' }}
                >
                  <Stack direction="row" spacing={0.5} sx={{ color: '#FFB800', mb: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} fontSize="small" />
                    ))}
                  </Stack>
                  <Typography variant="body1" sx={{ color: '#334155', fontStyle: 'italic', mb: 3, lineHeight: 1.6 }}>
                    "{item.quote}"
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.role}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* NEW: FAQ Accordion Section */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, color: '#0F172A', mb: 1, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' } }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography color="text.secondary">Everything you need to know before getting started.</Typography>
        </Box>
        <Stack spacing={2}>
          {faqs.map((faq, idx) => (
            <Accordion key={idx} elevation={0} sx={{ border: '1px solid #E2E8F0', borderRadius: '12px !important' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A' }}>
                  {faq.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
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

export default Home;