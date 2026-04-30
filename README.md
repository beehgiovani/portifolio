# 🚀 Bruno Giovani | Senior Software Engineer & Architect

<div align="center">

![React](https://img.shields.io/badge/Frontend-React_19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=for-the-badge&logo=typescript)
![Spring Boot](https://img.shields.io/badge/Backend-Spring_Boot_3-green?style=for-the-badge&logo=spring)
![Java](https://img.shields.io/badge/Language-Java_21-orange?style=for-the-badge&logo=java)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?style=for-the-badge&logo=postgresql)

**[LinkedIn](https://linkedin.com/in/bruno-giovani-a50b32230) | [Portfólio Online](https://portifolio-25cfa.web.app/) | [GitHub](https://github.com/BrunoGiovani)**

</div>

> **Engenharia de Software Pleno/Senior focada em alta performance, ecossistemas digitais escaláveis e impacto real de negócios.**  
> Especialista em Geo-Inteligência, Microserviços Resilientes (Java/Spring), Agentes Autônomos de IA (Python) e Arquiteturas Nativas.

---

## 🎯 Sobre o Portfólio

Este repositório não é apenas um site estático; é um **ecossistema full-stack arquitetado do zero** para demonstrar de forma tátil a minha filosofia de desenvolvimento de software.

Enquanto a maioria dos portfólios são templates prontos, este projeto utiliza **React 19, Vite, Framer Motion e TypeScript** no Frontend, servindo como prova técnica da minha capacidade em desenvolver Single Page Applications altamente performáticas, componentizadas, com suporte a i18n nativo e animações 3D otimizadas na GPU.

### 💡 Filosofia de Arquitetura do Projeto
- **Single Source of Truth (SSOT):** O projeto utiliza um sistema centralizado (`portfolio.data.json`) onde os dados alimentam tanto a interface React dinâmica quanto os pipelines em Node.js que renderizam os meus 5 currículos automaticamente (em PDF, MD e HTML).
- **Clean Code & Manutenibilidade:** Estilos componentizados, hooks customizados (`useI18n`) e código escalável focado no princípio DRY (Don't Repeat Yourself).
- **Glassmorphism & Animação 3D:** Interface desenhada para causar impacto visual sem comprometer o First Contentful Paint (FCP) ou SEO.

---

## 🏆 Projetos de Alto Impacto & Cases de Sucesso

Durante a minha carreira, liderei e desenvolvi sistemas que geraram redução severa de custos e automação de escala em ambientes de produção. Alguns dos destaques arquitetônicos incluem:

### 1. GuaruGeo - Inteligência Imobiliária Geográfica
- **Ecossistema:** Python, PostGIS, Geopandas.
- **Impacto:** Construção do maior banco de dados proprietário do litoral paulista. Transformei APIs complexas de WFS em puro dado comercial valioso através de workflows assíncronos isolados.

### 2. AutoScraper Core (UrbanIntelligence)
- **Ecossistema:** Python, PyTorch, Tor Multiplexing.
- **Impacto:** Redução de **95% no custo de aquisição de dados governamentais**, através de bots orquestrados na rede Tor capazes de quebrar e resolver captchas matemáticos em massa usando redes neurais convolucionais de visão computacional.

### 3. NidusCare (HealthTech)
- **Ecossistema:** Kotlin Nativo, Android Jetpack, Room Database.
- **Impacto:** App offline-first que elevou drasticamente a adesão medicamentosa. Usa Coroutines para sincronização paralela segura sem drenar a bateria do usuário em background.

### 4. Certidões App (AutoJuris AI)
- **Ecossistema:** Node.js, Puppeteer, Supabase.
- **Impacto:** RPA serverless rodando no limite da nuvem para emissão massiva de certidões negativas sem acionamento humano.

---

## 🛠️ Stack Tecnológica

| Domínio | Tecnologias Principais |
|---|---|
| **Backend & Microserviços** | Java 21, Spring Boot 3, Kotlin, Clean Architecture |
| **Data Engineering & IA** | Python, PyTorch, Pandas, Geopandas, OpenCV |
| **Bancos de Dados** | PostgreSQL, PostGIS, MySQL, Redis, Supabase |
| **Frontend & Mobile** | React 19, TypeScript, Android Nativo (MVVM) |
| **Cloud & DevOps** | AWS, Docker, Kubernetes, CI/CD, Firebase, Tor Networks |

---

## 🚀 Como Executar o Portfólio Localmente

A arquitetura do repositório foi construída para rodar com o mínimo de atrito.

### Frontend
```bash
cd frontend
npm install
npm run dev
```
> O SPA (Single Page App) com hot-reloading estará disponível em `http://localhost:5173`.

### Sincronização Automatizada de Dados
Caso precise atualizar meus dados no currículo, o pipeline customizado pode ser executado:
```bash
node sync_resumes.js
```
> Isso varre o `portfolio.data.json` e automaticamente compila todos os `.md` e `.html` sem edição manual.

---

<div align="center">
  <i>"Arquitetura de software não é sobre desenhar caixas e setas, é sobre resolver problemas de negócios da forma mais escalável, resiliente e menos custosa possível."</i>
</div>
