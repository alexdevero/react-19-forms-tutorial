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
  const [errors, setErrors] = useState<ErrorsState>()

  const [optimisticState, addOptimisticState] = useOptimistic<string[]>([])

  const handleFormSubmit = async (previousState: FormSchema, formData: FormData) => {
    try {
      addOptimisticState(['Submitting form...'])

      const formDataEntries = Object.fromEntries(formData.entries())
      const result = formSchema.safeParse(formDataEntries)

      if (result.error) {
        addOptimisticState(['Form submission failed!'])

        setErrors(result.error.flatten().fieldErrors)

        // Keep the optimistic state for 1 second
        await new Promise((resolve) => setTimeout(resolve, 1000))

        return {
          firstName: '',
          lastName: '',
          note: '',
          inviteCode: '',
        }
      }

      const submitResult = await slowFormRequest(result.data)

      addOptimisticState(['Form submitted successfully!'])
      // Keep the optimistic state for 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return {
        firstName: submitResult.firstName,
        lastName: submitResult.lastName,
        note: submitResult.note,
        inviteCode: submitResult.inviteCode,
      }
    } catch (error) {
      addOptimisticState([`Form submission failed! ${JSON.stringify(error)}`])

      return {
        firstName: '',
        lastName: '',
        note: '',
        inviteCode: '',
      }
    }
  }

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    firstName: '',
    lastName: '',
    note: '',
    inviteCode: '',
  })

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

        <Button disabled={isPending}>Submit</Button>
      </Form>
    </div>
  )
}
