import clsx from 'clsx'
import { ComponentProps, forwardRef, ReactNode } from 'react'
import { BiSolidInfoCircle } from 'react-icons/bi'

export const InputGroup = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('relative flex flex-col', className)}
        {...props}
      />
    )
  }
)

InputGroup.displayName = 'InputGroup'

type LabelProps = ComponentProps<'label'> & {
  text: string
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ text = '', className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={clsx(
          'mb-2 block text-sm font-medium leading-6 text-white',
          className
        )}
        {...props}
      >
        {text}
      </label>
    )
  }
)

Label.displayName = 'Label'

type InputProps = ComponentProps<'input'> & {
  startContent?: ReactNode
  endContent?: ReactNode
  errorMessage?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { startContent, endContent, errorMessage = '', className, ...props },
    ref
  ) => {
    return (
      <>
        <div className="relative flex items-center">
          {startContent && (
            <div className="absolute left-3">{startContent}</div>
          )}
          <input
            ref={ref}
            className={clsx(
              'block h-12 w-full rounded-md border-0 bg-white/5 px-3 text-white shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed sm:text-sm sm:leading-6',
              startContent && 'pl-8',
              endContent && 'pr-8',
              errorMessage && 'ring-2 ring-red-500 focus:ring-red-500',
              className
            )}
            {...props}
          />
          {endContent && <div className="absolute right-3">{endContent}</div>}
          {!endContent && errorMessage && (
            <div className="absolute right-3 text-red-500">
              <BiSolidInfoCircle />
            </div>
          )}
        </div>
        {errorMessage && (
          <span className="mt-1 text-sm text-red-500">{errorMessage}</span>
        )}
      </>
    )
  }
)

Input.displayName = 'Input'
