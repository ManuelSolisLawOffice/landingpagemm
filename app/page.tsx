'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Phone, Volume2, VolumeX, ArrowRight, ShieldCheck } from 'lucide-react';

const PHONE_NUMBER = "+1 (346) 522 3259";
const PHONE_LINK = "tel:+13465223259";
const PRIMARY_COLOR = '#B2904D';

export default function LandingPage() {
  const [isMuted, setIsMuted] = useState(true);
  const [videoExpanded, setVideoExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoExpanded(true);
      if (videoRef.current) {
        videoRef.current.muted = isMuted;
        videoRef.current.play().catch((error) => {
          console.log('Autoplay prevenido:', error);
        });
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#002342',
      overflow: 'hidden'
    }}>
      
      {/* HEADER */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: PRIMARY_COLOR,
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }}>
        <div style={{ 
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '20px 16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <a href="/">
            <img
              src="/logo-manuel-solis.png"
              alt="Logo Manuel Solis"
              style={{
                height: '56px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}
            />
          </a>
        </div>
      </header>

      {/* FONDO DECORATIVO */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          top: '80px',
          right: '-10%',
          width: '300px',
          height: '300px',
          backgroundColor: '#B2904D',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.2
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '400px',
          height: '400px',
          backgroundColor: '#10b981',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.1
        }}></div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '120px',
        paddingLeft: '16px',
        paddingRight: '16px',
        minHeight: '100vh'
      }}>
        
        {/* CONTENEDOR VIDEO */}
        <div style={{
          width: '100%',
          maxWidth: '1150px',
          marginBottom: '30px',
          opacity: videoExpanded ? 1 : 0,
          transform: videoExpanded ? 'scale(1) perspective(800px) rotateX(5deg)' : 'scale(0.95)',
          transition: 'all 1s ease-out',
          transformStyle: 'preserve-3d'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '56.25%', // 16:9 aspect ratio
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: '#000',
            boxShadow: '0 30px 60px rgba(0,0,0,0.8), 0 0 0 2px rgba(178,144,77,0.5), 0 0 80px rgba(178,144,77,0.3)'
          }}>
            <video
              ref={videoRef}
              playsInline
              loop
              muted={isMuted}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                backgroundColor: '#000'
              }}
              poster="/poster-image.jpg"
            >
              <source src="/video-landing.mp4" type="video/mp4" />
            </video>

            {/* Botón Mute */}
            <button
              onClick={handleToggleMute}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                padding: '12px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                cursor: 'pointer',
                zIndex: 50,
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = PRIMARY_COLOR}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>

        {/* BOTONES */}
        <div style={{
          width: '100%',
          maxWidth: '850px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '20px',
          opacity: videoExpanded ? 1 : 0,
          transform: videoExpanded ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease-out 0.5s'
        }}>
          
          {/* BOTÓN LLAMADA CIRCULAR */}
          <a 
            href={PHONE_LINK}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              gap: '12px'
            }}
          >
            {/* Anillo pulsante */}
            <div className="animate-pulse-ring" style={{
              position: 'absolute',
              top: '-6px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              backgroundColor: 'rgba(16, 185, 129, 0.3)'
            }}></div>
            
            {/* Círculo del botón */}
            <div style={{
              position: 'relative',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.5)',
              border: '3px solid rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Phone style={{ color: 'white', width: '32px', height: '32px' }} />
            </div>
            
            {/* Texto debajo */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'rgba(255,255,255,0.7)'
              }}>Llámanos</span>
              <span style={{
                fontSize: '16px',
                fontWeight: '900',
                color: 'white',
                letterSpacing: '-0.5px'
              }}>{PHONE_NUMBER}</span>
            </div>
          </a>

          {/* BOTÓN OPCIONES LEGALES CIRCULAR */}
          <button 
            onClick={() => console.log('Opciones legales')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {/* Círculo del botón */}
            <div className="glass-gold" style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '3px solid rgba(178, 144, 77, 0.5)',
              boxShadow: '0 10px 30px rgba(178, 144, 77, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.backgroundColor = 'rgba(178, 144, 77, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = 'rgba(178, 144, 77, 0.25)';
            }}
            >
              <ShieldCheck style={{ width: '32px', height: '32px', color: '#B2904D' }} />
            </div>
            
            {/* Texto debajo */}
            <span style={{
              fontSize: '11px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'rgba(255,255,255,0.7)',
              textAlign: 'center',
              maxWidth: '120px'
            }}>
              Opciones Legales
            </span>
          </button>

        </div>
      </div>

    </div>
  );
}