import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit{
  livro: Livro = new Livro(0,0,'','',[]);
  autoresForm: string = '';
  editoras: Editora[]= [];

  constructor(
    private editoraService: ControleEditoraService,
    private livroService: ControleLivrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editoras = this.editoraService.getEditoras();
  }

  adicionarLivro(): void {
    console.log(this.livro)
    this.livro.autores = this.autoresForm.split('\n')
    this.livroService.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
}
