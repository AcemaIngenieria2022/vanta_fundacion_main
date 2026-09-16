"use client";

import Image from 'next/image';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8fafc',
      padding: '32px 20px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      
      {/* Luces de fondo con los colores del logo */}
      <div style={{
        position: 'absolute', top: '15%', left: '20%',
        width: '450px', height: '450px',
        background: 'radial-gradient(circle, rgba(244, 180, 26, 0.18) 0%, transparent 70%)',
        filter: 'blur(90px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', right: '20%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0, 112, 186, 0.15) 0%, transparent 70%)',
        filter: 'blur(100px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', top: '50%', right: '35%',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(44, 183, 116, 0.12) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none'
      }} />

      {/* Trama sutil de fondo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '36px 36px',
        pointerEvents: 'none'
      }} />

      {/* TARJETA PRINCIPAL */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '680px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '28px',
        padding: '64px 48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        boxShadow: '0 25px 50px -12px rgba(0, 112, 186, 0.08), 0 10px 20px -5px rgba(0, 0, 0, 0.04)'
      }}>

        {/* Barra multicolor superior */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '6px',
          background: 'linear-gradient(90deg, #f4b41a 0%, #e74c3c 33%, #2cb774 66%, #0070ba 100%)',
          borderTopLeftRadius: '28px',
          borderTopRightRadius: '28px'
        }} />

        {/* Logo */}
        <div style={{
          marginBottom: '28px',
          width: '100%',
          maxWidth: '460px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image 
            src="/imagenes/fundacion-logo.webp"
            alt="Vanta Fundación"
            width={460}
            height={160}
            priority
            unoptimized
            style={{ 
              objectFit: 'contain',
              width: '100%',
              height: 'auto'
            }}
          />
        </div>

        {/* Separador multicolor */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '24px'
        }}>
          <div style={{ width: '28px', height: '3px', borderRadius: '99px', background: '#f4b41a' }} />
          <div style={{ width: '10px', height: '3px', borderRadius: '99px', background: '#2cb774' }} />
          <div style={{ width: '28px', height: '3px', borderRadius: '99px', background: '#0070ba' }} />
        </div>

        {/* Texto limpio en azul corporativo */}
        <p style={{
          fontSize: '15px', 
          color: '#0070ba', 
          margin: 0, 
          letterSpacing: '4px', 
          textTransform: 'uppercase', 
          fontWeight: '700'
        }}>
          Sitio en construcción
        </p>

      </div>
    </main>
  );
}