package com.carrito.tpFinal.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carrito.tpFinal.models.Factura;
import com.carrito.tpFinal.repositories.FacturaRepository;

@Service
@Transactional
public class FacturaService {
	
	@Autowired
	private FacturaRepository facturaRepository;
	
	public List<Factura> getList() {
		return this.facturaRepository.findAll();
	}
	
	

}
