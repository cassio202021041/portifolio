import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrl: './curriculo.component.scss'
})
export class CurriculoComponent {

  // Caminho para o PDF na pasta assets
  pdfPath: string = 'assets/svg/Cassio_Moreira_Dev_Pro.pdf';

  openPdf() {
    window.open(this.pdfPath, '_blank');
  }


}


