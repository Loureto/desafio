import { ComponentProps, forwardRef } from 'react'
import clsx from 'clsx'

const styles = {
  default:
    'flex w-full justify-center items-center rounded-md text-sm font-semibold transition duration-200 leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
  size: {
    sm: 'px-6 h-10 text-xs',
    md: 'px-6 h-11',
    lg: 'px-6 h-12'
  },
  variant: {
    outline: 'border border-indigo-500 text-indigo-500 hover:bg-indigo-500/20',
    solid: 'bg-indigo-500 text-white hover:bg-indigo-500/90',
    ghost: 'text-indigo-500 hover:bg-indigo-500/20'
  }
}

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'outline' | 'solid' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'solid', size = 'md', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          styles.default,
          styles.size[size],
          styles.variant[variant],
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
