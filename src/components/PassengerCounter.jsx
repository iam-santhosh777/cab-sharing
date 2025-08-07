import { useState } from 'react'
import {
  Box,
  Typography,
  IconButton,
  Paper,
  InputAdornment,
  TextField,
} from '@mui/material'
import {
  Group as GroupIcon,
  Remove as RemoveIcon,
  Add as AddIcon,
  Info as InfoIcon,
} from '@mui/icons-material'

function PassengerCounter({ value, onChange, label = "Passengers" }) {
  const [count, setCount] = useState(value || 1)

  const handleIncrement = () => {
    const newCount = Math.min(count + 1, 8) // Max 8 passengers
    setCount(newCount)
    onChange(newCount)
  }

  const handleDecrement = () => {
    const newCount = Math.max(count - 1, 1) // Min 1 passenger
    setCount(newCount)
    onChange(newCount)
  }

  return (
    <Box>
      <TextField
        label={label}
        value={count}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <GroupIcon color="action" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Box display="flex" alignItems="center" gap={1}>
                <IconButton
                  size="small"
                  onClick={handleDecrement}
                  disabled={count <= 1}
                  sx={{
                    backgroundColor: 'action.hover',
                    '&:hover': {
                      backgroundColor: 'action.selected',
                    },
                    '&.Mui-disabled': {
                      backgroundColor: 'action.disabledBackground',
                    },
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                
                <Typography variant="h6" component="span" sx={{ minWidth: 32, textAlign: 'center' }}>
                  {count}
                </Typography>
                
                <IconButton
                  size="small"
                  onClick={handleIncrement}
                  disabled={count >= 8}
                  sx={{
                    backgroundColor: 'action.hover',
                    '&:hover': {
                      backgroundColor: 'action.selected',
                    },
                    '&.Mui-disabled': {
                      backgroundColor: 'action.disabledBackground',
                    },
                  }}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>
            </InputAdornment>
          ),
          readOnly: true,
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
          },
        }}
      />
      
      {/* Passenger info */}
      <Box display="flex" alignItems="center" mt={1}>
        <InfoIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
        <Typography variant="caption" color="text.secondary">
          Maximum 8 passengers per ride
        </Typography>
      </Box>
    </Box>
  )
}

export default PassengerCounter 