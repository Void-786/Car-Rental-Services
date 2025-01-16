package com.project.car_rental_services.modal;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String type;

    private String transmissionType;

    private Double price;

    @Lob
    private byte[] image;

    @ElementCollection
    @CollectionTable(name = "car_highlights", joinColumns = @JoinColumn(name = "car_id"))
    private List<String> highlights;

    @Embedded
    private Specs specs;

    public Car(Integer id, String name, String type, String transmissionType, Double price, byte[] image, List<String> highlights, Specs specs) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.transmissionType = transmissionType;
        this.price = price;
        this.image = image;
        this.highlights = highlights;
        this.specs = specs;
    }

    public Car() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTransmissionType() {
        return transmissionType;
    }

    public void setTransmissionType(String transmissionType) {
        this.transmissionType = transmissionType;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public List<String> getHighlights() {
        return highlights;
    }

    public void setHighlights(List<String> highlights) {
        this.highlights = highlights;
    }

    public Specs getSpecs() {
        return specs;
    }

    public void setSpecs(Specs specs) {
        this.specs = specs;
    }

    @Embeddable
    public static class Specs {

        private String engine;

        private String mileage;

        private Integer seats;

        private String transmission;

        public Specs() {
        }

        public Specs(String engine, String mileage, Integer seats, String transmission) {
            this.engine = engine;
            this.mileage = mileage;
            this.seats = seats;
            this.transmission = transmission;
        }

        public String getEngine() {
            return engine;
        }

        public void setEngine(String engine) {
            this.engine = engine;
        }

        public String getMileage() {
            return mileage;
        }

        public void setMileage(String mileage) {
            this.mileage = mileage;
        }

        public Integer getSeats() {
            return seats;
        }

        public void setSeats(Integer seats) {
            this.seats = seats;
        }

        public String getTransmission() {
            return transmission;
        }

        public void setTransmission(String transmission) {
            this.transmission = transmission;
        }
    }
}
