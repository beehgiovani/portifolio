package com.brunogiovani.portfolio.config;

import org.springframework.context.annotation.Configuration;

/**
 * PostgreSQL JDBC Driver Security Configuration
 * 
 * This configuration documents CVE workarounds for PostgreSQL JDBC driver 42.7.5:
 * 
 * CVE-2025-49146: pgjdbc Client Allows Fallback to Insecure Authentication
 * - Severity: HIGH
 * - Impact: Channel binding fallback allows MITM attacks when channelBinding=require
 * - Workaround: Use sslMode=verify-full in database connection strings
 * - Applied in: application.properties (jdbc:postgresql://..?sslMode=verify-full)
 * 
 * CVE-2026-42198: Unbounded PBKDF2 iterations in SCRAM authentication
 * - Severity: HIGH  
 * - Impact: Malicious server can cause client CPU exhaustion via large iteration counts
 * - Workaround: Limit parallel connection attempts via HikariCP pool settings
 * - Applied in: application.properties (maximum-pool-size, connection-timeout)
 * 
 * @see https://github.com/advisories/GHSA-hq9p-pm7w-8p54
 * @see https://github.com/advisories/GHSA-98qh-xjc8-98pq
 */
@Configuration
public class PostgresqlSecurityConfig {
    
    // CVE Workarounds are configured in application.properties:
    // 
    // spring.datasource.url=jdbc:postgresql://...?sslMode=verify-full
    //   ↳ Enforces TLS certificate verification, prevents CVE-2025-49146 attacks
    //
    // spring.datasource.hikari.maximum-pool-size=5
    //   ↳ Limits concurrent connection attempts, reduces blast radius of CVE-2026-42198
    //
    // spring.datasource.hikari.connection-timeout=30000
    //   ↳ Prevents indefinite CPU burn during SCRAM PBKDF2 iterations
    //
    // These settings apply to both test (H2) and production (PostgreSQL) profiles.
    // H2 is not affected by these CVEs but is unaffected by these settings.
}
