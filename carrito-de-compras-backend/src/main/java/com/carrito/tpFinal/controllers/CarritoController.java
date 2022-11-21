package com.carrito.tpFinal.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carrito.tpFinal.models.Carrito;
import com.carrito.tpFinal.models.Mensaje;
import com.carrito.tpFinal.services.CarritoService;

@RestController
@RequestMapping("/api/v1")
public class CarritoController {

	
	@Autowired
	private CarritoService carritoService;
	
	@GetMapping("/carrito")
	public ResponseEntity<List<Carrito>> getListByClient(/*@RequestBody Usuario user*/){
		/*String userName = user.getUsuario();*/
		return new ResponseEntity<>(this.carritoService.getListByClient(/*userName*/),HttpStatus.OK);
	}
	
	
	@GetMapping("/carrito/cantidad/{id}")
	public ResponseEntity<Long> countByCliente(@PathVariable("id") int id){
		return new ResponseEntity<>(this.carritoService.getCountByClient(id),HttpStatus.OK);
	}
	
	@PostMapping("/carrito")
	public ResponseEntity<Carrito> addProduct(@Valid @RequestBody Carrito carrito,BindingResult bindingResult){
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		this.carritoService.addProduct(carrito);
		return new ResponseEntity<>(carrito,HttpStatus.OK);
	}
	
	@DeleteMapping("/carrito/limpiar/{id}")
	public ResponseEntity<Mensaje> limpiarProducto(@PathVariable("id")int id){
		
		
		//this.carritoService.removeProduct(id);
		return new ResponseEntity<>(new Mensaje("Eliminado"),HttpStatus.OK);
	}
	
}
