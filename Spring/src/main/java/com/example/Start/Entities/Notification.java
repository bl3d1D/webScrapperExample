package com.example.Start.Entities;


import javax.persistence.*;

@Entity
@Table(name = "Notification")
public class Notification {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private int Nindex;
    private String title;
    private String url;

    @ManyToOne
    @JoinColumn
    private Category category;

    @Column(columnDefinition = "TEXT")
    private String details;


    public Notification(){}

    public Notification(String name, String descriptionUrl, int index) {
            this.title = name;
            this.url = descriptionUrl;
            this.Nindex=index;
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
            return Nindex;
    }

    public void setIndex(int index) {
            this.Nindex = index;
    }

    @Override
    public String toString() {
        return "Notification{" +
                "index=" + Nindex +
                ", name='" + title + '\'' +
                ", descriptionUrl='" + url + '\'' +
                '}';
    }

    public Category getCategory() {
            return category;
    }

    public void setCategory(Category category) {
            this.category = category;
    }
    
    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }
}
