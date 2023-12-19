import { SVGProps } from 'react'

const KeyIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7 5c-3.845 0-7 3.155-7 7s3.155 7 7 7c2.775 0 5.09-1.685 6.271-4H16v3h6v-3h2V9H13.287C12.173 6.676 9.84 5 7 5Zm0 2c2.28 0 4.092 1.421 4.756 3.328l.232.672H22v2h-2v3h-2v-3h-5.982l-.248.635C11.01 15.575 9.164 17 7 17c-2.755 0-5-2.245-5-5s2.245-5 5-5Zm0 2c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3Zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1Z"
      />
    </svg>
  )
}

export default KeyIcon
