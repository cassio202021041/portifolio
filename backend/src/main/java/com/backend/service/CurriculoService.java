package com.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.backend.model.Curriculo;
import com.backend.repository.CurriculoRepository;

@Service
public class CurriculoService {

    private final CurriculoRepository repository;

    public CurriculoService(CurriculoRepository repository) {
        this.repository = repository;
    }

    public List<Curriculo> listarTodos() {
        return repository.findAll();
    }

    public Curriculo buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Currículo não encontrado"));
    }

    public Curriculo salvar(Curriculo curriculo) {
        return repository.save(curriculo);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}