package backend.controllers;

import backend.clients.LambdaHttpClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/lambda")
public class LambdaController {
    private final LambdaHttpClient httpClient;

    public LambdaController(LambdaHttpClient httpClient) {
        this.httpClient = httpClient;
    }

    @PostMapping("/invoke")
    public ResponseEntity<String> invoke(@RequestBody Map<String, Object> payload) throws Exception {
        return ResponseEntity.ok(httpClient.invoke(payload));
    }
}


