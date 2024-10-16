type Props = React.SVGProps<SVGSVGElement>

export const SvgSearchIcon = (props: Props) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.063 19.938V.063h19.875v19.875H.063z"
        stroke="#71717A"
        strokeWidth={0.125}
      />
      <path
        d="M8.75 15a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zM13.17 13.17l4.33 4.33"
        stroke="#A1A1AA"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
