
public class ContactRequest {
    private String name;
    private String email;
    private String phone;
    private String service;
    private String message;

    public ContactRequest(String name, String email, String phone, String service) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.service = service;
    }

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