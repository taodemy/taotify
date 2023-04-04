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
  const buttonClass = (color: ButtonColor) => {
    const buttonClassName = outline
      ? `text-light border border-${color} bg-transparent hover:bg-${color}-400 active:bg-${color}-400`
      : ` text-light bg-${color} hover:bg-${color}-400 active:bg-${color}-400 disabled:bg-${color}-100 disabled:text-light-400`;
    if (color === "light")
      return outline
        ? `text-light border border-${color} bg-transparent hover:bg-${color}-400 active:bg-${color}-400`
        : ` text-dark bg-${color}-400 hover:bg-${color}-400 active:bg-${color}-400 disabled:bg-${color}-200 disabled:text-dark-200`;
    if (color === "dark")
      return outline
        ? `text-dark border border-${color} bg-transparent hover:bg-${color}-400 active:bg-${color}-400`
        : ` text-light bg-${color}-400 hover:bg-${color}-400 active:bg-${color}-400 disabled:bg-${color}-200 disabled:text-light-200`;
    return buttonClassName;
  };
  const buttonColor = {
    primary: buttonClass("primary"),
    secondary: buttonClass("secondary"),
    ternary: buttonClass("ternary"),
    warning: buttonClass("warning"),
    info: buttonClass("info"),
    light: buttonClass("light"),
    dark: buttonClass("dark"),
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
