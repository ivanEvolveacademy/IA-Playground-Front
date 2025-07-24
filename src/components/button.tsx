import * as React from "react"
import styles from "./button.module.css"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const buttonClass = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(" ")

    return <button className={buttonClass} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button }
