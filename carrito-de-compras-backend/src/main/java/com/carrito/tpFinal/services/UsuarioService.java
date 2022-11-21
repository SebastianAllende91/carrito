package com.carrito.tpFinal.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carrito.tpFinal.enumaraciones.Rol;
import com.carrito.tpFinal.models.Usuario;
import com.carrito.tpFinal.models.DTO.LoginForm;
import com.carrito.tpFinal.repositories.UsuarioRepository;

@Service
@Transactional
public class UsuarioService {

	@Autowired
	private UsuarioRepository repo;


	public List<Usuario> obtenerUsuarios() {
		return repo.findAll();
	}
	
	public Usuario obtenerUsuario(int id) throws Exception {
		Optional<Usuario> usuarioOptional = repo.findById(id);
		Usuario user = null;

		if (usuarioOptional.isPresent()) {
			user = usuarioOptional.get();
			return user;
		} else {
			throw new Exception("Usuario no encontrado con el id: " + id);
		}

	}

	
	@Transactional(readOnly = false)
	public Usuario crearUsuario(Usuario usuario) throws Exception  {

		validarCampos(usuario.getUsuario(), usuario.getPassword(), usuario.getEmail());

		Usuario user = new Usuario();
		user.setUsuario(usuario.getUsuario());
		user.setPassword(usuario.getPassword());
		user.setEmail(usuario.getEmail());
		if(usuario.getRol() == null || usuario.getRol().toString() == "") {
			user.setRol(Rol.USER);			
		}else {
			user.setRol(usuario.getRol());
		}
		return repo.save(user);
	}

	@Transactional(readOnly = false)
	public Usuario editarUsuario(Usuario usuario) throws Exception {
		System.out.println(usuario);
		Optional<Usuario> usuarioOptional = repo.findById(usuario.getId());
		Usuario user = null;

		if (usuarioOptional.isPresent()) {
			user = usuarioOptional.get();

			validarCampos(usuario.getUsuario(), usuario.getPassword(), usuario.getEmail());
			user.setUsuario(usuario.getUsuario());
			user.setEmail(usuario.getEmail());
			user.setPassword(usuario.getPassword());
			user.setRol(usuario.getRol());
			return repo.save(user);
		} else {
			throw new Exception("Usuario no encontrado con el id: " + usuario.getId());
		}
	}

	public void borrarUsuario(int id) throws Exception {
		Optional<Usuario> usuarioOptional = repo.findById(id);

		if (usuarioOptional.isPresent()) {
			repo.deleteById(usuarioOptional.get().getId());
		} else {
			throw new Exception("Usuario no encontrado con el id: " + id);
		}

	}


	public Usuario findByEmailAndPassword(LoginForm datos) throws Exception {

		System.out.println("Email: " + datos.getEmail() + ", Password: " + datos.getPassword());

		Usuario user = repo.findByEmailAndPassword(datos.getEmail(), datos.getPassword());

		if (user == null) {
			System.out.println("Error usuario no encontrado.");
			throw new Exception("Credenciales incorrectas.");
		}
		user.setEstaLogueado(true);
		this.repo.save(user);
		return user;
	}
	


	private void validarCampos(String usuario, String password, String email) throws Exception  {
		if (usuario.isEmpty() || usuario == null) {
			throw new Exception("El campo Usuario no puede venir vacio");
		}

		if (password.isEmpty() || password == null) {
			throw new Exception("El campo Password no puede venir vacio");
		}

		if (email.isEmpty() || email == null) {
			throw new Exception("El campo Email no puede venir vacio");
		}
	}

	public Usuario getByUserName(String userName) {
		
		return this.repo.findByUsuario(userName);
	}
}








