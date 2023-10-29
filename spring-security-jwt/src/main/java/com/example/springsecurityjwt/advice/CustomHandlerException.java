package com.example.springsecurityjwt.advice;

import com.example.springsecurityjwt.Exception.EmailExistsException;
import com.example.springsecurityjwt.Exception.EmailNotFound;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class CustomHandlerException {

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(EmailExistsException.class)
    public Map<String, String> handlesEmailAlreadyExists(EmailExistsException error){
        Map<String, String> map = new HashMap<>();
        map.put("errorMessage", error.getMessage());
        return map;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler({MethodArgumentTypeMismatchException.class, IllegalStateException.class})
    public Object handlePathVariableException(Exception exception, HttpServletRequest request){
        Map<String, Object> response = new HashMap<>();
        response.put("errorMessage", exception.getMessage());
        return response;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler({EmailNotFound.class, BadCredentialsException.class, ExpiredJwtException.class})
    public Object invalidEmail(Exception ex){
        Map<String, Object> responses = new HashMap<>();
        responses.put("errorMessage", ex.getMessage());
        return responses;

    }

    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Object methodNotValid(MethodArgumentNotValidException ex){
       Map<String, Object> res = new HashMap<>();
       res.put("errorMessage", ex.getMessage());
       return res;
    }
}
