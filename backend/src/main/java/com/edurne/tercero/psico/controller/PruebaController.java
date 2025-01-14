package com.edurne.tercero.psico.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edurne.tercero.psico.model.Prueba;
import com.edurne.tercero.psico.repository.PruebaRepository;

@RestController
public class PruebaController {
	
	@Autowired
	private PruebaRepository pruebaRepository;
	
	@GetMapping(value="/pruebas")
	public List<Prueba> getAllPruebas() {
		return (List<Prueba>) pruebaRepository.findAll();
	}

}
