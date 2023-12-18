import { SVGProps } from 'react'

const LockIcon = (props: SVGProps<SVGSVGElement>) => {
  const { width, height, color } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 18}
      height={height || 19}
      fill="none"
      viewBox="0 0 18 19"
      {...props}
    >
      <path
        stroke={color || '#063966'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-6Z"
        clipRule="evenodd"
      />
      <path
        stroke={color || '#063966'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 8V4.889C4 2.74 6.239 1 9 1s5 1.741 5 3.889V8"
      />
    </svg>
  )
}

export default LockIcon
