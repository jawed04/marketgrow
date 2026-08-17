import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Avatar,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const categories = ['All', 'Growth Strategy', 'React & Next.js', 'UI/UX Design', 'Analytics'];

const posts = [
  {
    id: 1,
    title: 'Building High-Performance Next.js Applications with MUI v2',
    excerpt: 'Learn how to optimize bundle size, implement server-side rendering, and structure modern MUI layout systems.',
    content: `
      Building modern web applications requires balancing feature density with lightning-fast load times. Next.js combined with Material UI v2 provides a robust foundation for building enterprise-grade applications.

      ### Key Optimization Strategies
      
      1. **Selective Component Imports**: Avoid importing whole libraries. Tree-shaking works best when importing direct submodules.
      2. **MUI v2 Grid System**: Transitioning from legacy Grid to the new \`size\` prop API simplifies responsive breakpoint declarations and reduces DOM complexity.
      3. **Server Component Layouts**: Keep presentation logic on the client while delegating data fetching to React Server Components.

      By applying these principles, you eliminate layout cumulative shifts and achieve top Core Web Vitals performance scores.
    `,
    category: 'React & Next.js',
    readTime: '6 min read',
    date: 'Aug 12, 2026',
    author: {
      name: 'Anjali',
      role: 'MERN Developer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    },
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: 2,
    title: 'Designing Human-Centered Interfaces That Actually Convert',
    excerpt: 'Ditch static templates. Discover core principles of modern typography, visual weight, and micro-interactions.',
    content: `
      Visual design isn't just aesthetic decorative layering—it guides user action and builds brand credibility instantly.

      ### Modern Design Guidelines

      - **Hierarchy First**: Group visual information logically using subtle borders, elevated card backgrounds, and variable font weights.
      - **Consistent Color Tokens**: Stick to dedicated color palettes (like deep slate neutrals paired with vibrant corporate blues) to reinforce contrast.
      - **Responsive Intent**: Adapt layout density for mobile screens by adjusting padding dynamically rather than just scaling text down.
    `,
    category: 'UI/UX Design',
    readTime: '4 min read',
    date: 'Aug 08, 2026',
    author: {
      name: 'Sarah Chen',
      role: 'UX Architect',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    },
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600',
    featured: false,
  },
  {
    id: 3,
    title: 'Conversion Rate Optimization Strategies for Tech Products',
    excerpt: 'How to structure landing pages and product grids to turn passive visitors into active daily users.',
    content: `
      Converting visitors into engaged users relies on eliminating friction points across your user flows.

      ### Execution Checklist

      1. **Clear Hero Messaging**: State the value proposition in sentence one without filler buzzwords.
      2. **Action-Oriented CTAs**: Place high-contrast primary buttons near key decision points.
      3. **Social Proof & Metrics**: Showcase quantifiable success metrics early to reduce user hesitation.
    `,
    category: 'Growth Strategy',
    readTime: '8 min read',
    date: 'Jul 29, 2026',
    author: {
      name: 'Marcus Vance',
      role: 'Data Strategist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    featured: false,
  },
  {
    id: 4,
    title: 'Tracking Core Web Vitals to Boost Search Visibility',
    excerpt: 'Step-by-step audit framework to reduce layout shifts and optimize interactive response times.',
    content: `
      Performance directly dictates user retention and SEO ranking performance. Core Web Vitals monitor how users experience your pages in real-world scenarios.

      ### Target Metrics

      - **LCP (Largest Contentful Paint)**: Keep load times under 2.5 seconds by optimizing hero asset delivery.
      - **INP (Interaction to Next Paint)**: Ensure interface response times under 200ms by minimizing main-thread JavaScript execution.
      - **CLS (Cumulative Layout Shift)**: Set static dimensions for images and component containers to prevent jumpy page loads.
    `,
    category: 'Analytics',
    readTime: '5 min read',
    date: 'Jul 15, 2026',
    author: {
      name: 'Jawed Hussain',
      role: 'MERN Developer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    featured: false,
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = posts.find((p) => p.featured) || posts[0];

  const handleOpenDetail = (post) => {
    setSelectedPost(post);
  };

  const handleCloseDetail = () => {
    setSelectedPost(null);
  };

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: { xs: 5, md: 7 } }}>
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
              INSIGHTS & RESOURCES
            </Typography>
          </Box>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, color: '#0F172A', fontSize: { xs: '2rem', sm: '2.75rem', md: '3.25rem' }, mb: 2 }}
          >
            Engineering & Growth Journal
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>
            Practical tutorials, design patterns, and scaling strategies built for digital innovators.
          </Typography>
        </Box>

        {/* Featured Post Hero */}
        {featuredPost && (
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              border: '1px solid #E2E8F0',
              mb: { xs: 6, md: 8 },
              bgcolor: '#FFFFFF',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.04)',
            }}
          >
            <Grid container>
              <Grid size={{ xs: 12, md: 7 }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={featuredPost.image}
                  alt={featuredPost.title}
                  sx={{ minHeight: { xs: 240, md: 400 }, objectFit: 'cover' }}
                />
              </Grid>
              <Grid
                size={{ xs: 12, md: 5 }}
                sx={{ p: { xs: 3, sm: 4, md: 5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                  <Chip
                    label={featuredPost.category}
                    size="small"
                    sx={{ bgcolor: '#EFF6FF', color: '#0F52BA', fontWeight: 700 }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AccessTimeIcon fontSize="inherit" /> {featuredPost.readTime}
                  </Typography>
                </Stack>

                <Typography
                  variant="h4"
                  sx={{ fontWeight: 800, color: '#0F172A', mb: 2, fontSize: { xs: '1.5rem', md: '1.85rem' }, lineHeight: 1.3 }}
                >
                  {featuredPost.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                  {featuredPost.excerpt}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: 2, borderTop: '1px solid #F1F5F9' }}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar src={featuredPost.author.avatar} alt={featuredPost.author.name} sx={{ width: 40, height: 40 }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A' }}>
                        {featuredPost.author.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {featuredPost.date}
                      </Typography>
                    </Box>
                  </Stack>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => handleOpenDetail(featuredPost)}
                    sx={{
                      bgcolor: '#0F52BA',
                      fontWeight: 700,
                      textTransform: 'none',
                      borderRadius: 2,
                      '&:hover': { bgcolor: '#0B3E8C' },
                    }}
                  >
                    Read
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )}

        {/* Filter and Search Bar */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2.5}
          justifyContent="space-between"
          alignItems={{ xs: 'stretch', md: 'center' }}
          sx={{ mb: 5 }}
        >
          <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', pb: { xs: 1, md: 0 } }}>
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                clickable
                onClick={() => setSelectedCategory(cat)}
                sx={{
                  fontWeight: 600,
                  px: 1,
                  bgcolor: selectedCategory === cat ? '#0F52BA' : '#FFFFFF',
                  color: selectedCategory === cat ? '#FFFFFF' : '#64748B',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? '#0F52BA' : '#E2E8F0',
                  '&:hover': {
                    bgcolor: selectedCategory === cat ? '#0B3E8C' : '#F1F5F9',
                  },
                }}
              />
            ))}
          </Stack>

          <TextField
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            size="small"
            sx={{
              minWidth: { xs: '100%', md: 280 },
              bgcolor: '#FFFFFF',
              '& .MuiOutlinedInput-root': {
                borderRadius: 2.5,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#94A3B8' }} />
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        {/* Post Cards */}
        <Grid container spacing={3.5} sx={{ mb: { xs: 8, md: 10 } }}>
          {filteredPosts.map((post) => (
            <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3.5,
                  border: '1px solid #E2E8F0',
                  bgcolor: '#FFFFFF',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.06)',
                  },
                }}
              >
                <CardMedia component="img" height="200" image={post.image} alt={post.title} />
                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                    <Chip
                      label={post.category}
                      size="small"
                      sx={{ bgcolor: '#EFF6FF', color: '#0F52BA', fontWeight: 600, fontSize: '0.75rem' }}
                    />
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTimeIcon sx={{ fontSize: 14 }} /> {post.readTime}
                    </Typography>
                  </Stack>

                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', mb: 1.5, lineHeight: 1.35, fontSize: '1.1rem' }}>
                    {post.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, flexGrow: 1, lineHeight: 1.6 }}>
                    {post.excerpt}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: 2, borderTop: '1px solid #F1F5F9' }}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Avatar src={post.author.avatar} alt={post.author.name} sx={{ width: 32, height: 32 }} />
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: '#0F172A', display: 'block' }}>
                          {post.author.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {post.date}
                        </Typography>
                      </Box>
                    </Stack>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleOpenDetail(post)}
                      sx={{
                        borderColor: '#0F52BA',
                        color: '#0F52BA',
                        fontWeight: 700,
                        textTransform: 'none',
                        borderRadius: 2,
                        '&:hover': { bgcolor: '#EFF6FF', borderColor: '#0F52BA' },
                      }}
                    >
                      Read
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Newsletter Section */}
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
          <Box sx={{ maxWidth: 580, mx: 'auto' }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.5, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
              Stay Ahead of Web Development Trends
            </Typography>
            <Typography variant="body2" sx={{ color: '#94A3B8', mb: 4, fontSize: '1rem' }}>
              Subscribe to get curated Next.js code patterns, design breakdowns, and performance optimization guides.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center">
              <TextField
                placeholder="Enter your email address"
                variant="outlined"
                size="small"
                sx={{
                  bgcolor: '#FFFFFF',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-root': { borderRadius: 2 },
                  minWidth: { sm: 300 },
                }}
              />
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  bgcolor: '#0F52BA',
                  px: 3.5,
                  py: 1.2,
                  borderRadius: 2,
                  fontWeight: 700,
                  textTransform: 'none',
                  whiteSpace: 'nowrap',
                  '&:hover': { bgcolor: '#0B3E8C' },
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>

      {/* Article Detail Modal */}
      {selectedPost && (
        <Dialog
          open={Boolean(selectedPost)}
          onClose={handleCloseDetail}
          scroll="paper"
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: { borderRadius: 4, overflow: 'hidden' },
          }}
        >
          <DialogTitle sx={{ p: 2, display: 'flex', justifyContent: 'flex-end', borderBottom: '1px solid #F1F5F9' }}>
            <IconButton onClick={handleCloseDetail} size="small">
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <Chip
                label={selectedPost.category}
                size="small"
                sx={{ bgcolor: '#EFF6FF', color: '#0F52BA', fontWeight: 700 }}
              />
              <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <AccessTimeIcon fontSize="inherit" /> {selectedPost.readTime}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CalendarTodayIcon fontSize="inherit" /> {selectedPost.date}
              </Typography>
            </Stack>

            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', mb: 3, fontSize: { xs: '1.5rem', sm: '2.25rem' } }}>
              {selectedPost.title}
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
              <Avatar src={selectedPost.author.avatar} alt={selectedPost.author.name} sx={{ width: 48, height: 48 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A', lineHeight: 1.2 }}>
                  {selectedPost.author.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedPost.author.role}
                </Typography>
              </Box>
            </Stack>

            <Box
              component="img"
              src={selectedPost.image}
              alt={selectedPost.title}
              sx={{ width: '100%', height: { xs: 220, sm: 380 }, objectFit: 'cover', borderRadius: 3, mb: 4 }}
            />

            <Typography
              variant="body1"
              sx={{
                color: '#334155',
                lineHeight: 1.8,
                whiteSpace: 'pre-line',
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
              }}
            >
              {selectedPost.content}
            </Typography>
          </DialogContent>

          <Divider />

          <DialogActions sx={{ p: 3, justifyContent: 'space-between' }}>
            <Button onClick={handleCloseDetail} variant="outlined" sx={{ color: '#64748B', borderColor: '#CBD5E1' }}>
              Close Article
            </Button>
            <Button variant="contained" sx={{ bgcolor: '#0F52BA', '&:hover': { bgcolor: '#0B3E8C' } }}>
              Share Article
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Blog;