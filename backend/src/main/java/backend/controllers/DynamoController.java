package backend.controllers;

import backend.services.DynamoDbService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/dynamo")
public class DynamoController {

    private final DynamoDbService dynamoDbService;

    public DynamoController(DynamoDbService dynamoDbService) {
        this.dynamoDbService = dynamoDbService;
    }

    @PostMapping("/put")
    public ResponseEntity<Map<String, Object>> put(@RequestBody Map<String, Object> body) {
        dynamoDbService.putItem(body);
        return ResponseEntity.ok(Map.of("ok", true));
    }
}