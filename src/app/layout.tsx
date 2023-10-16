import '@/styles/globals.css'
import { FC, PropsWithChildren } from 'react'
import fontClass from '@/styles/font'

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" className={fontClass}>
    <body className="flex flex-col items-center font-primary ">
      {children}
    </body>
  </html>
)

export default RootLayout
