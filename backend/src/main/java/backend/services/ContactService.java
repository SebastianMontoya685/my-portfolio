package backend.services;

import backend.entities.ContactRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${app.email.to}")
    private String toEmail;

    @Value("${spring.mail.username}")
    private String fromEmail;

    public void processContactRequest(ContactRequest req) {
        try {
            System.out.println("=== Starting email send process ===");
            System.out.println("To: " + toEmail);
            System.out.println("From: " + fromEmail);
            System.out.println("Reply-To: " + req.getEmail());
            
            // Send email notification
            // Note: Gmail SMTP requires "from" to be the authenticated email
            // We set reply-to so you can reply directly to the user
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(toEmail);
            message.setSubject("New Contact Form Submission: " + req.getService());
            message.setText(buildEmailBody(req));
            message.setFrom(fromEmail);
            message.setReplyTo(req.getEmail()); // Allows direct reply to user
            
            System.out.println("Attempting to send email...");
            mailSender.send(message);
            System.out.println("✓ Email sent successfully for: " + req.getName());
        } catch (Exception e) {
            System.err.println("✗ FAILED to send email!");
            System.err.println("Error type: " + e.getClass().getName());
            System.err.println("Error message: " + e.getMessage());
            System.err.println("Full stack trace:");
            e.printStackTrace();
            throw new RuntimeException("Failed to process contact request: " + e.getMessage(), e);
        }
    }

    private String buildEmailBody(ContactRequest req) {
        return String.format(
            "New contact form submission:\n\n" +
            "Name: %s\n" +
            "Email: %s\n" +
            "Phone: %s\n" +
            "Service: %s\n\n" +
            "Message:\n%s",
            req.getName(),
            req.getEmail(),
            req.getPhone(),
            req.getService(),
            req.getMessage()
        );
    }
}


