package com.example.Start.Entities;


import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "category")
public class Category {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;


    private int Cindex;
    private String title;
    private String Url;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private Set<SubCategory> SubCategory;


    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private Set<Notification> Notification;


    public Category() {};

    public Category(String title, String notificationUrl, int Cindex) {
        this.title = title;
        this.Cindex = Cindex;
        Url = notificationUrl;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getIndex() {
        return Cindex;
    }

    public void setIndex(int index) {
        this.Cindex = index;
    }

    public String getUrl() {
        return Url;
    }

    public void setUrl(String notificationUrl) {
        Url = notificationUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
