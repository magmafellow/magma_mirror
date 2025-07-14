import React from 'react'

type Props = {} & React.ComponentProps<'svg'>
// use fill for controlling color

export default function IconDown({ className, ...props }: Props) {
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
        d="M16.4108 7.41094C17.2897 6.53204 18.7171 6.53204 19.596 7.41094L33.096 20.9109C33.9749 21.7898 33.9749 23.2172 33.096 24.0961C32.2171 24.975 30.7897 24.975 29.9108 24.0961L17.9999 12.1852L6.08896 24.0891C5.21006 24.968 3.78271 24.968 2.90381 24.0891C2.0249 23.2102 2.0249 21.7828 2.90381 20.9039L16.4038 7.40391L16.4108 7.41094Z"
        fill=""
      />
    </svg>
  )
}
