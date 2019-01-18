package com.qc.developer.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.qc.developer.demo.Car;

@RepositoryRestResource
public interface CarRepository extends CrudRepository<Car, Long> {
}