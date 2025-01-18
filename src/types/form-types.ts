import { z } from 'zod'

import { formSchema } from '@/constants/validation-schema'

export type FormSchema = z.infer<typeof formSchema>
