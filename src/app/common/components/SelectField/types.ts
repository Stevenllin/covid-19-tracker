import { SelectChangeEvent } from '@mui/material/Select';
export interface SelectProps {
  name: string;
  label: string;
  value: string;
  option: string[];
  handleChange: (event: SelectChangeEvent) => void;
}
