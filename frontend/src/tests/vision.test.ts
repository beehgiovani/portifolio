import { describe, it, expect } from 'vitest';

/**
 * Algoritmo de Estabilização Gestual (Kalman Filter 'Lite')
 * Esse teste valida a precisão do traço no Lúmen. A ideia é garantir que a 
 * matemática de suavização não deixe o pincel "atrasado" demais no movimento.
 */
const smoothPoint = (raw: {x: number, y: number}, last: {x: number, y: number}, stability: number) => {
  const dist = Math.hypot(raw.x - last.x, raw.y - last.y);
  const velocity = Math.min(dist / 30, 1);
  
  // Aqui eu uso a inércia do movimento: quanto mais rápido, menos suavização eu aplico
  // pra evitar aquele efeito de "lag" visual.
  const factor = stability * (1 - (velocity * 0.85));
  return {
    x: (raw.x * (1 - factor)) + (last.x * factor),
    y: (raw.y * (1 - factor)) + (last.y * factor)
  };
};

describe('Lúmen Engine - Gesture Stabilization', () => {
  it('deve suavizar o movimento quando a estabilidade é alta', () => {
    const last = { x: 100, y: 100 };
    const raw = { x: 110, y: 110 };
    const stability = 0.8;
    
    const result = smoothPoint(raw, last, stability);
    
    // O ponto suavizado tem que ficar no meio do caminho, puxando um pouco pro anterior
    expect(result.x).toBeGreaterThan(100);
    expect(result.x).toBeLessThan(110);
    expect(result.x).toBeCloseTo(105.2, 1); // Valor calculado pra essa estabilidade
  });

  it('deve reduzir a suavização em movimentos rápidos (alta velocidade)', () => {
    const last = { x: 100, y: 100 };
    const raw = { x: 200, y: 200 }; // Salto grande = alta velocidade
    const stability = 0.8;
    
    const result = smoothPoint(raw, last, stability);
    
    // Se o movimento foi rápido demais, a suavização tem que diminuir
    // pra o traço não ficar "comendo" as curvas do desenho.
    expect(result.x).toBeGreaterThan(180);
  });
});
