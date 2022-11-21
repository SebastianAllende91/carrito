package com.carrito.tpFinal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carrito.tpFinal.models.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{
	Usuario findByEmailAndPassword(String email,String password);
	Usuario findByUsuario(String usuario);
}
