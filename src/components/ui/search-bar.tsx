"use client"

import { useState, useRef } from "react"
import { cn } from "@/components/lib/utils"

interface SearchBarProps {
  defaultValue?: string
  placeholder?: string
  onClear?: () => void
  onChange?: (value: string) => void
  onFocus?: () => void
  className?: string
  active?: boolean
}

export function SearchBar({
  defaultValue,
  placeholder = "Search",
  onClear,
  onChange,
  onFocus,
  className,
  active: controlledActive,
}: SearchBarProps) {
  const [internalActive, setInternalActive] = useState(!!defaultValue)
  const [value, setValue] = useState(defaultValue ?? "")
  const inputRef = useRef<HTMLInputElement>(null)
  const active = controlledActive !== undefined ? controlledActive : internalActive

  const handleClick = () => {
    if (!active) {
      setInternalActive(true)
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }

  const handleClear = () => {
    setValue("")
    onClear?.()
    inputRef.current?.focus()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange?.(e.target.value)
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "flex items-center flex-1 h-9 rounded-full bg-secondary gap-2 px-3 overflow-hidden cursor-text",
        !active && "justify-center",
        className
      )}
    >
      <span className="material-icons-round text-muted-foreground shrink-0 text-[16px]">
        search
      </span>
      {active ? (
        <>
          <input
            ref={inputRef}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={() => { if (!value) setInternalActive(false) }}
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground min-w-0"
          />
          {value.length > 0 && (
            <button
              onClick={handleClear}
              className="h-4 w-4 rounded-full bg-muted-foreground/50 flex items-center justify-center shrink-0"
            >
              <span className="text-[9px] text-background font-bold leading-none">✕</span>
            </button>
          )}
        </>
      ) : (
        <span className="text-sm text-muted-foreground">{placeholder}</span>
      )}
    </div>
  )
}
