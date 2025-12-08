import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { LoadingButton } from '@mui/lab';
import { Box, TextField, Button, Typography, CircularProgress, Paper, Grid } from '@mui/material';

interface BusinessSpecification {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<Partial<BusinessSpecification>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleInputChange = (field: keyof BusinessSpecification) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpecification({ ...specification, [field]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);

      // Example API call
      await axios.post('/api/business-specifications', specification);

      // Reset form after successful submission
      setSpecification({});
    } catch (err) {
      setError('Failed to create business specification');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper className="p-6">
      <Typography variant="h5" gutterBottom>
        Create Business Specification
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={specification.name || ''}
              onChange={handleInputChange('name')}
              required
              aria-label="business-spec-name"
              inputProps={{ 'aria-required': true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              variant="outlined"
              value={specification.description || ''}
              onChange={handleInputChange('description')}
              required
              multiline
              rows={4}
              aria-label="business-spec-description"
              inputProps={{ 'aria-required': true }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <LoadingButton
            loading={loading}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            aria-label="create-business-specification-button"
            disabled={!specification.name || !specification.description}
          >
            Create Specification
          </LoadingButton>
        </Box>
      </form>
    </Paper>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { LoadingButton } from '@mui/lab';
import { Box, TextField, Button, Typography, CircularProgress, Paper, Grid } from '@mui/material';

interface BusinessSpecification {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<Partial<BusinessSpecification>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleInputChange = (field: keyof BusinessSpecification) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpecification({ ...specification, [field]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);

      // Example API call
      await axios.post('/api/business-specifications', specification);

      // Reset form after successful submission
      setSpecification({});
    } catch (err) {
      setError('Failed to create business specification');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper className="p-6">
      <Typography variant="h5" gutterBottom>
        Create Business Specification
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={specification.name || ''}
              onChange={handleInputChange('name')}
              required
              aria-label="business-spec-name"
              inputProps={{ 'aria-required': true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              variant="outlined"
              value={specification.description || ''}
              onChange={handleInputChange('description')}
              required
              multiline
              rows={4}
              aria-label="business-spec-description"
              inputProps={{ 'aria-required': true }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <LoadingButton
            loading={loading}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            aria-label="create-business-specification-button"
            disabled={!specification.name || !specification.description}
          >
            Create Specification
          </LoadingButton>
        </Box>
      </form>
    </Paper>
  );
};

export default CreateBusinessSpecification;