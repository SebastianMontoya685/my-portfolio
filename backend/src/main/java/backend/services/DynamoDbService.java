package backend.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;
import software.amazon.awssdk.services.dynamodb.model.AttributeValue;
import software.amazon.awssdk.services.dynamodb.model.PutItemRequest;

import java.util.HashMap;
import java.util.Map;

@Service
public class DynamoDbService {
    private final DynamoDbClient dynamoDbClient;
    private final String tableName;

    public DynamoDbService(@Value("${app.dynamodb.region}") String region, @Value("${app.dynamodb.tableName}") String tableName) {
        this.dynamoDbClient = DynamoDbClient.builder()
            .region(Region.of(region))
            .build();
        this.tableName = tableName;
    }

    public void putItem(Map<String, Object> requestBody) {
        Map<String, AttributeValue> item = new HashMap<>();

        long id = requestBody.getOrDefault("id", System.currentTimeMillis()) instanceof Number
                ? ((Number) requestBody.getOrDefault("id", System.currentTimeMillis())).longValue()
                : System.currentTimeMillis();
        item.put("id", AttributeValue.builder().n(Long.toString(id)).build()); // partition key is Number

        for (Map.Entry<String, Object> entry : requestBody.entrySet()) {
            String key = entry.getKey();
            if ("id".equals(key)) continue;
            Object value = entry.getValue();
            if (value == null) continue;

            if (value instanceof Number) {
                item.put(key, AttributeValue.builder().n(value.toString()).build());
            } else {
                item.put(key, AttributeValue.builder().s(value.toString()).build());
            }
        }

        dynamoDbClient.putItem(PutItemRequest.builder()
                .tableName(tableName)
                .item(item)
                .build());
    }
}
    