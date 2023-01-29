import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectProps } from './types';

const SelectField: React.FC<SelectProps> = (props) => {
  return (
    <FormControl fullWidth className="w-50">
      <InputLabel id={props.label}>{props.name}</InputLabel>
      <Select
        labelId={props.label}
        id={props.label}
        onChange={props.handleChange}
        value={props.value}
      >
        {
          props.option.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>{item}</MenuItem>
            )
          })
        }
      </Select>
    </FormControl>
  )
}

export default SelectField;