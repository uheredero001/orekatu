package com.edurne.tercero.psico.config;

import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
@EnableWebMvc
public class WebConfig {

	@Bean
	public WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> enableDefaultServlet() {
		return factory -> factory.setRegisterDefaultServlet(true);
	}
	
	
	@Bean
    public ObjectMapper objectMapper() {
        return new ObjectMapper();
    }
	
}
