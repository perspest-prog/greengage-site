import { Baskervville } from 'next/font/google'

import './styles.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const baskervville = Baskervville({
  weight: '400',
  subsets: ['latin'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={baskervville.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
