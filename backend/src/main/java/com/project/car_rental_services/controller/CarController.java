package com.project.car_rental_services.controller;

import com.project.car_rental_services.service.CarService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/cars")
public class CarController {

    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @PostMapping("/add/new-car")
    public ResponseEntity<?> addCar(@RequestParam("name") String name, @RequestParam("image") MultipartFile image) {
        byte[] imageBytes;
        try {
            imageBytes = image.getBytes();
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

        carService.addCar(name, imageBytes);
        return ResponseEntity.ok("Car Added Successfully");
    }

    @DeleteMapping("/delete/delete-car")
    public ResponseEntity<?> deleteCar(@RequestParam("carId") Integer id) {
        carService.deleteCarById(id);
        return ResponseEntity.ok("Car deleted Successfully");
    }

    /*
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
     */
}
