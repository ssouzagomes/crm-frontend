import { SVGProps } from 'react'

const LockPasswordIcon = (props: SVGProps<SVGSVGElement>) => {
  const { width, height, color } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      fill="none"
      {...props}
    >
      <path
        fill={color || '#063966'}
        d="M12 1C8.636 1 6 3.636 6 7v1c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2V7c0-3.364-2.636-6-6-6Zm0 2c2.243 0 4 1.757 4 4v1H8V7c0-2.243 1.757-4 4-4Zm-6 7h12v10H6V10Zm2 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      />
    </svg>
  )
}

export default LockPasswordIcon
