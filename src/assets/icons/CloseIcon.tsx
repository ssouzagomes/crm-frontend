import { SVGProps } from 'react'

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  const { width, height, color } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      viewBox="0 -960 960 960"
      {...props}
    >
      <path
        fill={color || '#000'}
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </svg>
  )
}

export default CloseIcon
