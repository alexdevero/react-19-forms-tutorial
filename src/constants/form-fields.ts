import type { FormSchema } from '@/types/form-types'

export const formFields: { label: string; name: keyof FormSchema }[] = [
  {
    label: 'First Name',
    name: 'firstName',
  },
  {
    label: 'Last Name',
    name: 'lastName',
  },
  {
    label: 'Note',
    name: 'note',
  },
  {
    label: 'Invite Code',
    name: 'inviteCode',
  },
]
