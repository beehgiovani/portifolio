package com.brunogiovani.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/healthz")
    public String health() {
        return "OK";
    }

    @GetMapping("/")
    public String root() {
        return "Portfolio Backend is Online";
    }
}
