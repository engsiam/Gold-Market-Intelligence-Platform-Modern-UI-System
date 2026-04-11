// "use client" ensures this component runs only on the client side
import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0F0B07',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1.5px solid #D4AF6A',
        }}
      >
        <div
          style={{
            fontFamily: 'serif',
            fontSize: 14,
            fontWeight: 700,
            color: '#D4AF6A',
            letterSpacing: '-0.5px',
          }}
        >
          বা
        </div>
      </div>
    ),
    { ...size }
  );
}
