import { SelectChangeEvent } from '@mui/material/Select';
export interface SelectProps {
  name: string;
  label: string;
  value: string|number;
  option: string[]|number[];
  handleChange: (event: SelectChangeEvent) => void;
}
