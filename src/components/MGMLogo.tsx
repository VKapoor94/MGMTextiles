import React from 'react';

const MGMLogo: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    {/* Left gold wave/curve SVG */}
    <svg width="38" height="60" viewBox="0 0 38 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <defs>
        <linearGradient id="gold-gradient" x1="0" y1="0" x2="38" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B89B5E" />
          <stop offset="1" stopColor="#E6C88B" />
        </linearGradient>
      </defs>
      <path d="M38 0 Q10 10 10 30 Q10 50 38 60 L0 60 L0 0 Z" fill="url(#gold-gradient)" />
      <circle cx="8" cy="8" r="2" fill="#E6C88B" />
      <circle cx="12" cy="52" r="1.5" fill="#E6C88B" />
      <circle cx="6" cy="30" r="1.2" fill="#E6C88B" />
    </svg>
    {/* Text and swoosh */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.08em', color: '#222', fontFamily: 'serif' }}>MGM TEXTILES</span>
        {/* <span style={{ fontSize: '1rem', color: '#222', fontFamily: 'serif', fontWeight: 400 }}>
          Manufacturers of Industrial Textile Fabric
        </span> */}
        <img
          src="/images/logo2.png"
          alt="MGM Logo 2"
          style={{ marginTop: 8, width: 80, height: 'auto', display: 'block' }}
        />
      </div>
          </div>
  </div>
);

export default MGMLogo; 