package com.project.car_rental_services.modal;

import jakarta.persistence.Embeddable;

@Embeddable
public class Itinerary {

    private Integer day;
    private String heading;
    private String description;

    public Itinerary() {
    }

    public Itinerary(Integer day, String heading, String description) {
        this.day = day;
        this.heading = heading;
        this.description = description;
    }

    public Integer getDay() {
        return day;
    }

    public void setDay(Integer day) {
        this.day = day;
    }

    public String getHeading() {
        return heading;
    }

    public void setHeading(String heading) {
        this.heading = heading;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
