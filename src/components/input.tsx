import * as React from "react"
import styles from "./input.module.css"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  const inputClass = [styles.input, className].filter(Boolean).join(" ")
  return <input type={type} className={inputClass} ref={ref} {...props} />
})
Input.displayName = "Input"

export { Input }
