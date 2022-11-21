package com.carrito.tpFinal.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carrito.tpFinal.models.Articulo;
import com.carrito.tpFinal.models.Carrito;
import com.carrito.tpFinal.models.Factura;
import com.carrito.tpFinal.repositories.CarritoRepository;
import com.carrito.tpFinal.repositories.FacturaRepository;

@Service
@Transactional
public class CarritoService {
	@Autowired
	private CarritoRepository carritoRepository; 
	
	@Autowired
	private ArticuloService articuloService;
	
	@Autowired
	private FacturaRepository facturaRepository;

	public List<Carrito> listar() {
		return this.carritoRepository.findAll();
	}

	public void addProduct(Carrito shoppingCart) {
		List<Articulo> lista = shoppingCart.getArticulos();
		// Calcula el monto total del carrito.
		double monto = lista.stream()
				.mapToDouble(
						shoppingCartItem -> shoppingCartItem.getPrecio())
				.sum(); 
		
		// Actualizamos el stock en la compra
		lista.stream().forEach(p-> {
			int id = p.getCodArticulo();
			Articulo a = articuloService.getArticuloById(id).get();
			
			int cantidad = (int) (p.getPrecio()/ a.getPrecio());
			a.setStock(a.getStock() - cantidad);
			
			this.articuloService.guardarArticulo(a);
		});
				
		shoppingCart.setMonto(monto);
		
		this.carritoRepository.save(shoppingCart);
		
		// aca genero el detalle
		Factura factura = new Factura();
		factura.setFecha(new Date());
		//factura.setUsuario(shoppingCart.getCliente());
		factura.setCarrito(shoppingCart);
		factura.setTotal(monto);
		
		System.out.println(factura);
		this.facturaRepository.save(factura);	
	}
	
}
