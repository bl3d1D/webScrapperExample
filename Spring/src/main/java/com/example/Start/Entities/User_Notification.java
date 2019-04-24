package com.example.Start.Entities;


import javax.persistence.*;

@Entity
@Table(name = "user_notification")

public class User_Notification {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String title;

    private String description;



    public User_Notification(){

    };

    public User_Notification(String username , String title, String description) {
        this.id = id;
        this.username = username;
        this.title = title;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
