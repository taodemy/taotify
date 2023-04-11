import CloseIcon from "./CloseIcon";

type ButtonColor = "primary" | "secondary" | "ternary" | "warning" | "info" | "light" | "dark";
type ButtonProps = {
  color?: ButtonColor;
  size?: "tiny" | "small" | "normal" | "large";
  outline?: boolean;
  variant?: "normal" | "icon";
  label?: string;
  onClick?: () => void;
} & React.ComponentProps<"button">;

const btn = " text-light text-base rounded-full font-[Roboto] flex justify-center items-center";
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
    default:
      const _exhaustiveCheck: never = color;
      return _exhaustiveCheck;
  }
};

const Button = ({
  variant = "normal",
  color = "primary",
  outline = false,
  size = "normal",
  onClick,
  label = "button",
  ...otherProps
}: ButtonProps) => {
  const buttonColor = {
    primary: getButtonClass("primary", outline),
    secondary: getButtonClass("secondary", outline),
    ternary: getButtonClass("ternary", outline),
    warning: getButtonClass("warning", outline),
    info: getButtonClass("info", outline),
    light: getButtonClass("light", outline),
    dark: getButtonClass("dark", outline),
  };

  const buttonSize = {
    tiny: "py-[1px] px-[4px]",
    small: "py-[3px] px-[8px]",
    normal: "py-[6px] px-[12px]",
    large: "py-[12px] px-[24px]",
  };

  const iconColor = {
    primary: "#8B3ECF",
    secondary: "#3972E6",
    ternary: "#2DEBC9",
    info: "#DB7737",
    warning: "#E63965",
    light: "#FEFEFE",
    dark: "#282B2D",
  };

  const iconSize = {
    tiny: "26px",
    small: "32px",
    normal: "40px",
    large: "48px",
  };

  return variant === "normal" ? (
    <button
      className={`${buttonColor[color]} ${buttonSize[size]} ${btn} `}
      {...otherProps}
      onClick={onClick}
    >
      {label}
    </button>
  ) : (
    <>
      <CloseIcon
        width={iconSize[size]}
        height={iconSize[size]}
        onClick={onClick}
        fill={iconColor[color]}
      ></CloseIcon>
    </>
  );
};

export default Button;
