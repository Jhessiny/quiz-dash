import { DomainException } from './domain-exception'

export class UnexpectedError implements DomainException {
  type = 'UnexpectedError'
  message = 'Unexpected error'

  // eslint-disable-next-line n/handle-callback-err
  constructor(public error?: any) {}
}
