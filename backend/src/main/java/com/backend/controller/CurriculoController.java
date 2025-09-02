package com.backend.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.Curriculo;
import com.backend.service.CurriculoService;

import jakarta.validation.Valid;

 
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/curriculos")
public class CurriculoController {

    private final CurriculoService service;

    public CurriculoController(CurriculoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Curriculo> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public Curriculo buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    @PostMapping
public Curriculo criar(@RequestBody @Valid Curriculo curriculo) {
    curriculo.setCreatedAt(LocalDateTime.now());
    return service.salvar(curriculo);
}

    @PutMapping("/{id}")
    public Curriculo atualizar(@PathVariable Long id,
                               @RequestBody @Valid Curriculo dados) {
        Curriculo existente = service.buscarPorId(id);

        existente.setObjetivo(dados.getObjetivo());
        existente.setFormacao(dados.getFormacao());
        existente.setHabilidades(dados.getHabilidades());
        existente.setExperienciasProfissionais(dados.getExperienciasProfissionais());
        existente.setPerfilProfissional(dados.getPerfilProfissional());

        return service.salvar(existente);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }
}