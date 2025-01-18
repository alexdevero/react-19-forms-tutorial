'use client'

import { useActionState, useOptimistic, useState, type FC } from 'react'

import { formSchema } from '@/constants/validation-schema'
import { formFields } from '@/constants/form-fields'
import { FormSchema } from '@/types/form-types'

import { FieldWrapper } from '../FieldWrapper/FieldWrapper'
import { Form } from '../Form/Form'
import { Input } from '../Input/Input'
import { Label } from '../Label/Label'
import { Button } from '../Button/Button'
import { slowFormRequest } from '@/utils/slow-form-request'

type ErrorsState = Partial<{
  [key in keyof FormSchema]: string[]
}>

export const ReactForm: FC = () => {
  const [errors, setErrors] = useState<ErrorsState | null>(null)

  const [optimisticState, addOptimisticState] = useOptimistic<string[]>([])

  const handleFormSubmit = async (previousState: string, formData: FormData) => {
    try {
      setErrors(null)

      addOptimisticState(['Submitting form...'])

      const formDataEntries = Object.fromEntries(formData.entries())
      const result = formSchema.safeParse(formDataEntries)

      if (result.error) {
        setErrors(result.error.flatten().fieldErrors)

        return 'Form submission failed!'
      }

      await slowFormRequest(result.data)

      return 'Form submitted successfully!'
    } catch (error) {
      return `Form submission failed! ${JSON.stringify(error)}`
    }
  }

  const [state, formAction, isPending] = useActionState(handleFormSubmit, '')

  return (
    <div className="min-w-96">
      <h1 className="text-2xl font-bold text-center mb-4">React Form</h1>

      <Form action={formAction}>
        {formFields.map((field) => (
          <FieldWrapper key={field.name} errorMessage={errors?.[field.name]?.[0]}>
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input name={field.name} />
          </FieldWrapper>
        ))}

        {optimisticState.map((message) => (
          <div key={message}>{message}</div>
        ))}

        {state && <div>{state}</div>}

        <Button disabled={isPending}>Submit</Button>
      </Form>
    </div>
  )
}
