package com.project.car_rental_services.service;

import com.project.car_rental_services.modal.Car;
import com.project.car_rental_services.repository.CarRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {

    private final CarRepository carRepo;

    public CarService(CarRepository carRepo) {
        this.carRepo = carRepo;
    }

    public void addCar(String name, byte[] image, String type, Integer seats) {
        Car car = new Car();
        car.setName(name);
        car.setImage(image);
        car.setType(type);
        car.setSeats(seats);
        carRepo.save(car);
    }

    public Optional<Car> getCarById(Integer id) {
        return carRepo.findById(id);
    }

    public void deleteCarById(Integer id) {
        carRepo.deleteById(id);
    }

    public List<Car> getAllCars() {
        return carRepo.findAll();
    }

    public Car updateCar(Integer id, Car updatedCar) {
        Optional<Car> existingCarOptional = carRepo.findById(id);

        if(existingCarOptional.isPresent()) {
            Car existingCar = existingCarOptional.get();
            existingCar.setName(updatedCar.getName());
            existingCar.setImage(updatedCar.getImage());
            existingCar.setType(updatedCar.getType());
            existingCar.setSeats(updatedCar.getSeats());
            return carRepo.save(existingCar);
        }
        else {
            throw new RuntimeException("Car with Id " + id + " not found");
        }
    }

/*
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
*/
}
