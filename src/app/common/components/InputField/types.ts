export interface InputFieldProps {
  name: string;
  options: string[];
  handleChange: (value: string|null) => void;
}
