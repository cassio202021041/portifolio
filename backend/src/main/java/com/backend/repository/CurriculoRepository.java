package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.model.Curriculo;

public interface CurriculoRepository extends JpaRepository<Curriculo, Long> {
}