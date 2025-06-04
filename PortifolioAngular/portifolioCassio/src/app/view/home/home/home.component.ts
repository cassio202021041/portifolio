import { Component } from '@angular/core';
import { HeaderService } from '../../../components/template/header/header/header.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(headerService: HeaderService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {

  }
  openPdf() {
  window.open('assets/svg/Cassio_Moreira_Dev_Pro.pdf', '_blank');
}

}
