import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

export const Button: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({ children, ...props }) => (
  <button className="bg-blue-500 text-white px-4 py-2 rounded-sm" type="submit" {...props}>
    {children}
  </button>
)
