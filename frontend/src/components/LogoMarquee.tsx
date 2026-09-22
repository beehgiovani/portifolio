import { useI18n } from '../hooks/useI18n'

export function LogoMarquee() {
  const { lang } = useI18n();

  const metrics = [
    {
      value: "APIs",
      label: lang === 'en' ? "REST integrations and data flows" : "Integracoes REST e fluxos de dados",
      glow: "metric-glow-blue"
    },
    {
      value: "AI",
      label: lang === 'en' ? "Validation and automation studies" : "Estudos de validacao e automacao",
      glow: "metric-glow-purple"
    },
    {
      value: "Sync",
      label: lang === 'en' ? "Realtime update experiments" : "Experimentos de atualizacao em tempo real",
      glow: "metric-glow-blue"
    },
    {
      value: "GIS",
      label: lang === 'en' ? "Maps and geodata practice" : "Pratica com mapas e geodados",
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
