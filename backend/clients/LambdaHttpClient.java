package backend.aws;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Component
public class LambdaHttpClient {
    private final HttpClient httpClient = HttpClient.newHttpClient();
    private final ObjectMapper mapper = new ObjectMapper();

    @Value("${lambda.functionUrl}")
    private String functionUrl;

    public String invoke(Object payload) throws Exception {
        String json = maper.writeValueAsString(payload);
        HttpRequest req = HttpRequest.newBuilder(URI.create(functionUrl))
        .header("content-Type", "application/json")
        .POST(HttpRequest.BodyPublishers.ofString(json))
        .build();
        HttpResponse<String> resp = http.send(req, HttpResponse.BodyHandlers.ofString());
        return resp.body();
    }
}