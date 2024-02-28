// import { ReactNode } from "react"
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";

export interface BaseFieldProps {
  type: string;
  id: string;
  name: string;
  className?: string;
}

export interface InputProps extends BaseFieldProps {
  inputType: "text" | "email" | "number" | "password";
  value?: string;
  success?: boolean;
  register?: UseFormRegister<FieldValues>;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  setValue?: UseFormSetValue<FieldValues>;
  containerClassName?: string;
}

export interface ButtonProps extends BaseFieldProps {
  inputType: "submit" | "button";
  text: string;
  loading?: boolean | null;
  success?: boolean;
  onClick?: Function;
  loaderColor?: string;
  icon?: any;
  iconAlt?: any;
}

