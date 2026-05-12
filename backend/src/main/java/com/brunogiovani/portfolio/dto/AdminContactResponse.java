package com.brunogiovani.portfolio.dto;

import java.time.LocalDateTime;

public record AdminContactResponse(
        Long id,
        String name,
        String email,
        String phone,
        String message,
        LocalDateTime createdAt
) {
}
