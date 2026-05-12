package com.brunogiovani.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HealthController {

    @GetMapping("/healthz")
    public Map<String, String> health() {
        return Map.of(
                "status", "UP",
                "service", "portfolio-backend"
        );
    }

    @GetMapping("/")
    public String root() {
        return "Portfolio Backend is Online";
    }
}
