package com.brunogiovani.portfolio.controller;

import com.brunogiovani.portfolio.dto.AdminContactResponse;
import com.brunogiovani.portfolio.dto.ContactRequest;
import com.brunogiovani.portfolio.dto.ContactResponse;
import com.brunogiovani.portfolio.dto.ProfileResponse;
import com.brunogiovani.portfolio.dto.SpecialtyResponse;
import com.brunogiovani.portfolio.model.Contact;
import com.brunogiovani.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {

    private final ContactService contactService;
    private final String adminToken;

    public PortfolioController(
            ContactService contactService,
            @Value("${portfolio.admin-token:}") String adminToken
    ) {
        this.contactService = contactService;
        this.adminToken = adminToken;
    }

    @GetMapping
    public ProfileResponse getProfile() {
        return new ProfileResponse(
                "Bruno Giovani",
                "Software Engineer Full-Stack & AI/Automations",
                "Comecei pela necessidade de construir o que nao existia. Builder por natureza."
        );
    }

    @GetMapping("/specialties")
    public List<SpecialtyResponse> getSpecialties() {
        return List.of(
                new SpecialtyResponse(
                        "GIS Intelligence",
                        "React, Node.js, Leaflet, PostGIS",
                        "Criacao de sistemas geoespaciais para leitura de mercado e operacao imobiliaria."
                ),
                new SpecialtyResponse(
                        "AI & Computer Vision",
                        "Gemini Vision API, PyTorch, OCR models",
                        "Automacoes para leitura de documentos, triagem operacional e apoio a decisao."
                ),
                new SpecialtyResponse(
                        "Native Mobile (Kotlin)",
                        "Kotlin, MVVM, Hilt, Coroutines",
                        "Aplicativos Android com arquitetura por camadas, estado reativo e persistencia local."
                )
        );
    }

    @PostMapping("/contact")
    public ContactResponse submitContact(@Valid @RequestBody ContactRequest request) {
        Contact saved = contactService.save(request);
        return new ContactResponse(
                saved.getId(),
                "Ola, " + saved.getName() + "! Mensagem recebida com sucesso. Entrarei em contato em breve."
        );
    }

    @GetMapping("/contact")
    public List<AdminContactResponse> getContacts(
            @RequestHeader(value = "X-Admin-Token", required = false) String requestToken
    ) {
        if (adminToken.isBlank() || !adminToken.equals(requestToken)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Admin token invalido");
        }

        return contactService.findAllForAdmin();
    }
}
