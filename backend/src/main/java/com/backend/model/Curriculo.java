package com.backend.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "curriculo")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Curriculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String objetivo;
    private String formacao;
    private String habilidades;

    @Column(name = "experiencias_profissionais")
    private String experienciasProfissionais;

    @Column(name = "perfil_profissional")
    private String perfilProfissional;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}