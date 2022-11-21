package com.carrito.tpFinal.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "articulos")
public class Articulo {

	@Id 
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private int codArticulo;
	
	@NotBlank @NotNull
	private String nombre;
	
	@Column(length = 60)
	private String descripcion;
	
	@NotNull @DecimalMin(value = "0.1")
	private double precio;
	
	@NotNull
	private int stock;
	
	@NotBlank @NotNull
	private String categoria;
	
	private String imagen;
	
	public Articulo() {
	}

	public Articulo(int codArticulo, String nombre, String descripcion, double precio, int stock, String categoria,
			String imagen) {
		this.codArticulo = codArticulo;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.precio = precio;
		this.stock = stock;
		this.categoria = categoria;
		this.imagen = imagen;
	}


	public int getCodArticulo() {
		return codArticulo;
	}

	public void setCodArticulo(int codArticulo) {
		this.codArticulo = codArticulo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	
	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	@Override
	public String toString() {
		return "Articulo [ nombre=" + nombre + ", descripcion=" + descripcion
				+ ", precio=" + precio + ", stock=" + stock + ", categoria=" + categoria + ", imagen=" + imagen
				+  "]";
	}

	
}
