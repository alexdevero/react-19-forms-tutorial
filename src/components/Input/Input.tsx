import clsx from 'clsx'
import type { FC, InputHTMLAttributes } from 'react'

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
  <input className={clsx('border border-gray-300 rounded-md p-2', className)} {...props} />
)
