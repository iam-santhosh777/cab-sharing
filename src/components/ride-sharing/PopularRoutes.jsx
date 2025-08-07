import React from 'react'
import { Card, CardContent, Typography, Grid } from '@mui/material'
import RouteCard from './RouteCard'

function PopularRoutes() {
  const popularRoutes = [
    { from: 'Delhi', to: 'Agra', price: '₹500', time: '3h 30m' },
    { from: 'Mumbai', to: 'Pune', price: '₹400', time: '2h 45m' },
    { from: 'Bangalore', to: 'Mysore', price: '₹350', time: '3h 0m' },
    { from: 'Chennai', to: 'Pondicherry', price: '₹600', time: '3h 15m' },
    { from: 'Hyderabad', to: 'Vijayawada', price: '₹700', time: '5h 0m' },
    { from: 'Kolkata', to: 'Digha', price: '₹550', time: '4h 0m' },
  ]

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h4" component="h3" fontWeight="bold" mb={3}>
          Popular routes
        </Typography>
        <Grid container spacing={2} sx={{ maxHeight: 350, overflowY: 'auto' }}>
          {popularRoutes.map((route, index) => (
            <Grid item xs={12} md={4} key={index}>
              <RouteCard route={route} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default PopularRoutes 