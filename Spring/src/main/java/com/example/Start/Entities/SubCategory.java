package com.example.Start.Entities;

import java.util.Set;
import javax.persistence.*;

@Entity
@Table(name="subcategory")
public class SubCategory {
	
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private String url;
    private int SCindex;

    @ManyToOne
    @JoinColumn
    private Category category;


    @OneToMany(mappedBy = "subcategory", cascade = CascadeType.ALL)
    private Set<SubNotification> SubNotification;

    public SubCategory(){}

    public SubCategory(String title, String url, int SCindex) {
        this.title = title;
        this.url = url;
        this.SCindex = SCindex;
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

    public void setTitle(String subTitle) {
            this.title = title;
    }

    public String getUrl() {
            return url;
    }
    public void setUrl(String NotificationUrl) {
            this.url = NotificationUrl;
    }
    public int getSCindex () { return SCindex; }

    public void setSCindex ( int SCindex )  { this.SCindex=SCindex; }


    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }





}
