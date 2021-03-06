package com.example.Start.Controller;


import com.example.Start.Entities.SubNotification;
import com.example.Start.Entities.User_Notification;
import com.example.Start.Repositories.SubNotificationRepository;
import com.example.Start.Repositories.UserNotificationRepository;
import com.example.Start.Security.UserPrincipal;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import java.io.IOException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@RestController
@RequestMapping("/api/user_notification")
public class UserNotificationController {
    
    @Autowired
    private SubNotificationRepository subNotificationRepository;
    
    private UserNotificationRepository repository;

    public UserNotificationController(UserNotificationRepository repository) {
        this.repository = repository;
    }


    @RequestMapping("/get")
    public List<User_Notification> getUserNotification(){
        
        UserPrincipal up =  (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return repository.findByUsername(up.getUsername());
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveUserNotification(
            @RequestBody String json) throws IOException{
        
        ObjectMapper mapper = new ObjectMapper();
        Map<String,Object> map = mapper.readValue(json, Map.class);
        String notification_id = (String) map.get("notification_id");
        String details = (String) map.get("details");
        Long Lid = Long.parseLong(notification_id,10);
        Optional<SubNotification> n = subNotificationRepository.findById(Lid);
        SubNotification sb = n.get();
        UserPrincipal up =  (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User_Notification un = new User_Notification(up.getUsername(),sb.getTitle(),details);
        repository.save(un);
        return new ResponseEntity<>("Notification saved successfuly!", HttpStatus.OK);
        
    }


    @RequestMapping("delete/{id}")
    public List<User_Notification> deleteUserNotification(@PathVariable Long id){
        repository.deleteById(id);
        UserPrincipal up =  (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return repository.findByUsername(up.getUsername());
    }

}
