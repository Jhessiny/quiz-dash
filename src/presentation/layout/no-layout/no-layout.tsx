import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const NoLayout = ({ children }: Props) => {
  return <>{children}</>
}
