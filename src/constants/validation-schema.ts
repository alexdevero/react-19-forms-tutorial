import { z } from 'zod'

import { isValidInviteCode } from '@/utils/validators'

export const formSchema = z.object({
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string().nonempty('Last name is required'),
  email: z.string().email({ message: 'Invalid email address' }),
  note: z.string().nonempty('Note is required'),
  inviteCode: z
    .string()
    .nonempty('Invite code is required')
    .refine(isValidInviteCode, { message: 'Invalid invite code' }),
})
