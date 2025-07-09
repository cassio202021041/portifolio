import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss']
})
export class CurriculoFormComponent implements OnInit {
  curriculoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.curriculoForm = this.fb.group({
      objetivo: [''],
      formacao: [''],
      habilidades: [''],
      experiencias_profissionais: [''],
      perfil_profissional: [''],
      created_at: [''],
    });
  }

  onSubmit(): void {
    if (this.curriculoForm.valid) {
      console.log('Dados do formulário:', this.curriculoForm.value);
      // Aqui pode ir o código para envio à API
    }
  }
}
