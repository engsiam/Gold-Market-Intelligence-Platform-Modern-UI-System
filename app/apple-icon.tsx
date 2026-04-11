// "use client" ensures this component runs only on the client side
import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#0F0B07',
          borderRadius: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          border: '3px solid #D4AF6A',
        }}
      >
        <div
          style={{
            fontFamily: 'serif',
            fontSize: 64,
            fontWeight: 700,
            color: '#D4AF6A',
            lineHeight: 1,
          }}
        >
          বা
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: '#B59D86',
            letterSpacing: 4,
          }}
        >
          BAJUS
        </div>
      </div>
    ),
    { ...size }
  );
}
