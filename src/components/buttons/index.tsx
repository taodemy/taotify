import ImageButton from "./ImageButton";
import IconButton, { IconTypes } from "./IconButton";
import LinkButton, { LinkTypes } from "./LinkButton";
import NormalButton, { NormalButtonProps } from "./NormalButton";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "ternary"
  | "warning"
  | "info"
  | "light"
  | "dark";

type ButtonProps = {
  variant?: "normal" | "icon" | "image" | "link";
  iconTypes?: IconTypes;
  linkTypes?: LinkTypes;
  isActive?: boolean;
  src?: string;
} & React.ComponentProps<"button"> &
  NormalButtonProps;

const Button = ({
  variant = "normal",
  color = "primary",
  outline = false,
  size = "normal",
  onClick,
  children = "button",
  iconTypes = "close",
  linkTypes = "home",
  isActive,
  src,
  ...otherProps
}: ButtonProps) => {
  return {
    normal: (
      <NormalButton color={color} outline={outline} size={size} onClick={onClick} {...otherProps}>
        {children}
      </NormalButton>
    ),
    icon: (
      <IconButton<React.ComponentProps<"button">> size={size} onClick={onClick} {...otherProps} />
    ),
    image: src ? (
      <ImageButton<React.ComponentProps<"button">> src={src} onClick={onClick} />
    ) : (
      <span>invalid img url</span>
    ),
    link: (
      <LinkButton<React.ComponentProps<"button">>
        linkTypes={linkTypes}
        onClick={onClick}
        isActive={isActive}
      />
    ),
  }[variant];
};

export default Button;
