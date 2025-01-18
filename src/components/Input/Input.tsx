import clsx from 'clsx'
import type { FC, InputHTMLAttributes } from 'react'

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
  <input className={clsx('border border-gray-700 bg-gray-800 rounded-sm p-1', className)} {...props} />
)
