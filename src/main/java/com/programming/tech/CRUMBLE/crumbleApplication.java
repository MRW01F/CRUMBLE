package com.programming.tech.CRUMBLE;

import com.programming.tech.CRUMBLE.config.SwaggerConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
@Import(SwaggerConfiguration.class)
public class crumbleApplication {

    public static void main(String[] args) {
        SpringApplication.run(crumbleApplication.class, args);
    }

}
