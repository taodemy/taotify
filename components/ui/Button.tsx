type ButtonColor = "primary" | "secondary" | "ternary" | "warning" | "info" | "light" | "dark";
type ButtonProps = {
  color?: ButtonColor;
  size?: "tiny" | "small" | "normal" | "large";
  outline?: boolean;
  variant?: "normal" | "icon";
  label?: string;
  onClick?: () => void;
};

const Button = ({
  variant = "normal",
  color = "primary",
  outline = false,
  size = "normal",
  onClick,
  label = "button",
  ...otherProps
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const btn = "text-base rounded-full font-[Roboto] flex justify-center items-center";
  const getButtonClass = (color: ButtonColor) => {
    switch (color) {
      case "primary":
        return outline
          ? "text-light border border-primary bg-transparent hover:bg-primary-400 active:bg-primary-400 disabled:bg-primary-100 disabled:text-light-100"
          : `text-light bg-primary hover:bg-primary-400 active:bg-primary-400 disabled:bg-primary-100`;
      case "secondary":
        return outline
          ? "text-light border border-secondary bg-transparent hover:bg-secondary-400 active:bg-secondary-400 disabled:bg-secondary-100"
          : "text-light bg-secondary hover:bg-secondary-400 active:bg-secondary-400 disabled:bg-secondary-100";
      case "ternary":
        return outline
          ? "text-light border border-ternary bg-transparent hover:bg-ternary-400 active:bg-ternary-400 disabled:bg-ternary-100"
          : "text-light bg-ternary hover:bg-ternary-400 active:bg-ternary-400 disabled:bg-ternary-100";
      case "warning":
        return outline
          ? "text-light border border-warning bg-transparent hover:bg-warning-400 active:bg-warning-400 disabled:bg-warning-100"
          : "text-light bg-warning hover:bg-warning-400 active:bg-warning-400 disabled:bg-warning-100";
      case "info":
        return outline
          ? "text-light border border-info bg-transparent hover:bg-info-400 active:bg-info-400 disabled:bg-info-100"
          : "text-light bg-info hover:bg-info-400 active:bg-info-400 disabled:bg-info-100";
      case "light":
        return;
      case "dark":
        return outline
          ? "border border-dark bg-transparent hover:bg-dark-400 hover:text-light active:bg-dark-400 disabled:bg-dark-100 text-dark"
          : "bg-dark text-light hover:bg-dark-400 active:bg-dark-400 disabled:bg-dark-100 disabled:text-light-200";
      default:
        break;
    }
  };
  const buttonColor = {
    primary: getButtonClass("primary"),
    secondary: getButtonClass("secondary"),
    ternary: getButtonClass("ternary"),
    warning: getButtonClass("warning"),
    info: getButtonClass("info"),
    light: getButtonClass("light"),
    dark: getButtonClass("dark"),
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
      className={` ${buttonColor[color]} ${buttonSize[size]} ${btn} `}
      {...otherProps}
      onClick={onClick}
    >
      {label}
    </button>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize[size]}
      height={iconSize[size]}
      cursor="pointer"
      role="icon"
      onClick={onClick}
      fill={iconColor[color]}
      viewBox="0 0 24 24"
    >
      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z" />
    </svg>
  );
};

export default Button;
