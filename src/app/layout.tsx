import '@/styles/globals.css'
import { FC, PropsWithChildren } from 'react'
import fontClass from '@/styles/font'

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" className={fontClass}>
    <body className="font-primary md:max-w-7xl">
      {children}
    </body>
  </html>
)

export default RootLayout
