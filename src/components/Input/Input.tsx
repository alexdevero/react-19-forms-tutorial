import clsx from 'clsx'
import type { FC, HTMLAttributes } from 'react'

export const Input: FC<HTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
  <input className={clsx('border border-gray-300 rounded-md p-2', className)} {...props} />
)
