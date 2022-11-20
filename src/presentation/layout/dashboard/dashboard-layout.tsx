import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <div>NavigationBar</div>
      <div>{children}</div>
    </>
  )
}
