import { ImageResponse } from 'next/og'
import { org } from '@/data'

export const alt = 'Doon Welfare Foundation — Compassion for every living being'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #164632 0%, #1f5f43 55%, #2f8a63 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '18px',
              height: '18px',
              borderRadius: '9999px',
              background: '#e0912b',
            }}
          />
          <div style={{ fontSize: '30px', color: '#f0b458', letterSpacing: '2px' }}>
            {org.address.cityState.toUpperCase()}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: '88px',
            fontWeight: 800,
            lineHeight: 1.05,
            marginTop: '28px',
          }}
        >
          {org.name}
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: '40px',
            color: 'rgba(255,255,255,0.9)',
            marginTop: '28px',
            maxWidth: '900px',
          }}
        >
          Compassion for every living being — people, animals & nature.
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: '48px',
            fontSize: '30px',
            color: '#f0b458',
            fontWeight: 600,
          }}
        >
          doonwelfarefoundation.org
        </div>
      </div>
    ),
    { ...size },
  )
}
