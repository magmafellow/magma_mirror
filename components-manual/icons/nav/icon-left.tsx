import React from 'react'

type Props = {} & React.ComponentProps<'svg'>
// use fill for controlling color

export default function IconLeft({ className, ...props }: Props) {
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
        d="M7.41104 19.5891C6.53213 18.7102 6.53213 17.2828 7.41104 16.4039L20.911 2.90391C21.7899 2.02501 23.2173 2.02501 24.0962 2.90391C24.9751 3.78282 24.9751 5.21016 24.0962 6.08907L12.1853 18L24.0892 29.9109C24.9681 30.7899 24.9681 32.2172 24.0892 33.0961C23.2103 33.975 21.7829 33.975 20.904 33.0961L7.40401 19.5961L7.41104 19.5891Z"
        fill=""
      />
    </svg>
  )
}
