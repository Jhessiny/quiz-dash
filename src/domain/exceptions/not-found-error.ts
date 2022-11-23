import { DomainException } from './domain-exception'

export class NotFoundError implements DomainException {
  type = 'NotFoundError'
  message = 'not found'

  // eslint-disable-next-line n/handle-callback-err
  constructor(public error?: any) {}
}
