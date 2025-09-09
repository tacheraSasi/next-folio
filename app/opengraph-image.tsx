import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Tachera W Sasi - Full Stack Developer & CEO'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #171717 0%, #262626 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '900px',
            padding: '40px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #10b981, #059669)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: '0 0 24px 0',
              lineHeight: '1.1',
            }}
          >
            Tachera W Sasi
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#e5e5e5',
              margin: '0 0 24px 0',
              lineHeight: '1.4',
            }}
          >
            Full Stack Developer & CEO at ekilie
          </p>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              fontSize: '24px',
              color: '#a3a3a3',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <span>Golang</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>React</span>
            <span>•</span>
            <span>Next.js</span>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            fontSize: '18px',
            color: '#71717a',
          }}
        >
          tacherasasi.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}