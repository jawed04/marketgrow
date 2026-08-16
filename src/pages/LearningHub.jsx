import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Tabs,
  Tab,
  Chip,
  Button,
  Stack,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';

const initialModules = [
  {
    level: 0,
    title: 'Beginner Track',
    description: 'Master core marketing fundamentals, buyer personas, and high-level strategy setup.',
    lessons: [
      {
        id: 'b1',
        name: 'Core Principles & Channels Overview',
        duration: '15 mins',
        status: 'Completed',
        summary: 'Learn the primary difference between inbound and outbound digital channels, paid vs organic media, and how to pick your core growth focus.',
        topics: ['Inbound vs Outbound', 'Channel ROI Analysis', 'Selecting Target Platforms'],
      },
      {
        id: 'b2',
        name: 'Setting SMART Business Objectives',
        duration: '20 mins',
        status: 'Completed',
        summary: 'Define key performance indicators (KPIs) aligned directly with revenue goals using the SMART framework.',
        topics: ['Specific Goal Formulation', 'Attributing Revenue to Leads', 'Tracking Initial Metrics'],
      },
      {
        id: 'b3',
        name: 'Understanding Customer Personas',
        duration: '25 mins',
        status: 'In Progress',
        summary: 'Build detailed target buyer profiles, pain points, purchasing triggers, and ideal messaging angles.',
        topics: ['Demographic Research', 'Customer Interviews', 'Mapping Buyer Journey'],
      },
    ],
  },
  {
    level: 1,
    title: 'Intermediate Track',
    description: 'Scale traffic through targeted local search, conversion copywriting, and email sequences.',
    lessons: [
      {
        id: 'i1',
        name: 'Keyword Research & Local SEO Strategies',
        duration: '35 mins',
        status: 'Not Started',
        summary: 'Uncover high-intent local search phrases and structure Google Business profiles for maximum pack visibility.',
        topics: ['Local Intent Keyword Mining', 'Google Map Pack Optimization', 'On-Page Content Structuring'],
      },
      {
        id: 'i2',
        name: 'Crafting Conversion-Driven Social Content',
        duration: '40 mins',
        status: 'Not Started',
        summary: 'Draft high-performing organic social posts and video hooks that turn viewers into inbound inquiries.',
        topics: ['Visual Framing Techniques', 'Hook-Body-CTA Formula', 'Content Batching Workflow'],
      },
      {
        id: 'i3',
        name: 'Configuring First Email Automation Funnels',
        duration: '30 mins',
        status: 'Not Started',
        summary: 'Set up welcome series and nurture flows to convert new subscribers automatically.',
        topics: ['Lead Magnet Creation', '3-Step Welcome Flow', 'Subject Line Optimization'],
      },
    ],
  },
  {
    level: 2,
    title: 'Advanced Track',
    description: 'Optimize paid ad spend, automate complex funnels, and boost long-term customer lifetime value.',
    lessons: [
      {
        id: 'a1',
        name: 'Google Ads Bidding & Audience Targeting',
        duration: '50 mins',
        status: 'Not Started',
        summary: 'Build profitable PPC campaigns, set smart bidding rules, and eliminate wasted ad budgets.',
        topics: ['Negative Keyword Lists', 'Conversion Tracking Setup', 'Geo-Targeted Bid Adjustments'],
      },
      {
        id: 'a2',
        name: 'Conversion Rate Optimization (CRO)',
        duration: '45 mins',
        status: 'Not Started',
        summary: 'A/B test landing pages, value propositions, and CTA buttons to maximize customer sign-ups.',
        topics: ['Heatmap Analysis', 'Landing Page Friction Removal', 'Split Testing Strategy'],
      },
      {
        id: 'a3',
        name: 'End-to-End Marketing Automation System',
        duration: '60 mins',
        status: 'Not Started',
        summary: 'Connect multi-channel user actions using webhooks, CRM pipelines, and behavioral triggers.',
        topics: ['CRM Pipeline Stages', 'Behavioral Email Triggers', 'Multi-Touch Attribution'],
      },
    ],
  },
];

const LearningHub = () => {
  const [modulesData, setModulesData] = useState(initialModules);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedLesson, setSelectedLesson] = useState(null);

  // Dynamic progress computation
  const allLessons = modulesData.flatMap((m) => m.lessons);
  const completedLessons = allLessons.filter((l) => l.status === 'Completed').length;
  const progressPercent = Math.round((completedLessons / allLessons.length) * 100);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleOpenLesson = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleCloseLesson = () => {
    setSelectedLesson(null);
  };

  const handleToggleStatus = (lessonId) => {
    setModulesData((prevModules) =>
      prevModules.map((module) => ({
        ...module,
        lessons: module.lessons.map((l) => {
          if (l.id === lessonId) {
            const nextStatus = l.status === 'Completed' ? 'In Progress' : 'Completed';
            return { ...l, status: nextStatus };
          }
          return l;
        }),
      }))
    );
    if (selectedLesson && selectedLesson.id === lessonId) {
      setSelectedLesson((prev) => ({
        ...prev,
        status: prev.status === 'Completed' ? 'In Progress' : 'Completed',
      }));
    }
  };

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '100vh', py: { xs: 4, md: 8 }, width: '100%', overflowX: 'hidden' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        {/* Header Title */}
        <Box sx={{ mb: 4 }}>
          <Chip
            icon={<SchoolIcon sx={{ fontSize: '16px !important' }} />}
            label="Structured Small Business Learning"
            color="primary"
            variant="outlined"
            size="small"
            sx={{ mb: 1.5, fontWeight: 700, borderRadius: '20px' }}
          />
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 800, color: '#0F172A', mb: 1, fontSize: { xs: '1.75rem', sm: '2.5rem', md: '2.75rem' } }}
          >
            Digital Marketing Learning Hub
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: { xs: '0.95rem', sm: '1.05rem' }, maxWidth: 700 }}>
            Master growth channels step-by-step with practical blueprints designed for operational business owners.
          </Typography>
        </Box>

        {/* Dynamic Metric Cards Header */}
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={0} sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: 4, border: '1px solid #E2E8F0', height: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A' }}>
                  Overall Learning Progress
                </Typography>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 800 }}>
                  {progressPercent}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={progressPercent}
                sx={{ height: 10, borderRadius: 5, bgcolor: '#E2E8F0', mb: 2 }}
              />
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                {completedLessons} of {allLessons.length} Total Lessons Completed
              </Typography>
            </Card>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Card elevation={0} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: '1px solid #E2E8F0', height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                <MenuBookIcon color="primary" fontSize="small" />
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                  ACTIVE TRACK
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#0F172A', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                {modulesData[activeTab].title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Level {activeTab + 1} of 3
              </Typography>
            </Card>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Card elevation={0} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: '1px solid #E2E8F0', height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                <EmojiEventsIcon sx={{ color: '#EAB308' }} fontSize="small" />
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                  ACHIEVEMENT
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#0F172A', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                {progressPercent >= 100 ? 'Mastery' : progressPercent > 0 ? 'In Growth' : 'Getting Started'}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {completedLessons} Badges Unlocked
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Track Selection Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: '#CBD5E1', mb: 3 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': { fontWeight: 700, textTransform: 'none', fontSize: { xs: '0.9rem', sm: '1rem' }, px: 3 },
              '& .Mui-selected': { color: '#0F52BA' },
            }}
          >
            <Tab label="Beginner Track" />
            <Tab label="Intermediate Track" />
            <Tab label="Advanced Track" />
          </Tabs>
        </Box>

        {/* Track Description Banner */}
        <Paper elevation={0} sx={{ p: 2.5, mb: 4, borderRadius: 3, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A', mb: 0.5 }}>
            {modulesData[activeTab].title} Blueprint
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {modulesData[activeTab].description}
          </Typography>
        </Paper>

        {/* Lessons List - Fully Responsive Grid */}
        <Grid container spacing={2.5}>
          {modulesData[activeTab].lessons.map((lesson) => (
            <Grid size={{ xs: 12 }} key={lesson.id}>
              <Card
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 2.5 },
                  borderRadius: 3,
                  border: '1px solid #E2E8F0',
                  transition: 'all 0.2s ease',
                  bgcolor: '#FFFFFF',
                  '&:hover': {
                    borderColor: '#0F52BA',
                    boxShadow: '0 4px 16px rgba(15, 82, 186, 0.06)',
                  },
                }}
              >
                <Grid container spacing={2} alignItems="center">
                  <Grid size={{ xs: 12, sm: 'auto' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CheckCircleIcon
                        sx={{
                          fontSize: 28,
                          color:
                            lesson.status === 'Completed'
                              ? '#2E7D32'
                              : lesson.status === 'In Progress'
                              ? '#0F52BA'
                              : '#94A3B8',
                        }}
                      />
                      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <Chip
                          label={lesson.status}
                          size="small"
                          color={
                            lesson.status === 'Completed'
                              ? 'success'
                              : lesson.status === 'In Progress'
                              ? 'primary'
                              : 'default'
                          }
                          sx={{ fontWeight: 700, fontSize: '0.7rem' }}
                        />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, sm: true }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', fontSize: { xs: '1rem', sm: '1.1rem' }, mb: 0.5 }}>
                      {lesson.name}
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <AccessTimeIcon sx={{ fontSize: 16, color: '#64748B' }} />
                        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                          {lesson.duration}
                        </Typography>
                      </Box>
                      <Typography variant="caption" color="text.secondary">
                        • {lesson.topics.length} Key Topics Covered
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 'auto' }}>
                    <Stack direction="row" spacing={1.5} alignItems="center" justifyContent={{ xs: 'space-between', sm: 'flex-end' }}>
                      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Chip
                          label={lesson.status}
                          size="small"
                          color={
                            lesson.status === 'Completed'
                              ? 'success'
                              : lesson.status === 'In Progress'
                              ? 'primary'
                              : 'default'
                          }
                          sx={{ fontWeight: 700 }}
                        />
                      </Box>
                      <Button
                        variant={lesson.status === 'Completed' ? 'outlined' : 'contained'}
                        size="small"
                        startIcon={<PlayCircleOutlineIcon />}
                        onClick={() => handleOpenLesson(lesson)}
                        sx={{
                          px: 2.5,
                          py: 0.8,
                          borderRadius: 2,
                          fontWeight: 700,
                          textTransform: 'none',
                          boxShadow: lesson.status !== 'Completed' ? '0 4px 12px rgba(15, 82, 186, 0.2)' : 'none',
                        }}
                      >
                        {lesson.status === 'Completed' ? 'Review Lesson' : 'Start Lesson'}
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Lesson Details Modal */}
      {selectedLesson && (
        <Dialog open={Boolean(selectedLesson)} onClose={handleCloseLesson} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ fontWeight: 800, color: '#0F172A', pt: 3 }}>
            {selectedLesson.name}
          </DialogTitle>
          <DialogContent>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip icon={<AccessTimeIcon />} label={selectedLesson.duration} size="small" variant="outlined" />
              <Chip label={selectedLesson.status} color="primary" size="small" />
            </Stack>
            <Typography variant="body1" paragraph sx={{ color: '#334155', lineHeight: 1.6 }}>
              {selectedLesson.summary}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: '#0F172A' }}>
              Topics Covered in this Blueprint:
            </Typography>
            <Stack spacing={1}>
              {selectedLesson.topics.map((topic, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: 18, color: '#2E7D32' }} />
                  <Typography variant="body2" sx={{ color: '#475569', fontWeight: 600 }}>
                    {topic}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </DialogContent>
          <DialogActions sx={{ p: 2.5, justifyContent: 'space-between' }}>
            <Button
              color={selectedLesson.status === 'Completed' ? 'warning' : 'success'}
              onClick={() => handleToggleStatus(selectedLesson.id)}
              sx={{ fontWeight: 700 }}
            >
              Mark as {selectedLesson.status === 'Completed' ? 'Incomplete' : 'Completed'}
            </Button>
            <Button variant="contained" onClick={handleCloseLesson} sx={{ fontWeight: 700, borderRadius: 2 }}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default LearningHub;