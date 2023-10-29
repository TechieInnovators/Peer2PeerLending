package com.example.springsecurityjwt.service;

import com.example.springsecurityjwt.dao.request.SignInRequest;
import com.example.springsecurityjwt.dao.request.SignUpRequest;
import com.example.springsecurityjwt.dao.response.JwtAuthenticationResponse;

public interface AuthenticationService {
    JwtAuthenticationResponse signup(SignUpRequest request);

    JwtAuthenticationResponse signIn(SignInRequest request);
}