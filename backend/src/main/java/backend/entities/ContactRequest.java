package backend.entities;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ContactRequest {
    @NotBlank(message = "Name is required")
    @Size(min = 1, max = 100, message = "Name must be between 1 and 100 characters")
    private String name;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Email must be valid")
    private String email;
    
    private String phone;
    
    private String service;
    
    @NotBlank(message = "Message is required")
    @Size(min = 1, max = 2000, message = "Message must be between 1 and 2000 characters")
    private String message;

    public ContactRequest() {}

    public ContactRequest(String name, String email, String phone, String service, String message) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.service = service;
        this.message = message;
    }

    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getPhone() { return phone; }
    public String getService() { return service; }
    public String getMessage() { return message; }

    public void setName(String name) { this.name = name; }
    public void setEmail(String email) { this.email = email; }
    public void setPhone(String phone) { this.phone = phone; }
    public void setService(String service) { this.service = service; }
    public void setMessage(String message) { this.message = message; }
}


