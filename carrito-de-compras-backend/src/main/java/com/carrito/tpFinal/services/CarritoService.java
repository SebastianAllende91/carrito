package com.carrito.tpFinal.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carrito.tpFinal.models.Articulo;
import com.carrito.tpFinal.models.Carrito;
import com.carrito.tpFinal.repositories.CarritoRepository;

@Service
@Transactional
public class CarritoService {
	@Autowired
	private CarritoRepository carritoRepository; 
	
	@Autowired
	private ArticuloService articuloService;

	public List<Carrito> getListByClient(/*String userName*/) {
		//return this.carritoRepository.findByCliente_Usuario(/*userName*/);
		return this.carritoRepository.findAll();
	}

	public void cleanShoppingCart(int clientId) {
		this.carritoRepository.deleteByCliente_Id(clientId);
	}

	/*
	 * public void removeProduct(int id) {
	 * this.carritoRepository.deleteByArticulo_CodArticulo(id);
	 * 
	 * //this.carritoRepository.deleteById(id); }
	 */

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
			
			//System.out.println(a.getStock());
			this.articuloService.guardarArticulo(a);
		});
				
		System.out.println(monto);		
		shoppingCart.setMonto(monto);
		this.carritoRepository.save(shoppingCart);
	}

	public Long getCountByClient(int clientId) {
		return this.carritoRepository.countByCliente_Id(clientId);
	}
}
