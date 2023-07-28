import { ButtonColor } from "./index";

export type NormalButtonProps = {
  color?: ButtonColor;
  size?: "tiny" | "small" | "normal" | "large";
  outline?: boolean;
  label?: string;
  onClick?: () => void;
} & React.ComponentProps<"button">;

const btn = " text-light text-base rounded-full flex justify-center items-center";
const getButtonClass = (color: ButtonColor, outline: boolean) => {
  switch (color) {
    case "primary":
      return outline
        ? "border border-primary hover:bg-primary active:bg-primary disabled:text-light-100"
        : "bg-primary hover:bg-primary-400 active:bg-primary-400 disabled:bg-primary-100 disabled:text-light-400";
    case "secondary":
      return outline
        ? "border border-secondary hover:bg-secondary active:bg-secondary disabled:text-secondary-100"
        : "bg-secondary hover:bg-secondary-400 active:bg-secondary-400 disabled:bg-secondary-100 disabled:text-light-400";
    case "ternary":
      return outline
        ? "border border-ternary hover:bg-ternary active:bg-ternary disabled:text-light-100"
        : "bg-ternary hover:bg-ternary-400 active:bg-ternary-400 disabled:bg-ternary-100 disabled:text-light-400";
    case "warning":
      return outline
        ? "border border-warning hover:bg-warning active:bg-warning disabled:text-light-100"
        : "bg-warning hover:bg-warning-400 active:bg-warning-400 disabled:bg-warning-100 disabled:text-light-400";
    case "info":
      return outline
        ? "border border-info hover:bg-info active:bg-info disabled:text-light-100"
        : "bg-info hover:bg-info-400 active:bg-info-400 disabled:bg-info-100 disabled:text-light-400";
    case "light":
      return `hover:bg-light-400 hover:text-dark active:bg-light-400 active:text-dark ${
        outline
          ? "border border-light-100 text-light disabled:border-light-100 disabled:text-light-100"
          : "bg-light-400 text-dark disabled:bg-light-200 disabled:text-dark-200"
      }`;
    case "dark":
      return `hover:bg-dark-400 hover:text-light active:bg-dark-400 active:text-light ${
        outline
          ? "border border-dark-100 text-dark disabled:border-dark-100 disabled:text-light-100"
          : "bg-dark-400 text-light disabled:bg-dark-200 disabled:text-light-200"
      }`;
  }
};

const NormalButton = ({
  color = "primary",
  outline = false,
  size = "normal",
  onClick,
  label = "button",
  ...otherProps
}: NormalButtonProps) => {
  const buttonSize = {
    tiny: "py-[1px] px-[4px]",
    small: "py-[3px] px-[8px]",
    normal: "py-[6px] px-[12px]",
    large: "py-[12px] px-[24px]",
  };

  return (
    <button
      className={`${getButtonClass(color, outline)} ${buttonSize[size]} ${btn}`}
      {...otherProps}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default NormalButton;
