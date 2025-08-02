import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from '../../models/contato.model';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.css']
})
export class FormContatoComponent implements OnInit {
  contato: Contato = { id: '', nome: '', email: '', telefone: '' };
  isEditando: boolean = false;
  mensagem: string = '';
  mensagemTipo: 'sucesso' | 'erro' | 'aviso' = 'sucesso';

  constructor(
    private contatoService: ContatoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const contatoId = params.get('id');
      if (contatoId) {
        this.isEditando = true;
        const contatoExistente = this.contatoService.obterContatoPorId(contatoId);
        if (contatoExistente) {
          this.contato = { ...contatoExistente }; 
        } else {
          this.exibirMensagem('Contato não encontrado para edição.', 'erro');
          this.router.navigate(['/contatos']);
        }
      } else {
        this.isEditando = false;
        this.limparFormulario();
      }
    });
  }

  salvarContato(): void {
    if (this.isEditando) {
      const sucesso = this.contatoService.atualizarContato(this.contato);
      if (sucesso) {
        this.exibirMensagem('Contato atualizado com sucesso!', 'sucesso');
      } else {
        this.exibirMensagem('Erro ao atualizar contato.', 'erro');
      }
    } else {
      this.contatoService.adicionarContato(this.contato);
      this.exibirMensagem('Contato adicionado com sucesso!', 'sucesso');
    }
    this.router.navigate(['/contatos']);
  }

  limparFormulario(): void {
    this.contato = { id: '', nome: '', email: '', telefone: '' };
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