import ImageButton from "./ImageButton";
import IconButton, { IconTypes } from "./IconButton";
import LinkButton, { LinkTypes } from "./LinkButton";
import NormalButton, { NormalButtonProps } from "./Button";

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
  label = "button",
  iconTypes = "close",
  linkTypes = "home",
  isActive,
  src,
  ...otherProps
}: ButtonProps) => {
  return {
    normal: (
      <NormalButton
        color={color}
        outline={outline}
        size={size}
        onClick={onClick}
        label={label}
        {...otherProps}
      />
    ),
    icon: <IconButton size={size} onClick={onClick} {...otherProps} />,
    image: src ? (
      <ImageButton src={src} onClick={onClick} {...otherProps} />
    ) : (
      <span>invalid img url</span>
    ),
    link: (
      <LinkButton linkTypes={linkTypes} onClick={onClick} isActive={isActive} {...otherProps} />
    ),
  }[variant];
};

export default Button;
