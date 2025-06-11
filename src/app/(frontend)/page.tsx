import Image from 'next/image'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const payloadConfig = await config

  return (
    <div className="home">
      <div className="content">
        <Image
          style={{ position: 'absolute' }}
          alt="Logo"
          src="/logo.jpg"
          width={960}
          height={540}
        />
        <h1>Greengage</h1>
      </div>
      <div className="footer">
        <a
          className="admin"
          href={payloadConfig.routes.admin}
          rel="noopener noreferrer"
          target="_blank"
        >
          Go to admin panel
        </a>
      </div>
    </div>
  )
}
