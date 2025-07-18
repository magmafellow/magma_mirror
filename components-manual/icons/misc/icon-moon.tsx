import React from 'react'

type Props = {} & React.ComponentProps<'svg'>
// use fill for controlling color

export default function IconMoon({ className, ...props }: Props) {
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
      <g clipPath="url(#clip0_2084_52)">
        <path
          d="M21 6C21.51 6 22.02 6.03 22.515 6.105C19.65 9.345 18 13.575 18 18C18 22.425 19.65 26.655 22.515 29.895C22.02 29.97 21.51 30 21 30C14.385 30 9 24.615 9 18C9 11.385 14.385 6 21 6ZM21 3C12.72 3 6 9.72 6 18C6 26.28 12.72 33 21 33C23.73 33 26.295 32.25 28.5 30.975C24.015 28.38 21 23.55 21 18C21 12.45 24.015 7.62 28.5 5.025C26.2219 3.70132 23.6347 3.00276 21 3Z"
          fill=""
        />
      </g>
      <defs>
        <clipPath id="clip0_2084_52">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
