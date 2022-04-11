package com.patisserie.onlineshop.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.patisserie.onlineshop.model.Menu;
import com.patisserie.onlineshop.repository.MenuRepository;


@Service
public class MenuService {
	@Autowired
	private MenuRepository menuRepository ;
	
	public MenuService() {		
		System.out.println("inside menu serives construtor");
//		menuRepository.findAll().stream().forEach(e -> System.out.println(e.getName()));
	}

	public List<Menu> findAll() {
		return menuRepository.findAll();
		
	}
	
}
