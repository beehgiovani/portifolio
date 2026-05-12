# AWS Deployment Strategy - Bruno Giovani Portfolio

This guide outlines the recommended "Premium" deployment for your full-stack portfolio.

## 1. Frontend (React)
**Host on AWS S3 + CloudFront**
- **S3 Bucket**: Static website hosting.
- **CloudFront (CDN)**: Low latency, HTTPS (ACM), and caching.
- **Route 53**: Your custom domain (e.g., `brunogiovani.dev`).

## 2. Backend (Spring Boot)
**AWS App Runner (Simplest Premium Choice)**
- **Source**: Directly from GitHub or ECR Container.
- **Auto-scaling**: Handles surges in traffic.
- **Port**: `8080`.
- **Environment**: JDK 21.

## 3. Database (PostgreSQL)
**AWS RDS (Optional for future CRUD features)**
- **Instance**: `db.t4g.micro` (Free tier eligible).
- **Security**: VPC Private Subnet, accessible only by App Runner.

## 4. Integration & Security
- **AWS Secrets Manager**: Storing API keys for Gemini, Database credentials.
- **IAM**: Least privilege roles for App Runner.
- **AWS SES**: If you implement a real email sending form.

---
### Local Development Cheat Sheet
- **Frontend**: `cd frontend && npm install && npm run dev`
- **Backend**: Open the `backend/` folder in IntelliJ or Android Studio and run `PortfolioApplication` with the `local` profile enabled.
- **Local admin token**: the frontend uses `frontend/.env.local` and the backend uses `application-local.properties`; both default to `local-admin` for local-only access.
