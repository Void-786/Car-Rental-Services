package com.project.car_rental_services.controller;

import com.project.car_rental_services.modal.Car;
import com.project.car_rental_services.service.CarService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/cars")
public class CarController {

    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @PostMapping("/add/new-car")
    public ResponseEntity<?> addCar(@RequestParam("name") String name, @RequestParam("image") MultipartFile image, @RequestParam("type") String type, @RequestParam("seats") Integer seats) throws IOException {
        try {
            carService.addCar(name, image, type, seats);
            return ResponseEntity.ok("Car Added Successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading image: " + e.getMessage());
        }
    }

    @GetMapping("/get-car")
    public ResponseEntity<Car> getCarById(@RequestParam("carId") Integer id) {
        Optional<Car> car = carService.getCarById(id);
        return car.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(null));
    }

    @DeleteMapping("/delete/delete-car")
    public ResponseEntity<?> deleteCar(@RequestParam("carId") Integer id) {
        carService.deleteCarById(id);
        return ResponseEntity.ok("Car deleted Successfully");
    }

    @GetMapping("/all-cars")
    public ResponseEntity<List<Car>> getAllCars() {
        try {
            List<Car> cars = carService.getAllCars();
            return ResponseEntity.ok(cars);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PutMapping("/update/update-car")
    public ResponseEntity<?> updateCar(
            @RequestParam("carId") Integer id,
            @RequestParam("name") String name,
            @RequestParam(value = "newImage", required = false) MultipartFile newImage,
            @RequestParam("type") String type,
            @RequestParam("seats") Integer seats
    ) {
        try {
            Optional<Car> existingCar = carService.getCarById(id);
            if (existingCar.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Car not found");
            }

            Car car = existingCar.get();

            car.setName(name);
            car.setType(type);
            car.setSeats(seats);

            if (newImage != null && !newImage.isEmpty()) {
                byte[] newImageBytes = newImage.getBytes();
                car.setImage(newImageBytes);
            } else {
                byte[] currentImageBytes = car.getImage();
                if (currentImageBytes == null) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No image found for the car in the database");
                }
                car.setImage(currentImageBytes);
            }

            Car updatedCar = carService.updateCar(id, car);
            return ResponseEntity.ok(updatedCar);

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing image");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating car");
        }
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
