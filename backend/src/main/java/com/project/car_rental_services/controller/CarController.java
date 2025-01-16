package com.project.car_rental_services.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.car_rental_services.modal.Car;
import com.project.car_rental_services.service.CarService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarController {

    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @PostMapping("/add/new-car")
    public ResponseEntity<?> addNewCar(@RequestParam("name") String name, @RequestParam("type") String type, @RequestParam("transmission_type") String transmissionType, @RequestParam("price") Double price,@RequestParam("image") MultipartFile image,@RequestParam("highlights") List<String> highlights,@RequestPart("specs") String specsJson) {
        byte[] imageBytes;
        try {
            imageBytes = image.getBytes();
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

        Car.Specs specs = convertJsonToSpecs(specsJson);
        if (specs == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(null);
        }

        carService.addNewCar(name, type, transmissionType, price, imageBytes, highlights, specs);
        return ResponseEntity.ok("Car Added Successfully!");
    }

    private Car.Specs convertJsonToSpecs(String specsJson) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(specsJson, Car.Specs.class);
        } catch (Exception e) {
            return null;
        }
    }
}
