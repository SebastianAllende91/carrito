package com.carrito.tpFinal.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.carrito.tpFinal.models.Articulo;
import com.carrito.tpFinal.repositories.ArticuloRepository;

@Service
@Transactional
public class ArticuloService {

	@Autowired
	private ArticuloRepository articuloRepository;

	/*
	public List<Articulo> getRelatedArticulos(String category, String ArticuloId) {
		List<Articulo> ArticuloList = this.ArticuloRepository.findByCategoryAndIdNot(category, ArticuloId);
		List<Articulo> randomArticulos = new ArrayList<>();
		Random random = new Random();
		for (int i = 0; i < 2; i++) {
			int randomIndex = random.nextInt(ArticuloList.size());
			randomArticulos.add(ArticuloList.get(randomIndex));
			ArticuloList.remove(randomIndex);
		}
		return randomArticulos;
	}*/

	public void guardarArticulo(Articulo articulo) {
		System.out.println("Articulo Alta: "+articulo);
		this.articuloRepository.save(articulo);
	}

	public List<Articulo> getAllArticulos() {
		return this.articuloRepository.findAll();
	}

	public Optional<Articulo> getArticuloById(int id) {
		return this.articuloRepository.findById(id);
	}

	public List<Articulo> getBestPriceArticulos() {
		return this.articuloRepository.findFirst6ByOrderByPrecioAsc();
	}
	
	public void borrar(int id) {
		this.articuloRepository.deleteById(id);	
	}

}
