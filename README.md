# Bruno Giovani — portfólio profissional

Código-fonte do [brunodevs.com](https://brunodevs.com), uma vitrine bilíngue de projetos independentes em desenvolvimento full-stack, Android, automação e GIS.

O objetivo do site é apresentar evidências verificáveis. Cada projeto informa a stack usada, o estágio atual, o que o código demonstra e as limitações que ainda dependem de validação prática. O portfólio não publica métricas comerciais sem fonte, não trata protótipos como produtos em produção e não usa títulos de senioridade autoatribuídos.

## Projetos selecionados

- **FarmaDelivery** — monorepo com painel React, API Fastify, PWA e app Android.
- **Carteado BR** — jogo Android com motor de regras, bot local, Wi-Fi e online beta.
- **Guarujá Interativo** — aplicação Web GIS para consulta e organização de dados geográficos.
- **PredictMed** — protótipo de importação de históricos e apoio à reposição de estoque.
- **MarketPoster** — editor Android de cartazes e etiquetas para varejo.
- **Lúmen** — experimento de desenho por gestos para Web e Android.

Projetos redundantes, links indisponíveis e repositórios que funcionam apenas como ferramentas auxiliares não aparecem na página principal.

## Arquitetura

```text
frontend/  React 19 + TypeScript + Vite
backend/   Java + Spring Boot (API de contato e administração)
```

O conteúdo público fica em `frontend/src/locales/pt.ts`, `frontend/src/locales/en.ts` e `frontend/src/data/resumes.ts`. Não há dependência de arquivos pessoais ou ignorados pelo Git para gerar o build.

## Executar localmente

Frontend:

```bash
cd frontend
npm ci
npm run dev
```

Validação do frontend:

```bash
npm run lint
npm test
npm run build
```

Backend:

```bash
cd backend
./mvnw test
```

No Windows, use `mvnw.cmd test` quando o wrapper estiver disponível. O backend também pode ser executado pela IDE com o perfil local documentado em `backend/src/main/resources/application-local.properties`.

## Currículos

O site oferece três versões imprimíveis, em português e inglês:

- Full-stack — produtos web e APIs.
- Android/Kotlin — desenvolvimento mobile nativo.
- Python/Dados/GIS — automação, integrações e dados geográficos.

As versões compartilham formação e contato, mas selecionam projetos e competências coerentes com cada objetivo. Pretensão salarial não é publicada no currículo; ela deve ser discutida conforme a vaga e o modelo de contratação.

## Publicação

O frontend é publicado no Firebase Hosting no site `brunodevs`. Consulte [DEPLOYMENT.md](DEPLOYMENT.md) para o processo e as verificações antes do deploy.

## Limites de escopo

- Projetos independentes não são apresentados como experiência empregatícia.
- A colaboração informal de 2024 é descrita como pontual e concluída.
- Recursos beta ou experimentais são identificados dessa forma.
- Dados sensíveis, credenciais e bases de trabalho não pertencem ao repositório público.
