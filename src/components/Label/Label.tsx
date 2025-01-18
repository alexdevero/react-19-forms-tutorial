import type { FC, HTMLAttributes, PropsWithChildren } from 'react'

export const Label: FC<PropsWithChildren<HTMLAttributes<HTMLLabelElement>>> = ({ children, ...props }) => (
  <label className="text-sm font-medium" {...props}>
    {children}
  </label>
)
