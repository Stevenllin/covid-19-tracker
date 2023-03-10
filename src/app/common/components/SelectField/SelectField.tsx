import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider, Typography } from "@material-ui/core";
import { SelectProps } from './types';

const SelectField: React.FC<SelectProps> = (props) => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 16
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <FormControl fullWidth className="w-50">
        <InputLabel id={props.label}><Typography>{props.name}</Typography></InputLabel>
        <Select
          labelId={props.label}
          id={props.label}
          onChange={props.handleChange}
          value={props.value.toString()}
        >
          {
            props.option.map((item, index) => {
              return (
                <MenuItem className="d-block p-3" key={index} value={item}>
                  <Typography>{item}</Typography>
                </MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
    </ThemeProvider>
  )
}

export default SelectField;