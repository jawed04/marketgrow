import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip, TextField, Box } from '@mui/material';

const toolsList = [
  { name: 'Google Search Console', category: 'SEO Tools', type: 'Free', desc: 'Monitor, maintain, and troubleshoot your site\'s presence in Google Search results.' },
  { name: 'Canva', category: 'Design Tools', type: 'Freemium', desc: 'Create professional graphics, social media posts, and marketing materials effortlessly.' },
  { name: 'Mailchimp', category: 'Email Marketing Tools', type: 'Freemium', desc: 'All-in-one marketing platform for managing email campaigns and client lists.' },
  { name: 'Google Analytics 4', category: 'Analytics Tools', type: 'Free', desc: 'Track key performance indicators, traffic sources, and website conversions.' },
  { name: 'Buffer', category: 'Social Media Tools', type: 'Freemium', desc: 'Schedule social media posts and analyze audience engagement across networks.' },
  { name: 'Ubersuggest', category: 'SEO Tools', type: 'Freemium', desc: 'Generate target keyword ideas, audit site technical SEO, and analyze competitors.' },
];

const Tools = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = toolsList.filter((tool) =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Marketing Tools Directory
      </Typography>
      <Typography color="text.secondary" paragraph>
        Essential tools to streamline operations and scale your marketing efforts.
      </Typography>

      <Box sx={{ my: 4 }}>
        <TextField
          fullWidth
          label="Search by tool name or category..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      <Grid container spacing={3}>
        {filteredTools.map((tool, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Chip label={tool.category} color="primary" size="small" variant="outlined" />
                  <Chip label={tool.type} color={tool.type === 'Free' ? 'success' : 'default'} size="small" />
                </Box>
                <Typography variant="h6" gutterBottom>
                  {tool.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tool.desc}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button size="small" variant="contained" fullWidth>
                  Visit Tool
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Tools;