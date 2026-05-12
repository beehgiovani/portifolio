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

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.HexFormat;

@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {

    private static final String FRONTEND_ADMIN_HASH = "baa93941b068ab3d4d6031d2825fe2f5aeac1ba3083a212c0a37edd3f614ab7b";

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
        if (!isValidAdminToken(requestToken)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Admin token invalido");
        }

        return contactService.findAllForAdmin();
    }

    private boolean isValidAdminToken(String requestToken) {
        if (requestToken == null || requestToken.isBlank()) {
            return false;
        }

        if (!adminToken.isBlank() && adminToken.equals(requestToken)) {
            return true;
        }

        return FRONTEND_ADMIN_HASH.equals(hashSha256(requestToken));
    }

    private String hashSha256(String value) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(value.getBytes(StandardCharsets.UTF_8));
            return HexFormat.of().formatHex(hash);
        } catch (NoSuchAlgorithmException exception) {
            throw new IllegalStateException("SHA-256 indisponivel", exception);
        }
    }
}
