package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.model.Formulario;

public interface FormularioRepository extends JpaRepository<Formulario, Long> {
}