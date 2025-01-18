import clsx from 'clsx'
import type { FC, HTMLAttributes, PropsWithChildren } from 'react'

export const Form: FC<PropsWithChildren<HTMLAttributes<HTMLFormElement>>> = ({ children, className, ...props }) => (
  <form className={clsx('flex flex-col gap-4', className)} {...props}>
    {children}
  </form>
)
