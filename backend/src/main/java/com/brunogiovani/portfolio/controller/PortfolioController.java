package com.brunogiovani.portfolio.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.List;

@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin(origins = "*") // Liberando o CORS pra não dar erro no React durante o dev
public class PortfolioController {

    @GetMapping
    public Map<String, String> getProfile() {
        return Map.of(
            "name", "Bruno Giovani",
            "role", "Software Engineer Full-Stack & AI/Automations",
            "bio_human", "Comecei pela necessidade de construir o que não existia. 'Builder' por natureza."
        );
    }

    @GetMapping("/specialties")
    public List<Map<String, Object>> getSpecialties() {
        return List.of(
            Map.of(
                "title", "GIS Intelligence",
                "core_tech", "React, Node.js, Leaflet, PostGIS",
                "impact", "Creator of GuaruGeo - real-time real estate GIS."
            ),
            Map.of(
                "title", "AI & Computer Vision",
                "core_tech", "Gemini Vision API, PyTorch, OCR models",
                "impact", "Automated pharma stock intelligence & CAPTCHA solving."
            ),
            Map.of(
                "title", "Native Mobile (Kotlin)",
                "core_tech", "Kotlin, MVVM, Hilt, Coroutines",
                "impact", "Scalable apps like NidusCare for elderly health management."
            )
        );
    }

    @PostMapping("/contact")
    public Map<String, String> submitContact(@RequestBody Map<String, String> contact) {
        // Mock rápido pra simular o recebimento do formulário de contato
        String name = contact.get("name");
        return Map.of("message", "Obrigado, " + name + "! Recebi seu contato com sucesso.");
    }
}
