import { Button as ShadcnuiButton } from "@/components/ui/button"

export interface ButtonProps {
  variant?: "secondary" | "destructive" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode

}

export const Button: React.FC<ButtonProps> = ({ variant, size, children }) => {
  return (
    <ShadcnuiButton variant={variant} size={size}>
      {children}
    </ShadcnuiButton> 
  )
}