import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CurriculoService } from '../../services/curriculo.service';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss']
})
export class CurriculoComponent implements OnInit {

  curriculoForm!: FormGroup;
  curriculoId!: number;

  constructor(
    private fb: FormBuilder,
    private curriculoService: CurriculoService
  ) {}

   ngOnInit(): void {
    this.curriculoService.getCurriculo().subscribe(data => {
      if (Array.isArray(data) && data.length > 0) {
        const curriculo = data[0];
        this.curriculoForm = this.fb.group({
          id: [curriculo.id],
          objetivo: [curriculo.objetivo],
          formacao: [curriculo.formacao],
          habilidades: [curriculo.habilidades],
          experienciasProfissionais: [curriculo.experiencias_profissionais],
          perfilProfissional: [curriculo.perfil_profissional],
          created_at: [curriculo.created_at]
        });
      }
    });
  }

   salvar(): void {
    if (this.curriculoForm.valid) {
      const id = this.curriculoForm.value.id;
      this.curriculoService.update(id, this.curriculoForm.value).subscribe({
        next: res => {
          alert('Currículo salvo com sucesso!');
        },
        error: err => {
          console.error('Erro ao salvar:', err);
        }
      });
    }
  }
}
