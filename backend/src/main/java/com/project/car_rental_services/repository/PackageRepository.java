package com.project.car_rental_services.repository;

import com.project.car_rental_services.modal.Packages;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackageRepository extends JpaRepository<Packages, Integer> {
}
