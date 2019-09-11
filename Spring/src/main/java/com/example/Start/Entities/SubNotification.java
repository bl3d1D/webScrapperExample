package com.example.Start.Entities;


import javax.persistence.*;

@Entity
@Table(name = "subnotification")
public class SubNotification {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int SNindex;
    private String title;
    private String url;

    @ManyToOne
    @JoinColumn
    private SubCategory subcategory;
    
    @Column(columnDefinition = "TEXT")
    private String details;

    public SubNotification(){}

    public SubNotification(String name, String descriptionUrl, int index) {
        this.title = name;
        this.url = descriptionUrl;
        this.SNindex=index;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String name) {
        this.title = name;
    }
    public String getUrl() {
        return url;
    }
    public void setDescriptionUrl(String description) { this.url = description; }
    public int getIndex() {
        return SNindex;
    }

    public void setIndex(int index) {
        this.SNindex = index;
    }

    @Override
    public String toString() {
        return "Notification{" +
                "index=" + SNindex +
                ", name='" + title + '\'' +
                ", descriptionUrl='" + url + '\'' +
                '}';
    }

    public SubCategory getSubCategory() {
        return subcategory;
    }

    public void setSubCategory(SubCategory subCategory) {
        subcategory = subCategory;
    }
    
    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }
}
