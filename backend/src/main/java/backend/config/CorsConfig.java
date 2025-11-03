package backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Value("${app.allowedOrigins:*}")
    private String allowedOrigins;

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        if (allowedOrigins != null && !allowedOrigins.isEmpty()) {
            for (String origin : allowedOrigins.split(",")) {
                String trimmed = origin.trim();
                if (!trimmed.isEmpty()) config.addAllowedOriginPattern(trimmed);
            }
        } else {
            // For local development, all origins are allowed.
            // Before deploying to prod, set ALLOWED_ORIGINS to your Netlify URL, e.g.:
            // https://your-site.netlify.app
            config.addAllowedOriginPattern("*");
        }
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}


