/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from 'react-hook-form'
import { TextField } from '~/presentation/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactFormSchema } from '~/presentation/validations'
import { useStyles } from './final-step-style'

export const FinalStep = () => {
  const { classes } = useStyles()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactFormSchema), mode: 'onBlur' })

  const onSubmit = (values: unknown) => {
    console.log(values)
  }

  return (
    <div>
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
          <button className={classes.button}>send</button>
        </div>
      </form>
    </div>
  )
}
