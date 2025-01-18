import { FormSchema } from '@/types/form-types'

export const slowFormRequest = async (data: FormSchema) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return data
}
