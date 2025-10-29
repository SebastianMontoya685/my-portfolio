package backend.services;

import backend.entities.ContactRequest;
import org.springframework.stereotype.Service;

@Service
public class ContactService {
    public void processContactRequest(ContactRequest req) {
        System.out.println("Processing contact request for: " + req.getName() + "\nFor service: " + req.getService());
    }
}


