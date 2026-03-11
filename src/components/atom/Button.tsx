import type { ReactNode } from "react";
import type React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger";
type ButtonSize = "sm" | "md" | "lg";
type IconsPosistion = "right" | "left";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icons?: ReactNode;
  iconsPosition?: IconsPosistion;
}

const baseStyle =
  "flex flex-row items-center justify-center gap-2 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offseet-2";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-500",
  secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400",
  danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  outline:
    "bg-white text-gray-900 hover:bg-indigo-600 hover:text-white focus:ring-indigo-500",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled,
  icons,
  iconsPosition = "left",
  ...props
}: ButtonProps) {
  const classes = `
    ${baseStyle}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;
  return (
    <button className={classes} disabled={disabled} {...props}>
      {icons && iconsPosition == "left" && icons}
      <span>{children}</span>
      {icons && iconsPosition == "right" && icons}
    </button>
  );
}
