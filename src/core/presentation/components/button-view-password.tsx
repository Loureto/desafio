import { ComponentProps } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

type Props = ComponentProps<'button'> & {
  isVisible: boolean
  onClick: () => void
}

export const ButtonViewPassword = ({
  isVisible,
  onClick,
  ...props
}: Props): JSX.Element => {
  return (
    <button
      type="button"
      className="focus-within: flex"
      onClick={onClick}
      {...props}
    >
      {isVisible ? (
        <FaEyeSlash className="pointer-events-none size-5 text-zinc-400" />
      ) : (
        <FaEye className="pointer-events-none size-5 text-zinc-400" />
      )}
    </button>
  )
}
