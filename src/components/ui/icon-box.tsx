import { cn } from "@/components/lib/utils"

const sizes = {
  sm: "h-8 w-8 rounded-lg p-1",
  md: "h-11 w-11 rounded-xl p-[6px]",
  lg: "h-[72px] w-[72px] rounded-2xl p-3",
}

interface IconBoxProps {
  size?: keyof typeof sizes
  children: React.ReactNode
  className?: string
}

export function IconBox({ size = "md", children, className }: IconBoxProps) {
  return (
    <div
      className={cn(
        "bg-foreground flex items-center justify-center text-background shrink-0",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  )
}
