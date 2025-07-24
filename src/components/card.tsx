import * as React from "react"
import styles from "./card.module.css"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const cardClass = [styles.card, className].filter(Boolean).join(" ")
  return <div ref={ref} className={cardClass} {...props} />
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const headerClass = [styles.cardHeader, className].filter(Boolean).join(" ")
    return <div ref={ref} className={headerClass} {...props} />
  },
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    const titleClass = [styles.cardTitle, className].filter(Boolean).join(" ")
    return <h3 ref={ref} className={titleClass} {...props} />
  },
)
CardTitle.displayName = "CardTitle"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const contentClass = [styles.cardContent, className].filter(Boolean).join(" ")
    return <div ref={ref} className={contentClass} {...props} />
  },
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const footerClass = [styles.cardFooter, className].filter(Boolean).join(" ")
    return <div ref={ref} className={footerClass} {...props} />
  },
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardContent }
