package services;
package entities;

public class ContactService {
    public void processContactRequest(ContactRequest req) {
        System.out.println("Processing contact request for: " + req.getName() + "\nFor service: " + req.getService());
    }
}