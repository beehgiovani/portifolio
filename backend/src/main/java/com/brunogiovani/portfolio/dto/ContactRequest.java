package com.brunogiovani.portfolio.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ContactRequest(
        @NotBlank(message = "Nome e obrigatorio")
        @Size(max = 120, message = "Nome deve ter no maximo 120 caracteres")
        String name,

        @NotBlank(message = "E-mail e obrigatorio")
        @Email(message = "E-mail invalido")
        @Size(max = 160, message = "E-mail deve ter no maximo 160 caracteres")
        String email,

        @Size(max = 40, message = "Telefone deve ter no maximo 40 caracteres")
        String phone,

        @NotBlank(message = "Mensagem e obrigatoria")
        @Size(min = 10, max = 3000, message = "Mensagem deve ter entre 10 e 3000 caracteres")
        String message
) {
}
