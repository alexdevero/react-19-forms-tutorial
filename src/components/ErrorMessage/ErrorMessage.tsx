import { FC } from 'react'

type Props = {
  message: string
}

export const ErrorMessage: FC<Props> = ({ message }) => <p className="text-red-500 text-sm">{message}</p>
