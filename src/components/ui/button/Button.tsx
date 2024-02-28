import { ButtonProps
 } from "types/form";
import Loader from "../loader/loader";
import { combineClasses } from "utils/utility";
// import { ButtonSuccessIcon } from "@/assets/svgs/components/button-success-icon";

export const Button = ({
  inputType,
  text,
  className,
  loading,
  success,
  onClick,
  loaderColor,
  icon,
  iconAlt,
}: ButtonProps) => {
  const defaultClasses =
    "min-w-fit px-4 bg-btnPrimary hover:bg-buttonHover rounded text-white !h-[50px] font-medium flex justify-center";
  const classes = combineClasses(defaultClasses, className);
  return loading ? (
    <button type={inputType} disabled={loading} className={`${classes} flex justify-center`}>
      <Loader height="50" width="50" radius="9" color={(loaderColor && loaderColor) || "#fff"} />
    </button>
  ) : (
    <button
      type={inputType}
      className={`${classes} ${success && "flex items-center gap-x-2 "} flex items-center`}
      onClick={(e) => {
        onClick && onClick();
      }}
    >
      {icon && <img src={icon} alt={iconAlt} className="mr-1 " />} {success ? "Geändert" : text}
      {/* {success && <ButtonSuccessIcon />} */}
    </button>
  );
};
