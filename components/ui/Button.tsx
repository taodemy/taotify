export type ButtonProps = {
  color?: "primary" | "secondary" | "ternary" | "warning" | "info" | "light" | "dark";
  size?: "tiny" | "small" | "normal" | "large";
  outline?: boolean;
  variant?: "normal" | "icon";
  onClick?: () => void;
};
const Button = ({
  variant = "normal",
  color = "primary",
  outline = false,
  size = "normal",
  onClick,
  children,
  ...otherProps
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const btn = "rounded-full font-[Roboto] flex justify-center items-center";
  const buttonColor = {
    primary: outline
      ? "text-light border border-primary bg-transparent hover:bg-primary-400 active:bg-primary-400 disabled:bg-primary-100"
      : `text-light bg-primary hover:bg-primary-400 active:bg-primary-400 disabled:bg-primary-100`,
    secondary: outline
      ? "text-light border border-secondary bg-transparent hover:bg-secondary-400 active:bg-secondary-400 disabled:bg-secondary-100"
      : "text-light bg-secondary hover:bg-secondary-400 active:bg-secondary-400 disabled:bg-secondary-100",
    ternary: outline
      ? "text-light border border-ternary bg-transparent hover:bg-ternary-400 active:bg-ternary-400 disabled:bg-ternary-100"
      : "text-light bg-ternary hover:bg-ternary-400 active:bg-ternary-400 disabled:bg-ternary-100",
    warning: outline
      ? "text-light border border-warning bg-transparent hover:bg-warning-400 active:bg-warning-400 disabled:bg-warning-100"
      : "text-light bg-warning hover:bg-warning-400 active:bg-warning-400 disabled:bg-warning-100",
    info: outline
      ? "text-light border border-info bg-transparent hover:bg-info-400 active:bg-info-400 disabled:bg-info-100"
      : "text-light bg-info hover:bg-info-400 active:bg-info-400 disabled:bg-info-100",
    light: outline
      ? "border border-light bg-transparent hover:bg-light-400 hover:text-dark active:bg-light-400 disabled:bg-light-100 text-light"
      : "bg-light text-dark hover:bg-light-400 active:bg-light-400 disabled:bg-light-100 disabled:text-dark-200",
    dark: outline
      ? "border border-dark bg-transparent hover:bg-dark-400 hover:text-light active:bg-dark-400 disabled:bg-dark-100 text-dark"
      : "bg-dark text-light hover:bg-dark-400 active:bg-dark-400 disabled:bg-dark-100 disabled:text-light-200",
  };

  const buttonSize = {
    tiny: "w-[63px] h-[20px] text-[14px] leading-[20px] py-[1px] px-[4px]",
    small: "w-[71px] h-[24px] leading-[24px] py-[3px] px-[8px]",
    normal: "w-[79px] h-[30px] leading-[30px] py-[6px] px-[12px]",
    large: "w-[103px] h-[42px] leading-[42px] py-[12px] px-[24px]",
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
      {children}
    </button>
  ) : (
    <svg
      width={iconSize[size]}
      height={iconSize[size]}
      cursor="pointer"
      viewBox="0 0 32 32"
      version="1.1"
      role="icon"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={iconColor[color]}
        d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z"
      ></path>
    </svg>
  );
};

export default Button;
