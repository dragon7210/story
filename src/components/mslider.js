import { Slider } from '@mui/material'
import React from 'react'

const MSlider = ({ value, onChange }) => {
  return (
    <Slider
      sx={{
        '& input[type="range"]': {
          WebkitAppearance: 'slider-vertical',
        },
      }}
      className={value > 7 ? 'normal' : value > 3 ? 'warning' : 'critical'}
      orientation="vertical"
      defaultValue={0}
      min={0}
      max={10}
      step={1}
      valueLabelDisplay="auto"
      value={value ?? 0}
      onChange={onChange}
    />
  )
}

export default MSlider
