import React from 'react'

type Props = {} & React.ComponentProps<'svg'>
// use fill for controlling color

export default function IconSun({ className, ...props }: Props) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={className}
    >
      <path
        d="M18 3.375V6.75M18 29.25V32.625M28.3416 7.65844L25.9552 10.0448M10.0448 25.9552L7.65844 28.3416M32.625 18H29.25M6.75 18H3.375M28.3416 28.3416L25.9552 25.9552M10.0448 10.0448L7.65844 7.65844"
        stroke=""
        strokeWidth="2.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M18 23.625C21.1066 23.625 23.625 21.1066 23.625 18C23.625 14.8934 21.1066 12.375 18 12.375C14.8934 12.375 12.375 14.8934 12.375 18C12.375 21.1066 14.8934 23.625 18 23.625Z"
        stroke=""
        strokeWidth="2.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  )
}
