package com.yummy.products.ProductDto;

public class ProductDTO {
    private Long id;
    private String title;
    private String description;
    private String info;
    private double price;
    private String image;
    private Stats stats;

    // Constructor, getters, and setters


    public ProductDTO(Long id, String title, String description, String info, double price, String image, Stats stats) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.info = info;
        this.price = price;
        this.image = image;
        this.stats = stats;
    }

    public ProductDTO() {
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

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Stats getStats() {
        return stats;
    }

    public void setStats(Stats stats) {
        this.stats = stats;
    }
}
