import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Music Catalog - Tachera W Sasi'
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
          <div
            style={{
              fontSize: '64px',
              marginBottom: '20px',
            }}
          >
            🎵
          </div>
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
            Music Catalog
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#e5e5e5',
              margin: '0 0 24px 0',
              lineHeight: '1.4',
            }}
          >
            Original beats and compositions
          </p>
          <p
            style={{
              fontSize: '24px',
              color: '#a3a3a3',
            }}
          >
            by Tachera W Sasi
          </p>
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
          tacherasasi.dev/music
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}