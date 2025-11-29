'use client';

import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';

const PHONE_NUMBER = "+1 (346) 522 3259";
const PHONE_LINK = "tel:+13465223259";
const PRIMARY_COLOR = '#B2904D';
// URL constante para el logo
const HOME_URL = "https://manuelsolis.com"; 

export default function LandingPage() {
  // Mantenemos el estado 'videoExpanded' para la animación de entrada
  const [videoExpanded, setVideoExpanded] = useState(false);

  useEffect(() => {
    // Efecto para iniciar la animación de entrada
    const timer = setTimeout(() => {
      setVideoExpanded(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#002342',
      overflow: 'hidden'
    }}>
      
      {/* HEADER (Solo Logo) */}
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
          {/* Logo con estilos para asegurar que no se vea como un botón */}
          <a 
            href={HOME_URL}
            style={{ 
              outline: 'none', 
              border: 'none',
              boxShadow: 'none'
            }}
          > 
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
          backgroundColor: PRIMARY_COLOR,
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
        paddingTop: '120px', // Espacio para el header fijo
        paddingLeft: '16px',
        paddingRight: '16px',
        minHeight: '100vh'
      }}>
        
        {/* TEXTO AGREGADO (Encabezado Decorado) */}
        <h1 style={{
          textAlign: 'center',
          marginTop: '20px',
          marginBottom: '30px',
          maxWidth: '90%',
          // Estilos de decoración dorada
          background: 'linear-gradient(to bottom, #ffffff 0%, #B2904D 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))',
          fontSize: '28px',
          fontWeight: '800',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          lineHeight: '1.2'
        }}>
          Manuel Solis Abogados en inmigración y accidentes
        </h1>

        {/* CONTENEDOR VIDEO CON IFRAME DE MEDIADELIVERY */}
        {/* Mantenemos la animación de entrada para el video */}
        <div style={{
          width: '100%',
          maxWidth: '1150px',
          marginBottom: '30px',
          opacity: videoExpanded ? 1 : 0,
          transform: videoExpanded ? 'scale(1)' : 'scale(0.95)', 
          transition: 'all 1s ease-out',
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
            {/* IFRAME DE VIDEO (YA CORREGIDO) */}
            <iframe 
              src="https://iframe.mediadelivery.net/embed/547379/d71b4719-6d35-48dd-a046-601c86c5c77d?autoplay=true&loop=true" 
              loading="lazy" 
              style={{
                border: '0',
                position: 'absolute',
                top: 0,
                left: 0, 
                height: '100%', 
                width: '100%' 
              }} 
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* BOTONES (RESTAURADOS AL ESTADO ANTERIOR) */}
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