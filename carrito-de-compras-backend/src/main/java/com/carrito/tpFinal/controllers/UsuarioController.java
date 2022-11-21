package com.carrito.tpFinal.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carrito.tpFinal.models.Usuario;
import com.carrito.tpFinal.models.DTO.LoginForm;
import com.carrito.tpFinal.services.UsuarioService;


@RestController
@RequestMapping("/api/v1")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping("/usuarios")
	public List<Usuario> listarUsuarios(){
		return usuarioService.obtenerUsuarios();
	}
	
	@GetMapping("/usuario/{id}")
	public ResponseEntity<Usuario> listarId(@PathVariable("id") int id) {
		try {
			Usuario us= usuarioService.obtenerUsuario(id);
			return new ResponseEntity<Usuario>(us, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/registrar")
	public ResponseEntity<Usuario> agregar(@RequestBody Usuario usuario) {
		System.out.println("recibo usuario en controller: "+ usuario);
		try {
			Usuario us= usuarioService.crearUsuario(usuario);
			return new ResponseEntity<Usuario>(us, HttpStatus.ACCEPTED);
		} catch (Exception e) {
			System.err.println("fallo en controller");
			e.printStackTrace();
			return new ResponseEntity<Usuario>(HttpStatus.FORBIDDEN);
		}
	}
	
	@PutMapping("/editarUsuario")
	public ResponseEntity<Usuario> editar(@RequestBody Usuario usuario) {
		try {
			Usuario us= usuarioService.editarUsuario(usuario);
			return new ResponseEntity<Usuario>(us, HttpStatus.ACCEPTED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Usuario>(HttpStatus.FORBIDDEN);
		}
	}
	
	@DeleteMapping("/eliminar/{id}")
	public ResponseEntity<Usuario> eliminar(@PathVariable("id") int id) {
		try {
			usuarioService.borrarUsuario(id);
			return new ResponseEntity<Usuario>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<Usuario> iniciarSesion(@RequestBody LoginForm datos) {
		
		System.out.println("Datos del Login:" + datos);
		
		try {
			Usuario us = usuarioService.findByEmailAndPassword(datos);
			System.out.println("usuario encontrado");
			return new ResponseEntity<Usuario>(us, HttpStatus.ACCEPTED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Usuario>(HttpStatus.UNAUTHORIZED);
		}
	}
	


}
