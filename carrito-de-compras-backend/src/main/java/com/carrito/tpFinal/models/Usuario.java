package com.carrito.tpFinal.models;

import java.io.Serializable;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.carrito.tpFinal.enumaraciones.Rol;

@Entity
@Table(name = "usuarios")
public class Usuario implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private int id;

	@NotBlank
	@NotNull
	private String usuario;

	@NotBlank
	@NotNull
	@Column(length = 10)
	private String password;

	@NotBlank
	@NotNull
	private String email;

	@Enumerated(EnumType.STRING)
	private Rol rol;
	
	
	@Column(name = "activo")
	private boolean estaLogueado = false;
	
	  @OneToOne(mappedBy = "cliente")
	  private Carrito carrito;
	

	public Usuario() {
	}



	public Usuario(int id, @NotBlank @NotNull String usuario, @NotBlank @NotNull String password,
			@NotBlank @NotNull String email, Rol rol, boolean estaLogueado) {
		this.id = id;
		this.usuario = usuario;
		this.password = password;
		this.email = email;
		this.rol = rol;
		this.estaLogueado = estaLogueado;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Rol getRol() {
		return rol;
	}

	public void setRol(Rol rol) {
		this.rol = rol;
	}

	public boolean isEstaLogueado() {
		return estaLogueado;
	}

	public void setEstaLogueado(boolean estaLogueado) {
		this.estaLogueado = estaLogueado;
	}


	@Override
	public String toString() {
		return "Usuario [id=" + id + ", usuario=" + usuario + ", password=" + password + ", email=" + email + ", rol="
				+ rol + "]";
	}

}
