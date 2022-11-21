package com.carrito.tpFinal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carrito.tpFinal.models.Carrito;

@Repository
public interface CarritoRepository extends JpaRepository<Carrito, Integer> {
	
	List<Carrito> findByCliente_Id(int clientId);
	List<Carrito> findByCliente_Usuario(String usuario);
	void deleteByCliente_Id(int clientId);
	Long countByCliente_Id(int id);
	
//	void deleteByArticulo_CodArticulo(int id);
}
