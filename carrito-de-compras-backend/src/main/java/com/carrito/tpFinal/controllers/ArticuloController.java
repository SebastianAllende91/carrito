package com.carrito.tpFinal.controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carrito.tpFinal.models.Articulo;
import com.carrito.tpFinal.models.Mensaje;
import com.carrito.tpFinal.services.ArticuloService;

@RestController
@RequestMapping("/api/v1")
public class ArticuloController {
	@Autowired
	private ArticuloService service; 
	
	
	@GetMapping("/articulos")
	public List<Articulo> listarArticulos(){
		return service.getAllArticulos();
	}
	
	@GetMapping("/articulo/{id}")
	public ResponseEntity<Object> mostrarArticulo(@PathVariable("id") int id) {
			Optional<Articulo> art = service.getArticuloById(id);
			if(art.isEmpty()) {
				return new ResponseEntity<>(new Mensaje("Articulo no encontrado!!"),HttpStatus.NOT_FOUND);				
			}
			return new ResponseEntity<>(art.get(),HttpStatus.OK);
	}
	
	@PostMapping("/agregarArticulo")
	public ResponseEntity<Mensaje> crearArticulo(@Valid @RequestBody Articulo articulo,BindingResult bindingResult){
			if(bindingResult.hasErrors()) {
				return new ResponseEntity<>(new Mensaje("Revise los campos!!"),HttpStatus.BAD_REQUEST);				
			}
			this.service.guardarArticulo(articulo);
			return new ResponseEntity<>(new Mensaje("Creado correctamente!"),HttpStatus.OK);
	}
	
	@PutMapping(path = "/editarArticulo/{id}")
	public ResponseEntity<Mensaje> editarArticulo(@Valid @RequestBody Articulo articulo,@PathVariable("id") int id,BindingResult bindingResult){
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<>(new Mensaje("Revise los campos!!") ,HttpStatus.FORBIDDEN);			
		}
			articulo.setCodArticulo(id);
			this.service.guardarArticulo(articulo);
			return new ResponseEntity<>(new Mensaje("Actualizado correctamente!!!"),HttpStatus.OK);
		
		
	}
	
	@DeleteMapping("/eliminarArticulo/{id}")
	public ResponseEntity<Mensaje> eliminarArticulo(@PathVariable("id") int id){
			this.service.borrar(id);
			return new ResponseEntity<>(new Mensaje("Borrado correctamente!!!"),HttpStatus.OK);
		
	}
	
	@GetMapping("/top-seis")
	public List<Articulo> obtenerSeisProductos(){
		return this.service.getBestPriceArticulos();
	}
	
}
