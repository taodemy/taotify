import { IButtonProps } from "./button.d";
import React from "react";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "ternary"
  | "warning"
  | "info"
  | "light"
  | "dark";

export type Props = {
  color?: ButtonColor;
  size?: "tiny" | "small" | "normal" | "large";
  outline?: boolean;
  variant?: "normal" | "icon";
  label?: string;
  onClick?: () => void;
};

interface ButtonProps extends Props, React.ButtonHTMLAttributes<HTMLButtonElement> {}
