package com.project.car_rental_services.controller;

import com.project.car_rental_services.service.PackageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/packages")
public class PackageController {

    private final PackageService packageService;

    public PackageController(PackageService packageService) {
        this.packageService = packageService;
    }

    @PostMapping("/add/new-package")
    public ResponseEntity<?> addNewPackage(String title, String duration, MultipartFile image, List<MultipartFile> images, String description, List<String> highlights, Double price, List<String> locations, Double rating, Integer reviews, List<String> included, String category, Date date, Integer maxGroupSize) {
        byte[] imageBytes;
        List<byte[]> imageBytesList = new ArrayList<>();
        try {
            imageBytes = image.getBytes();
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

        for (MultipartFile img : images) {
            try {
                byte[] imgBytes = img.getBytes();
                imageBytesList.add(imgBytes);
            } catch (IOException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing additional images");
            }
        }

        packageService.addNewPackage(title, duration, imageBytes, imageBytesList, description, highlights, price, locations, rating, reviews, included, category, date, maxGroupSize);
        return ResponseEntity.ok("Package Added Successfully!");
    }
}
