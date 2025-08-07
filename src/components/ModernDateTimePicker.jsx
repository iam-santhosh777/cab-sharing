import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { format, isToday, isTomorrow } from 'date-fns'
import { TextField, InputAdornment } from '@mui/material'
import { CalendarToday as CalendarIcon } from '@mui/icons-material'
import 'react-datepicker/dist/react-datepicker.css'

function ModernDateTimePicker({ date, onDateChange, label, placeholder }) {
  const [isDateOpen, setIsDateOpen] = useState(false)

  const handleDateChange = (newDate) => {
    onDateChange(newDate)
    setIsDateOpen(false)
  }

  // Smart date formatting
  const formatDate = (date) => {
    if (!date) return placeholder || "Select date"
    
    if (isToday(date)) {
      return "Today"
    } else if (isTomorrow(date)) {
      return "Tomorrow"
    } else {
      return format(date, "MMM dd, yyyy")
    }
  }

  return (
    <div>
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        onCalendarOpen={() => setIsDateOpen(true)}
        onCalendarClose={() => setIsDateOpen(false)}
        dateFormat="MMM dd, yyyy"
        placeholderText={placeholder || "Select date"}
        minDate={new Date()}
        showPopperArrow={false}
        popperPlacement="bottom-start"
        withPortal
        popperModifiers={[
          {
            name: 'preventOverflow',
            options: {
              altAxis: true,
              tether: false,
              rootBoundary: 'viewport',
              padding: 8,
            },
          },
        ]}
        customInput={
          <TextField
            label={label}
            value={formatDate(date)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarIcon color="action" />
                </InputAdornment>
              ),
              readOnly: true,
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                cursor: 'pointer',
              },
            }}
          />
        }
        calendarClassName="modern-datepicker"
        popperClassName="modern-datepicker-popper"
      />

      {/* Custom CSS for date picker */}
      <style jsx>{`
        .modern-datepicker {
          border: none !important;
          border-radius: 12px !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
          font-family: inherit !important;
          background: white !important;
        }
        
        .modern-datepicker .react-datepicker__header {
          background: linear-gradient(135deg, #1976d2 0%, #9c27b0 100%) !important;
          border-radius: 12px 12px 0 0 !important;
          border: none !important;
          color: white !important;
          padding: 16px !important;
        }
        
        .modern-datepicker .react-datepicker__current-month {
          color: white !important;
          font-weight: 600 !important;
          font-size: 16px !important;
        }
        
        .modern-datepicker .react-datepicker__day-name {
          color: rgba(255, 255, 255, 0.8) !important;
          font-weight: 500 !important;
        }
        
        .modern-datepicker .react-datepicker__day {
          border-radius: 50% !important;
          margin: 2px !important;
          transition: all 0.2s !important;
          width: 32px !important;
          height: 32px !important;
          line-height: 32px !important;
          font-weight: 500 !important;
        }
        
        .modern-datepicker .react-datepicker__day:hover {
          background-color: #1976d2 !important;
          color: white !important;
          transform: scale(1.1) !important;
        }
        
        .modern-datepicker .react-datepicker__day--selected {
          background-color: #1976d2 !important;
          color: white !important;
          box-shadow: 0 4px 8px rgba(25, 118, 210, 0.3) !important;
        }
        
        .modern-datepicker .react-datepicker__day--keyboard-selected {
          background-color: #1976d2 !important;
          color: white !important;
        }
        
        .modern-datepicker .react-datepicker__navigation {
          color: white !important;
          border: none !important;
          background: rgba(255, 255, 255, 0.1) !important;
          border-radius: 50% !important;
          width: 32px !important;
          height: 32px !important;
          top: 16px !important;
        }
        
        .modern-datepicker .react-datepicker__navigation:hover {
          background-color: rgba(255, 255, 255, 0.2) !important;
          border-radius: 50% !important;
        }
        
        .modern-datepicker .react-datepicker__navigation--previous {
          left: 16px !important;
        }
        
        .modern-datepicker .react-datepicker__navigation--next {
          right: 16px !important;
        }
        
        /* Animation for date picker */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .react-datepicker-popper {
          animation: fadeInUp 0.3s ease-out !important;
        }
      `}</style>
    </div>
  )
}

export default ModernDateTimePicker 