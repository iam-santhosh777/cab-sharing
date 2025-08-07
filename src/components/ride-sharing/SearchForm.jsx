import React from 'react'
import { Card, CardContent, Grid, Button, Box } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import ModernDateTimePicker from '../ModernDateTimePicker'
import PassengerCounter from '../PassengerCounter'
import LocationInput from './LocationInput'

function SearchForm({ searchData, onInputChange, onDateChange, onPassengerChange, onSubmit }) {
  return (
    <Card sx={{ mb: 4, borderRadius: 3 }}>
      <CardContent sx={{ p: 4 }}>
        <Box component="form" onSubmit={onSubmit}>
          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} md={6}>
              <LocationInput
                id="from"
                name="from"
                value={searchData.from}
                onChange={onInputChange}
                label="Leaving from"
                placeholder="Enter departure city"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <LocationInput
                id="to"
                name="to"
                value={searchData.to}
                onChange={onInputChange}
                label="Going to"
                placeholder="Enter destination city"
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <ModernDateTimePicker
                date={searchData.date}
                onDateChange={onDateChange}
                label="Departure"
                placeholder="Select departure date"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PassengerCounter
                value={searchData.passengers}
                onChange={onPassengerChange}
                label="Passengers"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            startIcon={<SearchIcon />}
            sx={{
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              background: 'linear-gradient(45deg, #1976d2 30%, #9c27b0 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1565c0 30%, #7b1fa2 90%)',
                transform: 'scale(1.02)',
              },
              transition: 'all 0.2s ease-in-out',
            }}
          >
            Search rides
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default SearchForm 