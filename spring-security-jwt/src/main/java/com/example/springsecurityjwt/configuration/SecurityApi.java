package com.example.springsecurityjwt.configuration;

import com.example.springsecurityjwt.entity.User;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Tag(name = "Security", description = "the security Api")
public interface SecurityApi {

    @Operation(
            summary = "Fetch all plants",
            description = "fetches all plant entities and their data from data source")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "successful operation")
    })
    ResponseEntity<List<User>> getAll();

    @Operation(
            summary = "adds a plant",
            description = "Adds a plant to the list of plants")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "successfully added a plnt"),
            @ApiResponse(responseCode = "409", description = "duplicate plant")
    })
    ResponseEntity<Void> addPlant(@RequestBody User user);
}