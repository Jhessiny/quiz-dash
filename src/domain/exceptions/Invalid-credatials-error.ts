import { DomainException } from './domain-exception'

export class InvalidCredentialsError implements DomainException {
  type = 'InvalidCredentialsError'
  message = 'not found'

  // eslint-disable-next-line n/handle-callback-err
  constructor(public error?: any) {}
}
