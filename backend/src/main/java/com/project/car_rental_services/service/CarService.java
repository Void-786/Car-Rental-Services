package com.project.car_rental_services.service;

import com.project.car_rental_services.modal.Car;
import com.project.car_rental_services.repository.CarRepository;

public class CarService {

    private final CarRepository carRepo;
    public CarService(CarRepository carRepo) {
        this.carRepo = carRepo;
    }

}
