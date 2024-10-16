type Props = React.SVGProps<SVGSVGElement>

export const SvgReportIcon = (props: Props) => {
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
        d="M2.625 11.367A7.5 7.5 0 017.5 2.93v5.625l-4.875 2.812z"
        stroke="#FFFFFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10.033V2.5a7.5 7.5 0 11-6.467 11.3L10 10.033z"
        stroke="#FFFFFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
