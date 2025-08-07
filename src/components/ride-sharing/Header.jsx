import React from 'react'
import logo from "../../assets/logo.png"
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
} from '@mui/material'
import {
  Person as PersonIcon,
  DriveEta as DriveEtaIcon,
  HorizontalRule as HorizontalRuleIcon,
  Add as AddIcon,
  AddCircle as AddCircleIcon,
} from '@mui/icons-material'
import Tooltip from '@mui/material/Tooltip'
import ThemeToggle from '../ThemeToggle'
import { useTheme } from '../../contexts/ThemeContext'

function Header({ onPublishRide, onProfile }) {
  const { actualMode } = useTheme()

  return (
    <AppBar 
      position="static" 
      elevation={1}
      sx={{
        backgroundColor: actualMode === 'light' ? '#ffffff' : undefined,
        color: actualMode === 'light' ? '#1976d2' : undefined,
        borderBottom: actualMode === 'light' ? '1px solid #e0e0e0' : undefined,
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <img src={logo} alt="RideShare Logo" style={{ width: 100, height: 50, marginRight: 8 }} />
          
        </Box>
        
        <Box display="flex" alignItems="center" gap={2}>
          <Tooltip title="Offer a ride">
            <IconButton
              onClick={onPublishRide}
              sx={{
                color: actualMode === 'light' ? '#1976d2' : '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 1,
              }}
            >
              <AddCircleIcon fontSize="medium" sx={{ color: actualMode === 'light' ? '#1976d2' : '#fff' }} />
            </IconButton>
          </Tooltip>
          
          <IconButton
            onClick={onProfile}
            sx={{
              color: 'inherit',
              '&:hover': {
                backgroundColor: actualMode === 'light' 
                  ? 'rgba(25, 118, 210, 0.1)' 
                  : 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <PersonIcon />
          </IconButton>
          
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header 