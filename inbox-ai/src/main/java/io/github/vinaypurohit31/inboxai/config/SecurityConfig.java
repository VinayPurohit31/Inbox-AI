package io.github.vinaypurohit31.inboxai.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        // Rule 1: Make the email API public
                        .requestMatchers("/api/email/**").permitAll()
                        // Rule 2: Make all actuator endpoints private (require login)
                        .requestMatchers("/actuator/**").authenticated()
                        // Rule 3: Any other request not mentioned above is also private
                        .anyRequest().authenticated()
                )
                // Enable the default login page and session management for browsers
                .formLogin(Customizer.withDefaults());

        return http.build();
    }
}