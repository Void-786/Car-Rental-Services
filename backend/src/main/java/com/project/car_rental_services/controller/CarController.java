package com.project.car_rental_services.controller;

import com.project.car_rental_services.service.CarService;

public class CarController {

    private final CarService carService;
    public CarController(CarService carService) {
        this.carService = carService;
    }

}
