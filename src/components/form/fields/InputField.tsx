import { InputProps } from "types/form";
import { combineClasses } from "utils/utility";
import { useEffect } from "react";

export const InputField = ({
  id,
  inputType,
  value,
  name,
  register,
  placeholder,
  className,
  disabled,
  containerClassName,
  setValue,
  label,
}: InputProps) => {
  const defaultClasses = `w-full border text-lg font-semibold rounded-xl p-4 outline-none focus:shadow-outline`;
  const classes = combineClasses(defaultClasses, className);
  useEffect(() => setValue && setValue(name, value), [name, setValue, value]);

  const containerClasses = combineClasses(
    "relative w-full",
    containerClassName
  );

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={id} className="block text-xl font-bold mb-1">{label}</label>
      )}
      <input
        id={id}
        type={inputType}
        value={value} 
        {...register?.(name)}
        placeholder={placeholder}
        className={`${classes}`}
        disabled={disabled}
      />
    </div>
  );
};
