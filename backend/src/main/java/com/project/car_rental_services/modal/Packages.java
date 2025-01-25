package com.project.car_rental_services.modal;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "packages")
public class Packages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;

    private String duration;

    private byte[] image;

    @ElementCollection
    @CollectionTable(name = "package_images", joinColumns = @JoinColumn(name = "package_id"))
    private List<byte[]> images;

    private String description;

    @ElementCollection
    @CollectionTable(name = "package_highlights", joinColumns = @JoinColumn(name = "package_id"))
    private List<String> highlights;

    private Double price;

    @ElementCollection
    @CollectionTable(name = "package_locations", joinColumns = @JoinColumn(name = "package_id"))
    private List<String> locations;

    private Double rating;

    private Integer reviews;

    @ElementCollection
    @CollectionTable(name = "package_includes", joinColumns = @JoinColumn(name = "package_id"))
    private List<String> included;

    private String Category;

    private Date date;

    private Integer maxGroupSize;

    public Packages(Integer id, String title, String duration, byte[] image, List<byte[]> images, String description, List<String> highlights, Double price, List<String> locations, Double rating, Integer reviews, List<String> included, String category, Date date, Integer maxGroupSize) {
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.image = image;
        this.images = images;
        this.description = description;
        this.highlights = highlights;
        this.price = price;
        this.locations = locations;
        this.rating = rating;
        this.reviews = reviews;
        this.included = included;
        Category = category;
        this.date = date;
        this.maxGroupSize = maxGroupSize;
    }

    public Packages() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public List<byte[]> getImages() {
        return images;
    }

    public void setImages(List<byte[]> images) {
        this.images = images;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getHighlights() {
        return highlights;
    }

    public void setHighlights(List<String> highlights) {
        this.highlights = highlights;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public List<String> getLocations() {
        return locations;
    }

    public void setLocations(List<String> locations) {
        this.locations = locations;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Integer getReviews() {
        return reviews;
    }

    public void setReviews(Integer reviews) {
        this.reviews = reviews;
    }

    public List<String> getIncluded() {
        return included;
    }

    public void setIncluded(List<String> included) {
        this.included = included;
    }

    public String getCategory() {
        return Category;
    }

    public void setCategory(String category) {
        Category = category;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getMaxGroupSize() {
        return maxGroupSize;
    }

    public void setMaxGroupSize(Integer maxGroupSize) {
        this.maxGroupSize = maxGroupSize;
    }
}
