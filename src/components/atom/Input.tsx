import type React from "react";

type BaseProps = {
  variant: "input" | "textarea";
  name: string;
  className?: string;
  label?: string;
  error?: string;
};

type InputProps =
  | (BaseProps &
      React.InputHTMLAttributes<HTMLInputElement> & { variant?: "input" })
  | (BaseProps &
      React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
        variant?: "textarea";
      });

export default function Input({
  variant,
  className,
  label,
  error,
  ...props
}: InputProps) {
  const baseStyle =
    "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500";
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-lg font-medium capitalize">{label}</label>
      )}

      {variant == "textarea" ? (
        <textarea
          className={`${baseStyle} ${error ? "border-red-500" : "border-gray-300"} ${className}`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        ></textarea>
      ) : (
        <input
          className={`${baseStyle} {error ? "border-red-500" : border-gray-300" } ${className}`}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
