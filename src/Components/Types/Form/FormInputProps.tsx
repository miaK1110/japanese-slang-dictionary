type InputFiledType = 'text' | 'password' | 'email';

export interface FormInputProps {
  name: string;
  control?: any;
  label: string;
  setValue?: any;
  required?: boolean;
  type?: InputFiledType;
  id?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  error?: boolean;
  helperText?: string | undefined;
  rules?: any;
}
