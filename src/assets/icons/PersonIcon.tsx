import { SVGProps } from 'react'

const PersonIcon = (props: SVGProps<SVGSVGElement>) => {
  const { width, height, color } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 18}
      height={height || 20}
      fill="none"
      viewBox="0 0 18 20"
      {...props}
    >
      <path
        fill={color || '#063966'}
        d="M9 0C6.243 0 4 2.361 4 5.263c0 2.902 2.243 5.263 5 5.263s5-2.36 5-5.263C14 2.361 11.757 0 9 0Zm0 8.421c-1.654 0-3-1.417-3-3.158 0-1.74 1.346-3.158 3-3.158s3 1.417 3 3.158c0 1.741-1.346 3.158-3 3.158ZM18 20v-1.053c0-4.062-3.141-7.368-7-7.368H7c-3.86 0-7 3.306-7 7.368V20h2v-1.053c0-2.902 2.243-5.263 5-5.263h4c2.757 0 5 2.361 5 5.263V20h2Z"
      />
    </svg>
  )
}

export default PersonIcon
