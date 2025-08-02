import { Injectable } from '@angular/core';
import { Contato } from '../models/contato.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private _contatos: Contato[] = [];
  private contatosSubject: BehaviorSubject<Contato[]> = new BehaviorSubject(this._contatos);

  constructor() {
    this.carregarContatosDoLocalStorage();
  }

  getContatos(): Observable<Contato[]> {
    return this.contatosSubject.asObservable();
  }

  private carregarContatosDoLocalStorage(): void {
    const contatosSalvos = localStorage.getItem('contatos');
    if (contatosSalvos) {
      this._contatos = JSON.parse(contatosSalvos);
      this.contatosSubject.next(this._contatos);
    }
  }

  private salvarContatosNoLocalStorage(): void {
    localStorage.setItem('contatos', JSON.stringify(this._contatos));
    this.contatosSubject.next(this._contatos);
  }

  adicionarContato(contato: Contato): void {
    contato.id = 'contato-' + Date.now() + Math.random().toString(16).slice(2);
    this._contatos.push(contato);
    this.salvarContatosNoLocalStorage();
  }

  atualizarContato(contatoAtualizado: Contato): boolean {
    const index = this._contatos.findIndex(c => c.id === contatoAtualizado.id);
    if (index !== -1) {
      this._contatos[index] = contatoAtualizado;
      this.salvarContatosNoLocalStorage();
      return true;
    }
    return false;
  }

  removerContato(id: string): boolean {
    const contatosAntes = this._contatos.length;
    this._contatos = this._contatos.filter(c => c.id !== id);
    if (this._contatos.length < contatosAntes) {
      this.salvarContatosNoLocalStorage();
      return true;
    }
    return false;
  }

  obterContatoPorId(id: string): Contato | undefined {
    return this._contatos.find(c => c.id === id);
  }
}