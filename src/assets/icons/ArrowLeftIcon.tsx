import { SVGProps } from 'react'

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => {
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
        fill={color || '#595959'}
        d="m10 18-6-6 6-6 1.4 1.45L7.85 11H20v2H7.85l3.55 3.55L10 18Z"
      />
    </svg>
  )
}

export default ArrowLeftIcon
