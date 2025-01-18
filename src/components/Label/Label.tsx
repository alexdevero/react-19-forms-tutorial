import type { FC, LabelHTMLAttributes, PropsWithChildren } from 'react'

export const Label: FC<PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>> = ({ children, ...props }) => (
  <label className="text-sm font-medium" {...props}>
    {children}
  </label>
)
