package com.project.car_rental_services.service;

import com.project.car_rental_services.modal.Car;
import com.project.car_rental_services.repository.CarRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {

    private final CarRepository carRepo;

    public CarService(CarRepository carRepo) {
        this.carRepo = carRepo;
    }

    public void addNewCar(String name, String type, String transmissionType, Double price, byte[] image, List<String> highlights, Car.Specs specs) {
        Car car = new Car();
        car.setName(name);
        car.setType(type);
        car.setTransmissionType(transmissionType);
        car.setPrice(price);
        car.setImage(image);
        car.setHighlights(highlights);
        car.setSpecs(specs);
        carRepo.save(car);
    }

}
