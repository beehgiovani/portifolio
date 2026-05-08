# 🛡️ Padrões de Desenvolvimento - Portfolio BrunoDev

Este documento estabelece as regras obrigatórias para qualquer manutenção ou evolução deste projeto. **Leia antes de iniciar qualquer edição.**

## 1. Tipagem (TypeScript)
- **Proibido o uso de `any`**: O uso de `any` é estritamente proibido para tipificação indiscriminada. 
- **Interfaces e Types**: Sempre defina interfaces claras para novos dados. Use utilitários como `Partial`, `Pick` ou `ResumeTemplate['key']` para reutilizar tipos existentes.
- **Strict Mode**: Respeite as configurações de `verbatimModuleSyntax` usando `import type` quando necessário.

## 2. Estilização (CSS)
- **Zero Inline Styles**: Não utilize o atributo `style={...}` diretamente nos componentes React, exceto para cálculos dinâmicos de posição/tamanho que mudam em tempo real.
- **CSS Modularizado**: Crie arquivos CSS para componentes específicos ou utilize classes bem definidas no `index.css` que permitam reaproveitamento.
- **Cross-browser Compatibility**: 
    - Sempre que usar `backdrop-filter`, inclua obrigatoriamente o prefixo `-webkit-backdrop-filter`.
    - Exemplo:
      ```css
      .glass-effect {
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
      }
      ```

## 3. Qualidade de Código (Lint & Warnings)
- **Zero Warnings**: Antes de commitar, verifique se não há variáveis não utilizadas ou imports mortos.
- **Alinhamento**: Mantenha a indentação e estrutura de código consistente com o restante do projeto.

## 4. Segurança & Acesso
- Funcionalidades administrativas (Gerenciador de Currículos, Mensagens) devem ter travas de ambiente ou chaves de acesso.
- Nunca exponha chaves sensíveis no código client-side sem proteção.
