package com.patisserie.onlineshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.patisserie.onlineshop.model.Menu;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {

}
