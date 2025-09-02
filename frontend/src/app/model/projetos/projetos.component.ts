import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {
    items = [
    {
      imagemUrl: 'https://via.placeholder.com/300x200',
      titulo: 'Projeto 1',
      link: 'https://exemplo.com/1',
      descricao: 'Descrição do projeto 1.'
    },
    {
      imagemUrl: 'https://via.placeholder.com/300x200',
      titulo: 'Projeto 2',
      link: 'https://exemplo.com/2',
      descricao: 'Descrição do projeto 2.'
    },
    {
      imagemUrl: 'https://via.placeholder.com/300x200',
      titulo: 'Projeto 3',
      link: 'https://exemplo.com/3',
      descricao: 'Descrição do projeto 3.'
    },
    {
      imagemUrl: 'https://via.placeholder.com/300x200',
      titulo: 'Projeto 4',
      link: 'https://exemplo.com/4',
      descricao: 'Descrição do projeto 4.'
    },
    {
      imagemUrl: 'https://via.placeholder.com/300x200',
      titulo: 'Projeto 5',
      link: 'https://exemplo.com/5',
      descricao: 'Descrição do projeto 5.'
    },
    {
      imagemUrl: 'https://via.placeholder.com/300x200',
      titulo: 'Projeto 6',
      link: 'https://exemplo.com/6',
      descricao: 'Descrição do projeto 6.'
    }
  ];

}
