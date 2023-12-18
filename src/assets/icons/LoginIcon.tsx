import { SVGProps } from 'react'

const LoginIcon = (props: SVGProps<SVGSVGElement>) => {
  const { width, height, color } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      fill="none"
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        fill={color || '#fff'}
        d="M6.417 4.083 5.6 4.9l1.517 1.517h-5.95v1.166h5.95L5.6 9.1l.817.817L9.332 7 6.416 4.083Zm5.25 7H7v1.167h4.666a1.17 1.17 0 0 0 1.167-1.167V2.917a1.17 1.17 0 0 0-1.167-1.167H7v1.167h4.666v8.166Z"
      />
    </svg>
  )
}

export default LoginIcon
