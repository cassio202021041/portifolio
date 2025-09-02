package com.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.backend.model.Formulario;
import com.backend.repository.FormularioRepository;

@RestController
@RequestMapping("/api/formulario")
@CrossOrigin(origins = "http://localhost:4200") 
public class FormularioController {

    @Autowired
    private FormularioRepository formularioRepository;

    // POST - CRIAR NOVO FORMULÁRIO
    @PostMapping
    public Formulario criarFormulario(@RequestBody Formulario formulario) {
        return formularioRepository.save(formulario);
    }

    // GET - LISTAR TODOS OS FORMULÁRIOS
    @GetMapping
    public List<Formulario> listarFormularios() {
        return formularioRepository.findAll();
    }

    // GET - BUSCAR FORMULÁRIO POR ID
    @GetMapping("/{id}")
    public ResponseEntity<Formulario> buscarPorId(@PathVariable Long id) {
        return formularioRepository.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // PUT - ATUALIZAR FORMULÁRIO POR ID
    @PutMapping("/{id}")
    public ResponseEntity<Formulario> atualizarFormulario(@PathVariable Long id, @RequestBody Formulario formularioAtualizado) {
        return formularioRepository.findById(id)
            .map(formulario -> {
                formulario.setNome(formularioAtualizado.getNome());
                formulario.setEmail(formularioAtualizado.getEmail());
                formulario.setTelefone(formularioAtualizado.getTelefone());
                formulario.setLinkedin(formularioAtualizado.getLinkedin());
                // Adicione outros campos conforme necessário
                Formulario atualizado = formularioRepository.save(formulario);
                return ResponseEntity.ok(atualizado);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    // DELETE - REMOVER FORMULÁRIO POR ID
    @SuppressWarnings("unused")
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> removerFormulario(@PathVariable Long id) {
        return formularioRepository.findById(id)
            .map(formulario -> {
                formularioRepository.delete(formulario);
                return ResponseEntity.<Void>noContent().build();
            })
            .orElse(ResponseEntity.notFound().build());
    }
}
