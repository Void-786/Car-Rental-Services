package com.project.car_rental_services.service;

import com.project.car_rental_services.modal.TourPackage;
import com.project.car_rental_services.modal.Place;
import com.project.car_rental_services.repository.PackageRepository;
import com.project.car_rental_services.repository.PlaceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackageService {

    private final PackageRepository packageRepo;
    private final PlaceRepository placeRepo;

    public PackageService(PackageRepository packageRepo, PlaceRepository placeRepo) {
        this.packageRepo = packageRepo;
        this.placeRepo = placeRepo;
    }

    public void addPackage(int placeId, TourPackage tourPackage) {
        Place place = placeRepo.findById(placeId).orElseThrow(() -> new RuntimeException("Place not found"));
        tourPackage.setPlace(place);
        packageRepo.save(tourPackage);
    }

    public void updatePackage(int packageId, TourPackage updatedPackage){
        TourPackage existingPackage = packageRepo.findById(packageId).orElseThrow(() -> new RuntimeException("Package not found"));

        existingPackage.setTitle(updatedPackage.getTitle());
        existingPackage.setDuration(updatedPackage.getDuration());
        existingPackage.setPrice(updatedPackage.getPrice());
        existingPackage.setTour_highlight(updatedPackage.getTour_highlight());
        existingPackage.setLocations(updatedPackage.getLocations());
        existingPackage.setItinerary_heading(updatedPackage.getItinerary_heading());
        existingPackage.setItinerary(updatedPackage.getItinerary());

        packageRepo.save(existingPackage);
    }

    public void removePackage(int packageId){
        if(!packageRepo.existsById(packageId)) {
            throw new RuntimeException("Package not found");
        }

        packageRepo.deleteById(packageId);
    }

    public List<TourPackage> getAllPackages(){
        return packageRepo.findAll();
    }
}
