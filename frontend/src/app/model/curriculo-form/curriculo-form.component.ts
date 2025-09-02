import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
})
export class CurriculoFormComponent implements OnInit {
  curriculoForm!: FormGroup;
  formularios: any[] = [];
  editandoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.curriculoForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      linkedin: ['', [Validators.required]]
    });
    this.carregarFormularios();
  }

  carregarFormularios() {
    this.formService.getAll().subscribe(data => this.formularios = data);
  }

  onSubmit(): void {
    if (this.curriculoForm.valid) {
      if (this.editandoId) {
        this.formService.update(this.editandoId, this.curriculoForm.value)
          .subscribe(() => {
            this.carregarFormularios();
            this.resetForm();
          });
      } else {
        this.formService.create(this.curriculoForm.value)
          .subscribe(() => {
            this.carregarFormularios();
            this.resetForm();
          });
      }
    } else {
      this.curriculoForm.markAllAsTouched();
    }
  }

  editar(formulario: any) {
    this.curriculoForm.patchValue(formulario);
    this.editandoId = formulario.id;
  }

  remover(id: number) {
    if (confirm('Tem certeza que deseja remover?')) {
      this.formService.delete(id).subscribe(() => this.carregarFormularios());
    }
  }

  resetForm(): void {
    this.formService.resetForm(this.curriculoForm);
    this.editandoId = null;
  }

  isInvalid(field: string): boolean {
    return this.formService.isFieldInvalid(this.curriculoForm, field);
  }
}
