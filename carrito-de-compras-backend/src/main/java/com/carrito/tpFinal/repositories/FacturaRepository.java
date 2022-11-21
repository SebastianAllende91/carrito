package com.carrito.tpFinal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carrito.tpFinal.models.Factura;

@Repository
public interface FacturaRepository extends JpaRepository<Factura, Integer> {

}
