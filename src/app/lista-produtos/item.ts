export class Item{
    idProduto?: number
    descricaoProduto?: string
    valorUnitario?: number
    statusSelecionado: boolean = false

    constructor(idProduto : number, descricaoProduto : string, valorUnitario : number) {
        this.idProduto = idProduto
        this.descricaoProduto = descricaoProduto
        this.valorUnitario = this.valorUnitario
    }
     
   
}