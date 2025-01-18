'use client'

import { useOptimistic, useTransition, type FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import type { FormSchema } from '@/types/form-types'
import { formSchema } from '@/constants/validation-schema'
import { formFields } from '@/constants/form-fields'

import { Button } from '../Button/Button'
import { FieldWrapper } from '../FieldWrapper/FieldWrapper'
import { Form } from '../Form/Form'
import { Input } from '../Input/Input'
import { Label } from '../Label/Label'
import { slowFormRequest } from '@/utils/slow-form-request'

export const HookForm: FC = () => {
  const [isPending, startTransition] = useTransition()
  const [optimisticState, addOptimisticState] = useOptimistic<string>('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: {
      firstName: '',
      lastName: '',
      note: '',
      inviteCode: '',
    },
    resolver: zodResolver(formSchema),
  })

  const handleFormSubmit = (data: FormSchema) => {
    startTransition(async () => {
      try {
        addOptimisticState('Submitting form...')

        await slowFormRequest(data)

        addOptimisticState('Form submitted successfully!')
        // Keep the optimistic state for 1 second
        await new Promise((resolve) => setTimeout(resolve, 1000))

        reset()
      } catch (error) {
        addOptimisticState(`Form submission failed! ${JSON.stringify(error)}`)
      }
    })
  }

  return (
    <div className="min-w-96">
      <h1 className="text-2xl font-bold text-center mb-4">Hook Form</h1>

      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        {formFields.map((field) => (
          <FieldWrapper key={field.name} errorMessage={errors[field.name]?.message}>
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input {...register(field.name)} />
          </FieldWrapper>
        ))}

        {optimisticState && <div>{optimisticState}</div>}

        <Button disabled={isPending}>Submit</Button>
      </Form>
    </div>
  )
}
