import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Paper,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Divider,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import LayersIcon from '@mui/icons-material/Layers';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';

const strategyMetrics = [
  { value: '3.4x', label: 'Average Conversion Lift' },
  { value: '< 200ms', label: 'Target INP Response' },
  { value: '45%', label: 'Retention Boost' },
  { value: '99.9%', label: 'System Reliability' },
];

const strategies = [
  {
    id: 1,
    title: 'Core Web Vitals & Performance Budgeting',
    category: 'Engineering',
    impact: 'High Impact',
    summary: 'Streamline client-side bundle size, eliminate rendering bottlenecks, and audit LCP/INP metrics.',
    details: [
      'Implement strict tree-shaking for third-party libraries.',
      'Transition from legacy CSS solutions to lightweight utility frameworks.',
      'Enforce static component height allocations to maintain 0.0 CLS.',
    ],
    icon: <SpeedIcon sx={{ fontSize: 32, color: '#0F52BA' }} />,
  },
  {
    id: 2,
    title: 'Adaptive Human-Centered Architecture',
    category: 'UI/UX Design',
    impact: 'Critical',
    summary: 'Craft custom responsive layout scaling systems rather than relying on generic design frameworks.',
    details: [
      'Define unified design tokens for spacing, typography, and color states.',
      'Prioritize high-contrast UI states for clear visual hierarchy across mobile viewports.',
      'Integrate micro-interactions to guide user visual attention naturally.',
    ],
    icon: <LayersIcon sx={{ fontSize: 32, color: '#0F52BA' }} />,
  },
  {
    id: 3,
    title: 'Data-Driven Conversion Funnel Optimization',
    category: 'Growth',
    impact: 'High Impact',
    summary: 'Identify friction points in sign-up flows and structure high-converting landing components.',
    details: [
      'Eliminate unnecessary fields in registration and checkout forms.',
      'Position real-time metrics and social proof near primary action areas.',
      'Perform continuous A/B multivariate testing on key action buttons.',
    ],
    icon: <AutoGraphIcon sx={{ fontSize: 32, color: '#0F52BA' }} />,
  },
  {
    id: 4,
    title: 'Modular Full-Stack Component Libraries',
    category: 'Architecture',
    impact: 'Medium Impact',
    summary: 'Build reusable, decoupled component blocks to accelerate deployment cycles.',
    details: [
      'Maintain strict separation between UI layout and data fetching logic.',
      'Document design tokens and prop interfaces for team-wide consistency.',
      'Utilize MUI v2 Grid size attributes for precise layout control.',
    ],
    icon: <DynamicFeedIcon sx={{ fontSize: 32, color: '#0F52BA' }} />,
  },
];

const processSteps = [
  { step: '01', title: 'Audit & Analysis', desc: 'Identify baseline performance metrics, UX bottlenecks, and key growth drop-offs.' },
  { step: '02', title: 'Architecture Blueprint', desc: 'Establish design tokens, component hierarchies, and performance budgets.' },
  { step: '03', title: 'Agile Implementation', desc: 'Deploy optimized code patterns with full cross-device and screen size testing.' },
  { step: '04', title: 'Iteration & Scale', desc: 'Measure real-user metrics (RUM) and continually refine conversion touchpoints.' },
];

const Strategies = () => {
  const [activeStrategy, setActiveStrategy] = useState(null);

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mb: { xs: 5, md: 8 } }}>
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
              GROWTH BLUEPRINTS
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
            Proven Strategies for Scaling Modern Applications
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>
            Combining high-performance frontend architecture with data-backed user conversion tactics.
          </Typography>
        </Box>

        {/* Metrics Bar */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            border: '1px solid #E2E8F0',
            bgcolor: '#FFFFFF',
            mb: { xs: 6, md: 8 },
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
          }}
        >
          <Grid container spacing={3}>
            {strategyMetrics.map((metric, idx) => (
              <Grid key={idx} size={{ xs: 6, md: 3 }} sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#0F172A', mb: 0.5 }}>
                  {metric.value}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 600 }}>
                  {metric.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Strategy Grid Cards */}
        <Grid container spacing={3.5} sx={{ mb: { xs: 8, md: 10 } }}>
          {strategies.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 6 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  p: 2,
                  borderRadius: 3.5,
                  border: '1px solid #E2E8F0',
                  bgcolor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.06)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2.5,
                        bgcolor: '#EFF6FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Stack direction="row" spacing={1}>
                      <Chip label={item.category} size="small" sx={{ bgcolor: '#F1F5F9', fontWeight: 600, color: '#475569' }} />
                      <Chip label={item.impact} size="small" sx={{ bgcolor: '#EFF6FF', fontWeight: 700, color: '#0F52BA' }} />
                    </Stack>
                  </Stack>

                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#0F172A', mb: 1.5, fontSize: '1.2rem' }}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, lineHeight: 1.6 }}>
                    {item.summary}
                  </Typography>

                  <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => setActiveStrategy(item)}
                    sx={{
                      alignSelf: 'flex-start',
                      borderColor: '#0F52BA',
                      color: '#0F52BA',
                      fontWeight: 700,
                      textTransform: 'none',
                      borderRadius: 2,
                      '&:hover': { bgcolor: '#EFF6FF', borderColor: '#0F52BA' },
                    }}
                  >
                    View Execution Steps
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Process Roadmap */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Box sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto', mb: 6 }}>
            <Typography variant="overline" sx={{ color: '#0F52BA', fontWeight: 800, letterSpacing: 1.5 }}>
              EXECUTION FRAMEWORK
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', mt: 0.5 }}>
              How We Deploy Strategy
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {processSteps.map((step, idx) => (
              <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid #E2E8F0',
                    bgcolor: '#FFFFFF',
                    height: '100%',
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 900, color: '#0F52BA', opacity: 0.3, mb: 1 }}>
                    {step.step}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#0F172A', mb: 1, fontSize: '1.05rem' }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {step.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Banner */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            background: 'linear-gradient(135deg, #090D16 0%, #0F1E36 100%)',
            color: '#FFFFFF',
            p: { xs: 4, sm: 6, md: 7 },
            textAlign: 'center',
          }}
        >
          <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.5rem', sm: '2.25rem' } }}>
              Ready to Upgrade Your Product Architecture?
            </Typography>
            <Typography variant="body1" sx={{ color: '#94A3B8', mb: 4, fontSize: '1.05rem' }}>
              Let's build high-performance web applications engineered for speed, responsiveness, and growth.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#0F52BA',
                px: 4,
                py: 1.5,
                borderRadius: 2.5,
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': { bgcolor: '#0B3E8C' },
              }}
            >
              Start Implementation
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Execution Strategy Dialog */}
      {activeStrategy && (
        <Dialog
          open={Boolean(activeStrategy)}
          onClose={() => setActiveStrategy(null)}
          maxWidth="sm"
          fullWidth
          PaperProps={{ sx: { borderRadius: 3.5, p: 1 } }}
        >
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#0F172A' }}>
              {activeStrategy.title}
            </Typography>
            <IconButton onClick={() => setActiveStrategy(null)} size="small">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {activeStrategy.summary}
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
              Execution Action Items:
            </Typography>

            <Stack spacing={2}>
              {activeStrategy.details.map((detail, idx) => (
                <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                  <CheckCircleOutlineIcon sx={{ color: '#0F52BA', fontSize: 20, mt: 0.2 }} />
                  <Typography variant="body2" sx={{ color: '#334155', fontWeight: 500 }}>
                    {detail}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </DialogContent>
          <DialogActions sx={{ p: 2, pt: 0 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => setActiveStrategy(null)}
              sx={{ bgcolor: '#0F52BA', fontWeight: 700, borderRadius: 2, textTransform: 'none' }}
            >
              Got It
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Strategies;