import React from 'react'
import { Box, Typography } from '@mui/material'

function Hero() {
  return (
    <Box textAlign="center" mb={6}>
      <Typography 
        variant="h2" 
        component="h2" 
        fontWeight="bold" 
        mb={2}
        sx={{
          fontSize: { xs: '2rem', md: '3rem' },
        }}
      >
        Find your perfect ride
      </Typography>
      <Typography 
        variant="h5" 
        color="text.secondary"
        sx={{
          fontSize: { xs: '1.1rem', md: '1.25rem' },
        }}
      >
        Share rides and travel together for a better world
      </Typography>
    </Box>
  )
}

export default Hero 