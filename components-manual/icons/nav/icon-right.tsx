import React from 'react'

type Props = {} & React.ComponentProps<'svg'>
// use fill for controlling color

export default function IconRight({ className, ...props }: Props) {
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
        d="M28.589 16.4109C29.4679 17.2898 29.4679 18.7172 28.589 19.5961L15.089 33.0961C14.2101 33.975 12.7827 33.975 11.9038 33.0961C11.0249 32.2172 11.0249 30.7898 11.9038 29.9109L23.8147 18L11.9108 6.08906C11.0319 5.21015 11.0319 3.78281 11.9108 2.9039C12.7897 2.02499 14.2171 2.02499 15.096 2.9039L28.596 16.4039L28.589 16.4109Z"
        fill=""
      />
    </svg>
  )
}
