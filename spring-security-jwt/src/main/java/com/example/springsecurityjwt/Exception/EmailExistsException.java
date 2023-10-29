package com.example.springsecurityjwt.Exception;

public class EmailExistsException extends Exception{

    public EmailExistsException(String msg)
    {
        super(msg);
    }
}
