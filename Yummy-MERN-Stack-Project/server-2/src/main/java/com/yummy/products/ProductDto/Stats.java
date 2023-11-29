package com.yummy.products.ProductDto;

public class Stats {
    private double rating;
    private int reviewCount;

    // Constructor, getters, and setters

    public Stats(double rating, int reviewCount) {
        this.rating = rating;
        this.reviewCount = reviewCount;
    }

    public Stats() {
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public int getReviewCount() {
        return reviewCount;
    }

    public void setReviewCount(int reviewCount) {
        this.reviewCount = reviewCount;
    }
}
