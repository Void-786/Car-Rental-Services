package com.project.car_rental_services.service;

import com.project.car_rental_services.modal.Packages;
import com.project.car_rental_services.repository.PackageRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;

@Service
public class PackageService {

    private final PackageRepository packageRepo;

    public PackageService(PackageRepository packageRepo) {
        this.packageRepo = packageRepo;
    }

    public void addNewPackage(String title, String duration, byte[] image, List<byte[]> images, String description, List<String> highlights, Double price, List<String> locations, Double rating, Integer reviews, List<String> included, String category, Date date, Integer maxGroupSize) {
        Packages packages = new Packages();
        packages.setTitle(title);
        packages.setDuration(duration);
        packages.setImage(image);
        packages.setImages(images);
        packages.setDescription(description);
        packages.setHighlights(highlights);
        packages.setPrice(price);
        packages.setLocations(locations);
        packages.setRating(rating);
        packages.setReviews(reviews);
        packages.setIncluded(included);
        packages.setCategory(category);
        packages.setDate(date);
        packages.setMaxGroupSize(maxGroupSize);
        packageRepo.save(packages);
    }
}