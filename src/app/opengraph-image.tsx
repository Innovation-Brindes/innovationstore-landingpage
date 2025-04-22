import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Innovation Store - Plataforma de Brindes Personalizados'
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
          fontSize: 128,
          background: 'linear-gradient(to bottom, #1e40af, #3b82f6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          color: 'white',
        }}
      >
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          <div style={{ 
            fontSize: '70px', 
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            Innovation Store
          </div>
          <div style={{ 
            fontSize: '36px',
            opacity: 0.8,
            textAlign: 'center',
            maxWidth: '90%',
            marginTop: '12px'
          }}>
            Sua plataforma completa para brindes personalizados
          </div>
        </div>
        <div style={{
          fontSize: '24px',
          marginTop: '40px',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          opacity: 0.9
        }}>
          <div style={{ 
            padding: '8px 16px',
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.2)'
          }}>Preços Online</div>
          <div style={{ 
            padding: '8px 16px',
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.2)'
          }}>+1000 Produtos</div>
          <div style={{ 
            padding: '8px 16px',
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.2)'
          }}>Entrega Rápida</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
