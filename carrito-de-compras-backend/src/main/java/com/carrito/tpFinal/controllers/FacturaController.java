package com.carrito.tpFinal.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carrito.tpFinal.models.Factura;
import com.carrito.tpFinal.services.FacturaService;

@RestController
@RequestMapping("/api/v1")
public class FacturaController {

	@Autowired
	private FacturaService facturaService;
	
	@GetMapping("/facturas")
	public ResponseEntity<List<Factura>> getList(){
		
		return new ResponseEntity<>(this.facturaService.getList(),HttpStatus.OK);
	}
}
