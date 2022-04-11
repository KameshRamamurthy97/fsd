package com.patisserie.onlineshop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.patisserie.onlineshop.model.Menu;
import com.patisserie.onlineshop.service.MenuService;

@RestController
@RequestMapping("/menus")
public class MenuController {
	@Autowired
	private MenuService menuService;
	 
	@GetMapping
	public List<Menu> findAll() {
				
		return menuService.findAll();
	}
}
