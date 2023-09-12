import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  mode?: "primary" | "secondary" | "link" | "outline";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  label?: string;
  name?: string;
  icon?: boolean;
  showDesktop?: boolean;
  onclick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  mode = "primary",
  size = "medium",
  label,
  name,
  icon = false,
  children,
  onclick,
  showDesktop = false,
  ...props
}: ButtonProps) => {
  const showArrow = icon && !showDesktop;

  return (
    <button
      type="button"
      onClick={onclick}
      name={name}
      className={styles.storybookbutton}
      {...props}
    >
      <div>
        {label}
        {showArrow && (
          <svg
            width="24"
            className={["icon", "button-icon"].join(" ")}
            height="24"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.7844 8.53459L11.0344 15.2846C10.891 15.4232 10.6994 15.5007 10.5 15.5007C10.3006 15.5007 10.109 15.4232 9.96563 15.2846C9.82479 15.1424 9.74578 14.9504 9.74578 14.7502C9.74578 14.5501 9.82479 14.358 9.96563 14.2158L15.4406 8.75022H0.75C0.551088 8.75022 0.360322 8.6712 0.21967 8.53055C0.0790178 8.38989 0 8.19913 0 8.00022C0 7.8013 0.0790178 7.61054 0.21967 7.46989C0.360322 7.32923 0.551088 7.25022 0.75 7.25022H15.4406L9.96563 1.78459C9.84603 1.63887 9.78491 1.45387 9.79416 1.26558C9.8034 1.07729 9.88236 0.899174 10.0157 0.765873C10.149 0.632572 10.3271 0.553619 10.5154 0.544372C10.7037 0.535124 10.8887 0.596243 11.0344 0.715841L17.7844 7.46584C17.9252 7.60804 18.0042 7.80008 18.0042 8.00022C18.0042 8.20035 17.9252 8.3924 17.7844 8.53459Z"
              fill="#E52044"
            />
          </svg>
        )}
      </div>
      {children}
    </button>
  );
};
