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
        d="M19.5892 28.5891C18.7103 29.468 17.2829 29.468 16.404 28.5891L2.904 15.0891C2.0251 14.2101 2.0251 12.7828 2.904 11.9039C3.78291 11.025 5.21025 11.025 6.08916 11.9039L18.0001 23.8148L29.911 11.9109C30.7899 11.032 32.2173 11.032 33.0962 11.9109C33.9751 12.7898 33.9751 14.2172 33.0962 15.0961L19.5962 28.5961L19.5892 28.5891Z"
        fill=""
      />
    </svg>
  )
}
