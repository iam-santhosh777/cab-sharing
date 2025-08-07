import React, { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Box,
} from '@mui/material';
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  SettingsBrightness as SystemIcon,
  Palette as PaletteIcon,
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (newMode) => {
    toggleTheme(newMode);
    handleClose();
  };

  const getCurrentIcon = () => {
    switch (mode) {
      case 'dark':
        return <DarkIcon />;
      case 'light':
        return <LightIcon />;
      case 'system':
        return <SystemIcon />;
      default:
        return <PaletteIcon />;
    }
  };

  const getCurrentTooltip = () => {
    switch (mode) {
      case 'dark':
        return 'Dark theme';
      case 'light':
        return 'Light theme';
      case 'system':
        return 'System theme';
      default:
        return 'Theme settings';
    }
  };

  return (
    <Box>
      <Tooltip title={getCurrentTooltip()}>
        <IconButton
          onClick={handleClick}
          color="inherit"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          {getCurrentIcon()}
        </IconButton>
      </Tooltip>
      
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem 
          onClick={() => handleThemeChange('light')}
          selected={mode === 'light'}
        >
          <ListItemIcon>
            <LightIcon />
          </ListItemIcon>
          <ListItemText primary="Light" />
        </MenuItem>
        
        <MenuItem 
          onClick={() => handleThemeChange('dark')}
          selected={mode === 'dark'}
        >
          <ListItemIcon>
            <DarkIcon />
          </ListItemIcon>
          <ListItemText primary="Dark" />
        </MenuItem>
        
        <MenuItem 
          onClick={() => handleThemeChange('system')}
          selected={mode === 'system'}
        >
          <ListItemIcon>
            <SystemIcon />
          </ListItemIcon>
          <ListItemText primary="System" />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ThemeToggle;
