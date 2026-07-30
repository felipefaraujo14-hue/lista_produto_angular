import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from './item';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  id_produto: number = 0;
  descricao_produto: string = '';
  valor_unitario: number = 0.0;

  listaItens: Item[] = [];

  addItem() {
    if (!this.descricao_produto.trim()) return;
  
    const item: Item = {
      idProduto: this.listaItens.length + 1,
      descricaoProduto: this.descricao_produto,
      valorUnitario: this.valor_unitario,
      statusSelecionado: false 
    };
  
    this.listaItens.push(item);
  
    this.descricao_produto = '';
    this.valor_unitario = 0.0;
  }

  limpaForm() {
    this.listaItens = [];
    this.descricao_produto = '';
    this.valor_unitario = 0.0;
  }
}