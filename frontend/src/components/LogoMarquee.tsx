import { useI18n } from '../hooks/useI18n'

export function LogoMarquee() {
  const { lang } = useI18n();

  const metrics = [
    { 
      value: "100k+", 
      label: lang === 'en' ? "Records processed per hour" : "Registros processados por hora",
      glow: "rgba(56, 189, 248, 0.5)"
    },
    { 
      value: "98%", 
      label: lang === 'en' ? "AI Prediction Accuracy" : "Precisão Preventiva via IA",
      glow: "rgba(129, 140, 248, 0.5)"
    },
    { 
      value: "≤ 200ms", 
      label: lang === 'en' ? "WebSocket Sync Latency" : "Latência de Sincronização",
      glow: "rgba(56, 189, 248, 0.5)"
    },
    { 
      value: "Sub-metric", 
      label: lang === 'en' ? "GIS Spatial Precision" : "Precisão Espacial GIS",
      glow: "rgba(129, 140, 248, 0.5)"
    }
  ];

  return (
    <div style={{
      width: '100%',
      padding: '5rem 0',
      position: 'relative',
      zIndex: 2
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          background: 'rgba(2, 6, 23, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '24px',
          padding: '3rem',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}>
          {metrics.map((metric, idx) => (
            <div key={idx} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative'
            }}>
              <h3 style={{
                fontSize: '3.5rem',
                fontWeight: 800,
                background: `linear-gradient(135deg, #fff 0%, ${metric.glow} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem',
                fontFamily: "'Outfit', sans-serif",
                textShadow: `0 0 40px ${metric.glow.replace('0.5', '0.2')}`
              }}>
                {metric.value}
              </h3>
              <p style={{
                color: '#94a3b8',
                fontSize: '0.95rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {metric.label}
              </p>
              
              {/* Subtle divider except for last item */}
              {idx !== metrics.length - 1 && (
                <div style={{
                  position: 'absolute',
                  right: '-1rem',
                  top: '20%',
                  height: '60%',
                  width: '1px',
                  background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
                }} className="metric-divider" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .metric-divider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

