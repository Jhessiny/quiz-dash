import { Response } from '~/domain/common/types'

export const queryAdapter = async <T>(promise: Promise<Response<T>>) => {
  const response = await promise

  if (response.isSuccess()) {
    return {
      data: response.value,
    }
  }

  return {
    error: response.value,
  }
}
