package backend.controllers;

import backend.entities.ContactRequest;
import backend.services.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private ContactService service;

    @Value("${app.email.to}")
    private String toEmail;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Value("${spring.mail.password:}")
    private String mailPassword;

    @PostMapping
    public ResponseEntity<String> processContactRequest(@RequestBody @Valid ContactRequest req) {
        service.processContactRequest(req);
        return ResponseEntity.ok("Received");
    }

    @GetMapping("/test")
    public ResponseEntity<Map<String, Object>> testEmailConfig() {
        Map<String, Object> config = new HashMap<>();
        config.put("toEmail", toEmail);
        config.put("fromEmail", fromEmail);
        config.put("passwordSet", mailPassword != null && !mailPassword.isEmpty());
        config.put("passwordLength", mailPassword != null ? mailPassword.length() : 0);
        return ResponseEntity.ok(config);
    }
}


