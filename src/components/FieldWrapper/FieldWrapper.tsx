import type { FC, PropsWithChildren } from 'react'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'

type Props = {
  errorMessage?: string
}

export const FieldWrapper: FC<PropsWithChildren<Props>> = ({ children, errorMessage, ...props }) => (
  <div className="flex flex-col gap-2" {...props}>
    {children}
    {errorMessage && <ErrorMessage message={errorMessage} />}
  </div>
)
