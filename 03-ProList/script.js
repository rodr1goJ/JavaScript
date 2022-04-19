

class Produto{
    //funcao construtora denytro do projeto
    constructor(){

        this.id=0;//dentro desta classe vai ter um atributo id
        this.nomeProduto='';//dentro desta classe vai ter um atributo nome
        this.valor=0;//dentro desta classe vai ter um atributo valor
    }

    //definindo todos os metodos
    adicionar(){
        alert('metodo adicionar apertado');
    }
    excluir(){
        alert('item deletado');
    }

}
var produto = new Produto();//criou um objeto do tipo produto


