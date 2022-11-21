package com.carrito.tpFinal.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Carrito {

	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private int id;

	@OneToMany
	private List<Articulo> articulos;/* = new ArrayList<>();*/

	
	 @OneToOne(cascade = CascadeType.MERGE)
	 @JoinColumn(name = "usuario_id", referencedColumnName = "id")
	private Usuario cliente;

	@NotNull
	private double monto;

	public Carrito() {
	}

	public Carrito(int id,  Usuario cliente/*, @NotNull int monto*/) {
		this.id = id;
		//this.monto = monto;
		this.cliente=cliente;
	}
	

	public Carrito(int id, List<Articulo> articulos, Usuario cliente/*, @NotNull int monto*/) {
		this.id = id;
		this.articulos = articulos;
		this.cliente = cliente;
		/*this.monto = monto;*/
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<Articulo> getArticulos() {
		return articulos;
	}

	public void setArticulos(List<Articulo> articulos) {
		this.articulos = articulos;
	}


	public Usuario getCliente() {
		return cliente;
	}

	public void setCliente(Usuario cliente) {
		this.cliente = cliente;
	}

	public double getMonto() {
		return monto;
	}

	public void setMonto(double monto) {
		this.monto = monto;
	}

	@Override
	public String toString() {
		return "Carrito [id=" + id + ", monto=" + monto + "]";
	}
	
	
}
