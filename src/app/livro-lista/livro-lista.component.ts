import { Component } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent {
  editoras: Editora[] = [];
  livros: Livro[] = [];

  constructor(private controleEditoraService: ControleEditoraService, private constroleLivrosService: ControleLivrosService) { }

  ngOnInit(): void {
    this.editoras = this.controleEditoraService.getEditoras();
    this.livros = this.constroleLivrosService.obterLivros();
  }

  excluir(codigo: number): void {
    this.constroleLivrosService.excluir(codigo);
    this.livros = this.constroleLivrosService.obterLivros();
  }

  obterNomeEditora(codEditora: number): string {
    return this.controleEditoraService.getNomeEditora(codEditora) || 'Editora Desconhecida';
  }
}
