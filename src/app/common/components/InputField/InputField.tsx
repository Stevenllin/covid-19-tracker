import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { InputFieldProps } from './types';

const InputField: React.FC<InputFieldProps> = (props) => {
  const handleChange = (e: any) => {
    console.log(e.target.value)
    props.value.current = e.target.value;
  };
  return (
    <Autocomplete
      disablePortal
      value={props.value.current}
      options={props.options}
      onInputChange={handleChange}
      sx={{ width: '25%' }}
      renderInput={(params) => <TextField {...params} name='auto-input' label='Select your Country' />}
    />
  );
}

export default InputField;
