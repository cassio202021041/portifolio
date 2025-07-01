import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../../services/curriculo.service';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrl: './curriculo.component.scss'
})
export class CurriculoComponent implements OnInit {

  curriculo: any;

  constructor(private curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.curriculoService.getCurriculo().subscribe(data => {
      if (Array.isArray(data) && data.length > 0) {
        this.curriculo = data[0]; // pega o primeiro currículo
      }
    });
  }
}
