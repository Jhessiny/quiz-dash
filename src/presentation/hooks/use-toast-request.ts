import { useEffect } from 'react'
import { toast, TypeOptions } from 'react-toastify'

type Props = { isError?: boolean; isSuccess?: boolean; isLoading?: boolean }

export const useToastRequest = ({ isError, isSuccess, isLoading }: Props) => {
  const trigger = (type: TypeOptions, message: string) => toast(message, { type })

  useEffect(() => {
    if (isError) {
      trigger('error', 'Oops! Something went wrong')
      return
    }
    if (isSuccess) {
      trigger('success', 'Request sent successfully')
      return
    }
    if (isLoading) {
      trigger('info', 'Loading...')
      return
    }
  }, [isError, isSuccess, isLoading])

  return { trigger }
}
