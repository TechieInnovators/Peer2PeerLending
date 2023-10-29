package com.example.springsecurityjwt.controller;

import com.example.springsecurityjwt.dao.request.SignInRequest;
import com.example.springsecurityjwt.dao.request.SignUpRequest;
import com.example.springsecurityjwt.dao.response.JwtAuthenticationResponse;
import com.example.springsecurityjwt.service.impl.AuthenticationServiceImpl;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AuthenticationController {

    private final AuthenticationServiceImpl authenticationService;

    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:2021/")
    public ResponseEntity<JwtAuthenticationResponse> register(@Valid @RequestBody SignUpRequest request) {

        if (request == null && request.toString().equals("")){

            throw new RuntimeException("Add values");
        }

        authenticationService.signup(request);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/signIn")
    @CrossOrigin(origins = "http://localhost:2021/")
    public ResponseEntity<JwtAuthenticationResponse> authenticate(@Valid @RequestBody SignInRequest SignInRequest) {
        return ResponseEntity.ok(authenticationService.signIn(SignInRequest));
    }

    @GetMapping("/test")
    public ResponseEntity<String> test(){
        return ResponseEntity.ok("HELLOOOOO");
    }
}
