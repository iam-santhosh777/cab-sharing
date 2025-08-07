import { useState } from 'react'
import { Container, Box } from '@mui/material'
import { Header, Hero, SearchForm, PopularRoutes } from './ride-sharing'

function RideSharingApp() {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: null,
    passengers: 1
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleDateChange = (date) => {
    setSearchData(prev => ({
      ...prev,
      date: date
    }))
  }

  const handlePassengerChange = (passengers) => {
    setSearchData(prev => ({
      ...prev,
      passengers: passengers
    }))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for rides:', searchData)
    // Here you would typically search for available rides
  }

  const handlePublishRide = () => {
    console.log('Publish ride clicked')
    // Navigate to publish ride form
  }

  const handleProfile = () => {
    console.log('Profile clicked')
    // Navigate to profile page
  }

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header onPublishRide={handlePublishRide} onProfile={handleProfile} />
      
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Hero />
        <SearchForm
          searchData={searchData}
          onInputChange={handleInputChange}
          onDateChange={handleDateChange}
          onPassengerChange={handlePassengerChange}
          onSubmit={handleSearch}
        />
        <PopularRoutes />
      </Container>
    </Box>
  )
}

export default RideSharingApp 