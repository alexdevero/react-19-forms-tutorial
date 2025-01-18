import clsx from 'clsx'
import type { FC, TextareaHTMLAttributes } from 'react'

export const Textarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className, ...props }) => (
  <textarea className={clsx('border border-gray-300 rounded-md p-2', className)} {...props} />
)
