package com.tcl.chaebee;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ChaebeeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChaebeeApplication.class, args);
	}

	@GetMapping("/")
	public String index() {
		return "Hello Chaebee!";
	}

}
