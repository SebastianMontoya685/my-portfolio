package backend.controllers;

import backend.entities.ContactRequest;
import backend.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private ContactService service;

    @PostMapping
    public ResponseEntity<String> processContactRequest(@RequestBody ContactRequest req) {
        service.processContactRequest(req);
        return ResponseEntity.ok("Received");
    }
}


