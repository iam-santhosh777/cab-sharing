import React, { useState, useEffect, useRef } from 'react'
import { TextField, InputAdornment, CircularProgress, Paper, List, ListItem, ListItemButton } from '@mui/material'
import { LocationOn as LocationIcon } from '@mui/icons-material'

function LocationInput({ id, name, value, onChange, label, placeholder }) {
  const [inputValue, setInputValue] = useState(value || '')
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    setInputValue(value || '')
  }, [value])

  useEffect(() => {
    if (!inputValue) {
      setSuggestions([])
      return
    }
    setLoading(true)
    const controller = new AbortController()
    const fetchSuggestions = async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(inputValue)}&addressdetails=1&limit=5`,
          { signal: controller.signal, headers: { 'Accept-Language': 'en' } }
        )
        const data = await res.json()
        setSuggestions(data)
      } catch (e) {
        if (e.name !== 'AbortError') setSuggestions([])
      } finally {
        setLoading(false)
      }
    }
    const debounce = setTimeout(fetchSuggestions, 400)
    return () => {
      clearTimeout(debounce)
      controller.abort()
    }
  }, [inputValue])

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    setShowSuggestions(true)
    onChange({
      target: {
        id,
        name,
        value: event.target.value,
      },
    })
  }

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.display_name)
    setShowSuggestions(false)
    onChange({
      target: {
        id,
        name,
        value: suggestion.display_name,
      },
    })
  }

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 150)
  }

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <TextField
        inputRef={inputRef}
        id={id}
        name={name}
        label={label}
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowSuggestions(true)}
        onBlur={handleBlur}
        placeholder={placeholder}
        required
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationIcon color="action" />
            </InputAdornment>
          ),
          style: {
            borderRadius: 8,
            fontSize: '1rem',
          },
        }}
        InputLabelProps={{
          shrink: !!inputValue || undefined,
        }}
      />
      {loading && <CircularProgress size={20} style={{ position: 'absolute', right: 8, top: 18, zIndex: 2 }} />}
      {showSuggestions && suggestions.length > 0 && (
        <Paper style={{ position: 'absolute', zIndex: 10, width: '100%', marginTop: 2, maxHeight: 220, overflowY: 'auto' }}>
          <List>
            {suggestions.map((s, idx) => (
              <ListItem key={s.place_id} disablePadding>
                <ListItemButton onMouseDown={() => handleSuggestionClick(s)}>
                  {s.display_name}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  )
}

export default LocationInput 