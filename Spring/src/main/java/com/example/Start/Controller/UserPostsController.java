package com.example.Start.Controller;


import com.example.Start.Entities.Category;
import com.example.Start.Entities.SubCategory;
import com.example.Start.Entities.SubNotification;
import com.example.Start.Entities.UserPosts;
import com.example.Start.Repositories.CategoryRepository;
import com.example.Start.Repositories.SubNotificationRepository;
import com.example.Start.Repositories.SubcategoryRepository;
import com.example.Start.Repositories.UserPostsRepository;
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
@RequestMapping("/api/userposts")
public class UserPostsController {
    
    @Autowired
    private SubcategoryRepository SubCategoryRepository;
    
    @Autowired
    private CategoryRepository categoryRepository;
    
    @Autowired 
    private UserPostsRepository repository;

    public UserPostsController(UserPostsRepository repository) {
        this.repository = repository;
    }


    @RequestMapping("/get")
    public List<UserPosts> getUserPosts(){
        
        UserPrincipal up =  (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return repository.findByUsername(up.getUsername());
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveUserPosts(
            @RequestBody String json) throws IOException{
        
        ObjectMapper mapper = new ObjectMapper();
        Map<String,Object> map = mapper.readValue(json, Map.class);
        int category_id = (int) map.get("category");
        int subcategory_id = (int) map.get("subcategory");
        String title = (String) map.get("title");
        String details = (String) map.get("postdetails");
        
        Long categoryid = Long.valueOf(category_id);
        Long subcategoryid = Long.valueOf(subcategory_id);
        Optional<SubCategory> sc = SubCategoryRepository.findById(subcategoryid);
        SubCategory SC = sc.get();
        Optional<Category> c = categoryRepository.findById(categoryid);
        Category C = c.get();
        UserPrincipal up =  (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserPosts un = new UserPosts(up.getUsername(),title,details);
        un.setCategory(C);
        un.setSubcategory(SC);
        repository.save(un);
        repository.save(un);
        return new ResponseEntity<>("Notification saved successfuly!", HttpStatus.OK);
        
    }
    
    @PostMapping("/edit")
    public ResponseEntity<String> updateUserPosts(
            @RequestBody String json) throws IOException{
        
        ObjectMapper mapper = new ObjectMapper();
        Map<String,Object> map = mapper.readValue(json, Map.class);
        int category_id = (int) map.get("category");
        int subcategory_id = (int) map.get("subcategory");
        String title = (String) map.get("title");
        String details = (String) map.get("postdetails");
        
        Long categoryid = Long.valueOf(category_id);
        Long subcategoryid = Long.valueOf(subcategory_id);
        Optional<SubCategory> sc = SubCategoryRepository.findById(subcategoryid);
        SubCategory SC = sc.get();
        Optional<Category> c = categoryRepository.findById(categoryid);
        Category C = c.get();
        UserPrincipal up =  (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserPosts un = new UserPosts(up.getUsername(),title,details);
        un.setCategory(C);
        un.setSubcategory(SC);
        repository.save(un);
        return new ResponseEntity<>("Notification updated successfuly!", HttpStatus.OK);
        
    }


    @RequestMapping("delete/{id}")
    public List<UserPosts> deleteUserPosts(@PathVariable Long id){
        repository.deleteById(id);
        UserPrincipal up =  (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return repository.findByUsername(up.getUsername());
    }

}