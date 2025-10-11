package backend;

@ControllerAdvice
public class GlobalExceptionHandler {

    // Exception handler for ContactProcessingException
    @ExceptionHandler(ContactProcessingException.class)
    public ResponseEntity<String> handleContactProcessingException(ContactProcessingException ex) {
        return new ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

    // Optional catch-all exception handler
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception ex) {
        return new ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("internal server error occured.");
    }
}