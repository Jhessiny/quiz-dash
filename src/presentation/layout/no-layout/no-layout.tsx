import { ReactNode, Suspense } from 'react'
import { Spinner } from '~/presentation/components'

type Props = {
  children: ReactNode
}

export const NoLayout = ({ children }: Props) => {
  return (
    <>
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </>
  )
}
