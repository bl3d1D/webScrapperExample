package com.example.Start.Entities;

public class CategoryWithSubcategory {


    private String title;
    private int index;
    private String Url;

    public CategoryWithSubcategory(){}

    public CategoryWithSubcategory(String title, String SubCategoryUrl,int index) {
        this.title = title;
        this.index=index;
        this.Url = SubCategoryUrl;
    }


    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getUrl() {
        return Url;
    }
    public void setUrl(String SubCategoryUrl) {
        this.Url = SubCategoryUrl;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }
}

