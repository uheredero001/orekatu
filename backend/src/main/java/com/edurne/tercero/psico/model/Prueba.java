package com.edurne.tercero.psico.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Prueba {

	@Id
	private Integer id;
	
	private String descripcion;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
}
