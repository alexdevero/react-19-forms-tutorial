import type { FC, PropsWithChildren, HTMLAttributes } from 'react'

export const FieldWrapper: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ children, ...props }) => (
  <div className="flex flex-col gap-2" {...props}>
    {children}
  </div>
)
