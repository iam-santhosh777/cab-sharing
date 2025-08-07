import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material'
import {
  Person as PersonIcon,
  DriveEta as DriveEtaIcon,
  HorizontalRule as HorizontalRuleIcon,
  Add as AddIcon,
  AddCircle as AddCircleIcon,
  Logout as LogoutIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material'
import Tooltip from '@mui/material/Tooltip'
import ThemeToggle from '../ThemeToggle'
import { useTheme } from '../../contexts/ThemeContext'
import { useAuth } from '../../contexts/AuthContext'
import LoginModal from '../auth/LoginModal'

function Header({ onPublishRide, onProfile }) {
  const { actualMode } = useTheme()
  const { user, login, logout, isAuthenticated } = useAuth()
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [userMenuAnchor, setUserMenuAnchor] = useState(null)

  return (
    <>
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
            
            {isAuthenticated() ? (
              <>
                <Tooltip title={user?.name || 'User Profile'}>
                  <IconButton
                    onClick={(e) => setUserMenuAnchor(e.currentTarget)}
                    sx={{
                      color: 'inherit',
                      '&:hover': {
                        backgroundColor: actualMode === 'light' 
                          ? 'rgba(25, 118, 210, 0.1)' 
                          : 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    <Avatar 
                      src={user?.avatar} 
                      alt={user?.name}
                      sx={{ width: 32, height: 32 }}
                    >
                      {user?.name?.charAt(0)?.toUpperCase()}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                
                <Menu
                  anchorEl={userMenuAnchor}
                  open={Boolean(userMenuAnchor)}
                  onClose={() => setUserMenuAnchor(null)}
                  onClick={() => setUserMenuAnchor(null)}
                  PaperProps={{
                    elevation: 3,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      minWidth: 200,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={() => { onProfile && onProfile(); setUserMenuAnchor(null); }}>
                    <ListItemIcon>
                      <AccountCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={() => { logout(); setUserMenuAnchor(null); }}>
                    <ListItemIcon>
                      <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Tooltip title="Sign In">
                <IconButton
                  onClick={() => setLoginModalOpen(true)}
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
              </Tooltip>
            )}
            
            <ThemeToggle />
          </Box>
        </Toolbar>
      </AppBar>
      
      <LoginModal 
        open={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLogin={login}
      />
    </>
  )
}

export default Header