package com.xantrix.webapp.saluti_web_api.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/saluti")
@CrossOrigin("http://localhost:4200")
public class SalutiController {


    @GetMapping()
    public String getSaluti() {
        return "\"Saluti, sono il tuo primo web service creato in Spring Boot!\"";
    }
    
    @GetMapping(value = "/{nome}")
    public String getSaluti2(@PathVariable("nome") String nome) {
        String message = String.format("\"Saluti, %s, sono il tuo primo web service creato in Spring Boot!\"", nome);
        
        return message;
    }
        
}
