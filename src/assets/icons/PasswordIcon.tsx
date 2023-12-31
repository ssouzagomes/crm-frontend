import { SVGProps } from 'react'

const PasswordIcon = (props: SVGProps<SVGSVGElement>) => {
  const { width, height, color } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fill={color || '#063966'}
        d="M2 19v-2h20v2H2Zm1.15-6.05-1.3-.75.85-1.5H1V9.2h1.7l-.85-1.45L3.15 7 4 8.45 4.85 7l1.3.75L5.3 9.2H7v1.5H5.3l.85 1.5-1.3.75-.85-1.5-.85 1.5Zm8 0-1.3-.75.85-1.5H9V9.2h1.7l-.85-1.45 1.3-.75.85 1.45.85-1.45 1.3.75-.85 1.45H15v1.5h-1.7l.85 1.5-1.3.75-.85-1.5-.85 1.5Zm8 0-1.3-.75.85-1.5H17V9.2h1.7l-.85-1.45 1.3-.75.85 1.45.85-1.45 1.3.75-.85 1.45H23v1.5h-1.7l.85 1.5-1.3.75-.85-1.5-.85 1.5Z"
      />
    </svg>
  )
}

export default PasswordIcon
