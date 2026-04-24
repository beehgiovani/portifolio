# Bruno Giovani - Professional Portfolio

![React](https://img.shields.io/badge/Frontend-React_19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=flat-square&logo=typescript)
![Spring Boot](https://img.shields.io/badge/Backend-Spring_Boot_3-green?style=flat-square&logo=spring)
![Java](https://img.shields.io/badge/Language-Java_21-orange?style=flat-square&logo=java)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?style=flat-square&logo=postgresql)

> **Senior Software Engineer | Architecting high-performance digital ecosystems.**  
> Specializing in Geo-Intelligence, Resilient Microservices, Autonomous AI Agents, and Native Architectures.

This repository contains the source code for my professional portfolio, built as a modern, high-performance web application designed to showcase my experience, projects, and technical skills.

---

## 🏗️ Architecture

The project is structured as a full-stack monorepo, separating the UI layer from the robust backend infrastructure.

### Frontend (`/frontend`)
A highly optimized, SEO-friendly, and fully responsive Single Page Application.
- **Framework:** React 19 + TypeScript powered by Vite.
- **Design:** Modern glassmorphism UI, advanced CSS animations, dynamic 3D-perspective cards.
- **Features:** Client-side i18n (English/Portuguese), interactive mapping placeholders, dynamic theme toggling, and fully componentized architecture.
- **Deployment Target:** AWS S3 + CloudFront (or Firebase Hosting).

### Backend (`/backend`)
A resilient, microservice-ready JVM application designed to handle contact form submissions, dynamic portfolio data fetching, and integrations.
- **Framework:** Java 21 + Spring Boot 3.
- **Architecture:** Clean Architecture patterns, RESTful APIs, and robust exception handling.
- **Deployment Target:** AWS App Runner / Docker.

---

## 🚀 Running Locally

### Prerequisites
- Node.js (v18+)
- Java JDK 21
- Maven

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will be available at `http://localhost:5173`.

### Backend Setup
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
The backend will be available at `http://localhost:8080`.

---

## 🌟 Featured Projects Highlight
My portfolio dynamically renders projects that underline my core competencies:
- **PredictMed**: Enterprise AI-driven inventory prediction leveraging Gemini Vision.
- **GuaruGeo**: High-fidelity GIS platform and CRM for real estate analytics using PostGIS.
- **AutoScraper Core**: Distributed bot orchestrator for massive municipal data extraction bypassing complex WAFs via PyTorch ML.
- **NidusCare**: Comprehensive digital health management native Android app.

*(See the live portfolio for the complete list and interactive technical details).*

---

## 🛡️ License & Copyright
© 2026 Bruno Giovani. All rights reserved.
Code in this repository is strictly for portfolio demonstration purposes.
