import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../../services/curriculo.service';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss']
})
export class CurriculoComponent implements OnInit {
  // Defina a propriedade abaixo!
  curriculo: any = null;

  constructor(private curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.curriculoService.getCurriculo().subscribe({
      next: (data) => {
        if (Array.isArray(data) && data.length > 0) {
          this.curriculo = data[0];
        }
      },
      error: (err) => {
        console.error('Erro ao buscar currículo:', err);
      }
    });
  }
}
