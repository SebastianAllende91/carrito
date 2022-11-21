package com.carrito.tpFinal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carrito.tpFinal.models.Articulo;

@Repository
public interface ArticuloRepository extends JpaRepository<Articulo, Integer>{
	List<Articulo> findFirst6ByOrderByPrecioAsc();
	//List<Articulo> findByCategoria(String categoria)
}
