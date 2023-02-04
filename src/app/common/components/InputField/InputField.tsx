import React from 'react';
import { useField } from 'formik';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Typography } from "@material-ui/core";
import { InputFieldProps } from './types';

const InputField: React.FC<InputFieldProps> = ({ name, options, handleChange }) => {
  const field = useField(name);

  return (
      <Autocomplete
        {...field}
        options={options}
        renderOption={(props, option) => (
          <li key={option} {...props}>
            <Typography style={{ fontSize: 16, fontFamily: ["Montserrat", "sans-serif"].join(",") }}>{option}</Typography>
          </li>
        )}
        sx={{ width: '35%' }}
        onChange={(event, value) => handleChange(value)}
        renderInput={(params) => {
          return (
              <TextField
                {...params}
                InputLabelProps={{ style: { fontFamily: ["Montserrat", "sans-serif"].join(","), fontSize: 16 } }} // font size of input label
                sx={{
                  '.MuiInputBase-input': { fontSize: '16px', fontFamily: ["Montserrat", "sans-serif"].join(",") },
                }}
                label='Choose your Country'
              />
            )
          }
        }
      />
  );
}
export default InputField;
