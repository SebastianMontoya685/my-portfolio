package entities;
package services;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins="*")
public class ContactController {
    
    @Autowired
    private ContactService service;

    @PostMapping
    public ResponseEntity<String> processContactRequest(@RequestBody ContactRequest req) {
        
    }
   
}