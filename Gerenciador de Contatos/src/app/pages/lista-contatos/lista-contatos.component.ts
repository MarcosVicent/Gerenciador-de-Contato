import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contato } from '../../models/contato.model';
import { ContatoService } from '../../services/contato.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.css']
})
export class ListaContatosComponent implements OnInit, OnDestroy {
  contatos: Contato[] = [];
  mensagem: string = '';
  mensagemTipo: 'sucesso' | 'erro' | 'aviso' = 'sucesso';

  private subscriptions: Subscription[] = [];

  constructor(
    private contatoService: ContatoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.contatoService.getContatos().subscribe(contatos => {
        this.contatos = contatos;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  editarContato(id: string): void {
    this.router.navigate(['/contatos/editar', id]);
  }

  removerContato(id: string): void {
    if (confirm('Tem certeza que deseja remover este contato?')) {
      const sucesso = this.contatoService.removerContato(id);
      if (sucesso) {
        this.exibirMensagem('Contato removido com sucesso!', 'sucesso');
      } else {
        this.exibirMensagem('Erro ao remover contato.', 'erro');
      }
    }
  }

  exibirMensagem(texto: string, tipo: 'sucesso' | 'erro' | 'aviso'): void {
    this.mensagem = texto;
    this.mensagemTipo = tipo;
    setTimeout(() => {
      this.mensagem = '';
      this.mensagemTipo = 'sucesso';
    }, 3000);
  }
}