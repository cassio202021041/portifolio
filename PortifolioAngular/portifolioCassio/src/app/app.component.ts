import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(){
    (window as any)["pdfWorkerSrc2.14.305"] = '../../../assets/pdf.worker.min.js';
  }
  pdfSrc='https://github.com/KAYOKG/BibliotecaDev/blob/main/LivrosDev/Entendendo%20Algoritmos%20-%20Um%20Guia%20Ilustrado%20Para%20Programadores%20e%20Outros%20Curiosos%20-%20Autor%20(Aditya%20Y.%20Bhargava).pdf'



  title = 'portifolioCassio';

 
}
