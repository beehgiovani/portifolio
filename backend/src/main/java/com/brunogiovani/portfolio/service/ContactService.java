package com.brunogiovani.portfolio.service;

import com.brunogiovani.portfolio.dto.AdminContactResponse;
import com.brunogiovani.portfolio.dto.ContactRequest;
import com.brunogiovani.portfolio.model.Contact;
import com.brunogiovani.portfolio.repository.ContactRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Transactional
    public Contact save(ContactRequest request) {
        Contact contact = new Contact();
        contact.setName(request.name().trim());
        contact.setEmail(request.email().trim().toLowerCase());
        contact.setPhone(normalizeOptional(request.phone()));
        contact.setMessage(request.message().trim());

        return contactRepository.save(contact);
    }

    @Transactional(readOnly = true)
    public List<AdminContactResponse> findAllForAdmin() {
        return contactRepository.findAll().stream()
                .map(contact -> new AdminContactResponse(
                        contact.getId(),
                        contact.getName(),
                        contact.getEmail(),
                        contact.getPhone(),
                        contact.getMessage(),
                        contact.getCreatedAt()
                ))
                .toList();
    }

    private String normalizeOptional(String value) {
        if (value == null || value.isBlank()) {
            return null;
        }

        return value.trim();
    }
}
