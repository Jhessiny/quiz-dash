/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from 'react-hook-form'
import { TextField } from '~/presentation/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactFormSchema } from '~/presentation/validations'
import { useStyles } from './final-step-style'
import { useAddContactMutation } from '~/presentation/hooks/api-endpoints'
import { ContactModel } from '~/domain/models'
import { useAppSelector } from '~/store/store'
import { useParams } from 'react-router-dom'
import { useToastRequest } from '~/presentation/hooks/use-toast-request'
import { SuccessMessage } from '../success-message/success-message'

export const FinalStep = () => {
  const { classes } = useStyles()
  const [addContact, { isError, isSuccess }] = useAddContactMutation()
  useToastRequest({ isError })

  const { id } = useParams<{ id: string }>()
  const { answers } = useAppSelector((state) => state.quiz)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ContactModel>({ resolver: yupResolver(contactFormSchema), mode: 'onBlur' })

  const onSubmit = async (values: ContactModel) => {
    console.log(values)
    const payload = {
      ...values,
      answers,
      quizId: id!,
    }
    await addContact(payload)
  }

  return (
    <div>
      {isSuccess && <SuccessMessage />}
      {!isSuccess && (
        <>
          <h2 className={classes.title}>Contact info</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              placeholder='firstName'
              {...register('firstName')}
              helperText={errors.firstName?.message?.toString()}
              focus={true}
            />
            <TextField
              placeholder='lastName'
              {...register('lastName')}
              helperText={errors.lastName?.message?.toString()}
            />
            <TextField
              placeholder='email'
              {...register('email')}
              helperText={errors.email?.message?.toString()}
            />
            <TextField
              placeholder='phone'
              {...register('phone')}
              helperText={errors.phone?.message?.toString()}
            />
            <div className={classes.btnWrapper}>
              <button disabled={!isValid} className={classes.button}>
                send
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}
