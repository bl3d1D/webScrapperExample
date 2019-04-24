package com.example.Start.Controller;

import com.example.Start.Repositories.UserRepository;
import com.example.Start.Entities.Users;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class UserController {

    private UserRepository repository;

    public UserController(UserRepository repository) { this.repository=repository; }

    public static void main(String[] args) {
        SpringApplication.run(UserController.class, args);
    }

    @PostMapping
    public void updateUser(@RequestBody Users user){
        this.repository.save(user);
    }

}
