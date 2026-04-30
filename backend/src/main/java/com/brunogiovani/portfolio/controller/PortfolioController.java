package com.brunogiovani.portfolio.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.lang.NonNull;
import java.util.Map;
import java.util.List;
import com.brunogiovani.portfolio.model.Contact;

@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {

    private final com.brunogiovani.portfolio.repository.ContactRepository contactRepository;

    public PortfolioController(com.brunogiovani.portfolio.repository.ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }


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
    public Map<String, String> submitContact(@RequestBody @NonNull com.brunogiovani.portfolio.model.Contact contact) {
        com.brunogiovani.portfolio.model.Contact saved = contactRepository.save(contact);
        return Map.of(
            "message", "Olá, " + saved.getName() + "! Mensagem recebida com sucesso. Entrarei em contato em breve — obrigado pela atenção! 🚀"
        );
    }

    @GetMapping("/contact")
    public List<Contact> getContacts() {
        return contactRepository.findAll();
    }
}
