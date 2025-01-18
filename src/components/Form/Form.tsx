import clsx from 'clsx'
import type { FC, PropsWithChildren, FormHTMLAttributes } from 'react'

export const Form: FC<PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>> = ({ children, className, ...props }) => (
  <form className={clsx('flex flex-col gap-4', className)} {...props}>
    {children}
  </form>
)
