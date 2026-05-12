package com.brunogiovani.portfolio.controller;

import com.brunogiovani.portfolio.repository.ContactRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@TestPropertySource(properties = {
        "spring.datasource.url=jdbc:h2:mem:portfolio-test;DB_CLOSE_DELAY=-1;MODE=PostgreSQL",
        "spring.datasource.driver-class-name=org.h2.Driver",
        "spring.datasource.username=sa",
        "spring.datasource.password=",
        "spring.jpa.hibernate.ddl-auto=create-drop",
        "spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.H2Dialect",
        "portfolio.admin-token=test-token"
})
class PortfolioControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ContactRepository contactRepository;

    @BeforeEach
    void clearContacts() {
        contactRepository.deleteAll();
    }

    @Test
    void shouldSaveValidContactMessage() throws Exception {
        mockMvc.perform(post("/api/portfolio/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "name": "Bruno Giovani",
                                  "email": "BRUNO@EXAMPLE.COM",
                                  "phone": "13 99999-0000",
                                  "message": "Gostaria de conversar sobre uma oportunidade."
                                }
                                """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").isNumber())
                .andExpect(jsonPath("$.message").value("Ola, Bruno Giovani! Mensagem recebida com sucesso. Entrarei em contato em breve."));

        assertThat(contactRepository.findAll())
                .hasSize(1)
                .first()
                .satisfies(contact -> assertThat(contact.getEmail()).isEqualTo("bruno@example.com"));
    }

    @Test
    void shouldRejectInvalidContactMessage() throws Exception {
        mockMvc.perform(post("/api/portfolio/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "name": "",
                                  "email": "email-invalido",
                                  "message": "curta"
                                }
                                """))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.message").value("Dados invalidos"))
                .andExpect(jsonPath("$.fields.name").exists())
                .andExpect(jsonPath("$.fields.email").exists())
                .andExpect(jsonPath("$.fields.message").exists());
    }

    @Test
    void shouldProtectContactListWithAdminToken() throws Exception {
        mockMvc.perform(get("/api/portfolio/contact"))
                .andExpect(status().isForbidden());

        mockMvc.perform(get("/api/portfolio/contact")
                        .header("X-Admin-Token", "test-token"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(0)));
    }
}
