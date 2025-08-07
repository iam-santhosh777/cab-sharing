import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'
import { AccessTime as TimeIcon } from '@mui/icons-material'

function RouteCard({ route }) {
  return (
    <Card 
      sx={{ 
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 3,
        },
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
          <Box>
            <Typography variant="subtitle1" fontWeight="medium">
              {route.from} → {route.to}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {route.time}
            </Typography>
          </Box>
          <Typography variant="h6" fontWeight="bold" color="primary">
            {route.price}
          </Typography>
        </Box>
        
        <Box display="flex" alignItems="center">
          <TimeIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
          <Typography variant="caption" color="text.secondary">
            Multiple rides available
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default RouteCard 