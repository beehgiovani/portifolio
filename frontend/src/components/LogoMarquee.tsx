import { useI18n } from '../hooks/useI18n'

export function LogoMarquee() {
  const { lang } = useI18n();

  const metrics = [
    {
      value: "100k+",
      label: lang === 'en' ? "Records processed per hour" : "Registros processados por hora",
      glow: "metric-glow-blue"
    },
    {
      value: "98%",
      label: lang === 'en' ? "AI Prediction Accuracy" : "Precisão Preventiva via IA",
      glow: "metric-glow-purple"
    },
    {
      value: "≤ 200ms",
      label: lang === 'en' ? "WebSocket Sync Latency" : "Latência de Sincronização",
      glow: "metric-glow-blue"
    },
    {
      value: "Sub-metric",
      label: lang === 'en' ? "GIS Spatial Precision" : "Precisão Espacial GIS",
      glow: "metric-glow-purple"
    }
  ];

  return (
    <div className="metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {metrics.map((metric, idx) => (
            <div key={idx} className="metric-item">
              <h3 className={`metric-value ${metric.glow}`}>
                {metric.value}
              </h3>
              <p className="metric-label">
                {metric.label}
              </p>

              {/* Subtle divider except for last item */}
              {idx !== metrics.length - 1 && (
                <div className="metric-divider" />
              )}
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

