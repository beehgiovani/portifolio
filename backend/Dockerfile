# Stage 1: Build
FROM maven:3.9.6-eclipse-temurin-21-alpine AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Run
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# Configurações para o Render:
# 1. Usar porta dinâmica do ambiente ou 10000 (padrão Render)
# 2. Limitar memória da JVM para caber no plano Free (512MB)
ENV PORT=10000
ENTRYPOINT ["java", "-Xmx384m", "-Xms384m", "-jar", "app.jar", "--server.port=${PORT}"]
